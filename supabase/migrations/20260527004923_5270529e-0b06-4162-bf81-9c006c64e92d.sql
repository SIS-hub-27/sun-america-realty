-- Drop the permissive anon INSERT policy; inserts will now go through a server function using the service role.
DROP POLICY IF EXISTS "Anyone can submit a lead" ON public.leads;

-- Revoke any direct API access for anon/authenticated. service_role bypasses RLS and remains able to operate.
REVOKE ALL ON public.leads FROM anon;
REVOKE ALL ON public.leads FROM authenticated;
GRANT ALL ON public.leads TO service_role;

-- Add length constraints to prevent oversized submissions.
ALTER TABLE public.leads
  ADD CONSTRAINT leads_email_length CHECK (char_length(email) <= 320),
  ADD CONSTRAINT leads_source_length CHECK (char_length(source) <= 100),
  ADD CONSTRAINT leads_answers_length CHECK (char_length(answers) <= 4000),
  ADD CONSTRAINT leads_page_source_length CHECK (page_source IS NULL OR char_length(page_source) <= 500);