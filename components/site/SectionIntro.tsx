interface SectionIntroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
  eyebrowTone?: "green" | "accent";
  size?: "xl" | "lg" | "md" | "sm";
}

export function SectionIntro({
  eyebrow,
  title,
  description,
  centered = false,
  className,
  eyebrowTone = "green",
  size = "xl"
}: SectionIntroProps) {
  const classes = [
    "section-intro",
    centered ? "section-intro--centered" : "",
    eyebrowTone === "accent" ? "section-intro--accent-eyebrow" : "",
    `section-intro--${size}`,
    className ?? ""
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
