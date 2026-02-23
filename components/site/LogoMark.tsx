import Image from "next/image";
import Link from "next/link";

interface LogoMarkProps {
  invert?: boolean;
  size?: "header" | "footer";
}

export function LogoMark({ invert = false, size = "header" }: LogoMarkProps) {
  const isFooter = size === "footer";

  return (
    <Link href="/" className={`brand-mark ${isFooter ? "brand-mark--footer" : ""}`} aria-label="Hiraad Institute Home">
      <Image
        src="/images/logo.jpg"
        alt="Hiraad Institute logo"
        width={isFooter ? 32 : 45}
        height={isFooter ? 32 : 46}
        className="brand-mark-image"
      />
      <span className={invert ? "brand-title brand-title--light" : "brand-title"}>HIRAAD</span>
      <span className={invert ? "brand-subtitle brand-subtitle--light" : "brand-subtitle"}>INSTITUTE</span>
    </Link>
  );
}
