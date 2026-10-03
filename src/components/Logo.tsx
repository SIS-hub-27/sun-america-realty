import logoColor from "@/assets/logo.png";
import logoWhite from "@/assets/logo-white.png";

export function Logo({
  className = "",
  variant = "color",
}: {
  className?: string;
  variant?: "color" | "white";
}) {
  return (
    <img
      src={variant === "white" ? logoWhite : logoColor}
      alt="SUN AMERICA REALTY, LLC"
      className={`block h-10 md:h-14 w-auto select-none ${className}`}
      width={1154}
      height={393}
      draggable={false}
    />
  );
}