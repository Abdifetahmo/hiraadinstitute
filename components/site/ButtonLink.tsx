import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "dark" | "outline-light" | "accent";

interface ButtonLinkProps {
  href: string;
  label: string;
  variant?: ButtonVariant;
  className?: string;
}

const variantClassMap: Record<ButtonVariant, string> = {
  primary: "btn btn-primary",
  secondary: "btn btn-secondary",
  dark: "btn btn-dark",
  "outline-light": "btn btn-outline-light",
  accent: "btn btn-accent"
};

function isExternal(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:");
}

export function ButtonLink({ href, label, variant = "primary", className }: ButtonLinkProps) {
  const classes = `${variantClassMap[variant]}${className ? ` ${className}` : ""}`;

  if (isExternal(href)) {
    return (
      <a className={classes} href={href} target="_blank" rel="noreferrer">
        {label}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {label}
    </Link>
  );
}
