import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const LeadSchema = z.object({
  source: z.string().min(1).max(100).regex(/^[a-z0-9-]+$/i),
  email: z.string().email().max(320),
  answers: z.string().min(1).max(4000),
  page_source: z.string().max(500).optional(),
});

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => LeadSchema.parse(input))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin.from("leads").insert({
      source: data.source,
      email: data.email,
      answers: data.answers,
      page_source: data.page_source ?? null,
    });
    if (error) {
      console.error("Lead insert failed", error);
      throw new Error("Unable to save lead");
    }
    return { ok: true };
  });