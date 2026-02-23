import { ButtonLink } from "@/components/site/ButtonLink";
import { CTASection } from "@/components/site/CTASection";
import { CompactCard } from "@/components/site/Cards";
import { PageHero } from "@/components/site/PageHero";
import { PageShell } from "@/components/site/PageShell";
import { SectionIntro } from "@/components/site/SectionIntro";
import type { ContentResolver } from "@/lib/site/types";

interface ContactPageContentProps {
  c: ContentResolver;
}

export function ContactPageContent({ c }: ContactPageContentProps) {
  const pathways = [
    {
      title: c.t("contact.path.1.title", "Partnerships & Institutional Collaboration"),
      description: c.t(
        "contact.path.1.description",
        "Joint research, co-hosted forums, technical engagements, and knowledge exchange built on mutual accountability."
      )
    },
    {
      title: c.t("contact.path.2.title", "Research Collaboration"),
      description: c.t(
        "contact.path.2.description",
        "Joint design, field partnerships, peer review, and co-publication for high-rigor, policy-relevant analysis."
      )
    },
    {
      title: c.t("contact.path.3.title", "Policy Engagement & Advisory"),
      description: c.t(
        "contact.path.3.description",
        "Evidence-informed technical assistance, briefs, and consultation support for institutions and reform initiatives."
      )
    },
    {
      title: c.t("contact.path.4.title", "Internship & Volunteer Opportunities"),
      description: c.t(
        "contact.path.4.description",
        "Practical pathways for students and early-career professionals to contribute to research, events, and outreach."
      )
    },
    {
      title: c.t("contact.path.5.title", "Youth Engagement & Innovation"),
      description: c.t(
        "contact.path.5.description",
        "Forums, leadership activities, and innovation pathways that integrate youth perspectives into policy processes."
      )
    },
    {
      title: c.t("contact.path.6.title", "Media & Donor Engagement"),
      description: c.t(
        "contact.path.6.description",
        "Expert commentary, public communication partnerships, and mission-aligned support for research and institutional growth."
      )
    }
  ];

  return (
    <PageShell t={c.t}>
      <PageHero
        eyebrow={c.t("contact.hero.eyebrow", "GET INVOLVED")}
        title={c.t("contact.hero.title", "Collaborate for evidence-based policy impact")}
        description={c.t(
          "contact.hero.description",
          "Hiraad offers multiple pathways for institutions, researchers, practitioners, youth, media, and partners to contribute to locally grounded policy knowledge and inclusive public dialogue."
        )}
      />

      <section className="section section--surface contact-pathways">
        <div className="container">
          <SectionIntro
            eyebrow={c.t("contact.path.eyebrow", "ENGAGEMENT PATHWAYS")}
            title={c.t("contact.path.title", "How individuals and institutions can engage")}
            description={c.t(
              "contact.path.description",
              "Engagement is guided by integrity, rigor, local ownership, and shared commitment to the public good."
            )}
            eyebrowTone="accent"
            size="xl"
          />

          <div className="grid grid--three">
            {pathways.map((item) => (
              <CompactCard key={item.title} meta="" title={item.title} description={item.description} variant="pathway" />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted contact-how">
        <div className="container">
          <SectionIntro
            title={c.t("contact.how.title", "How to engage with Hiraad")}
            description={c.t(
              "contact.how.description",
              "Individuals and organizations can reach out to explore collaboration, participation, or support aligned with Hiraad’s mission and independence."
            )}
            size="md"
          />

          <ul className="check-list">
            <li>{c.t("contact.how.1", "• Strengthen evidence-based policymaking")}</li>
            <li>{c.t("contact.how.2", "• Support inclusive policy dialogue and participation")}</li>
            <li>{c.t("contact.how.3", "• Advance locally grounded research and analysis")}</li>
            <li>{c.t("contact.how.4", "• Build institutional and human capacity")}</li>
          </ul>

          <article className="contact-box">
            <h3>{c.t("contact.box.title", "Start a collaboration")}</h3>
            <p>
              {c.t(
                "contact.box.description",
                "Email: info@hiraadinstitute.org\nLocation: Jigjiga, Somali Region, Ethiopia"
              )}
            </p>
            <ButtonLink href="mailto:info@hiraadinstitute.org" label={c.t("contact.box.button", "Contact Hiraad")} variant="dark" />
          </article>
        </div>
      </section>

      <CTASection
        title={c.t("shared.cta.title", "Partner with us to shape\npolicy that matters")}
        description={c.t(
          "shared.cta.description",
          "Whether you are a government institution, international organization, academic partner, or civil society group, we welcome collaboration that strengthens evidence-based policymaking in the Horn of Africa."
        )}
        primaryLabel={c.t("shared.cta.primary", "Get In Touch")}
        primaryHref="/contact"
        secondaryLabel={c.t("shared.cta.secondary", "Subscribe to Updates")}
        secondaryHref="#newsletter"
      />
    </PageShell>
  );
}
