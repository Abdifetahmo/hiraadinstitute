import { CTASection } from "@/components/site/CTASection";
import { IconCard } from "@/components/site/Cards";
import { PageHero } from "@/components/site/PageHero";
import { PageShell } from "@/components/site/PageShell";
import { SectionIntro } from "@/components/site/SectionIntro";
import type { ContentResolver } from "@/lib/site/types";
import { BookOpen, CloudSun, Handshake, HeartPulse, ScrollText, Shield, TrendingUp, Wheat } from "lucide-react";

interface ResearchPageContentProps {
  c: ContentResolver;
}

export function ResearchPageContent({ c }: ResearchPageContentProps) {
  const thematicAreas = [
    {
      icon: Handshake,
      title: c.t("research.thematic.1.title", "Peace, Conflict & Social Cohesion"),
      description: c.t(
        "research.thematic.1.description",
        "In-depth analysis of conflict drivers at local, regional, and cross-border levels — including clan dynamics, resource competition, youth marginalization, and the interaction between formal and informal authority. Research on peacebuilding, community-based conflict resolution, and long-term stability."
      )
    },
    {
      icon: Shield,
      title: c.t("research.thematic.2.title", "Policy, Governance & Accountability"),
      description: c.t(
        "research.thematic.2.description",
        "Examining how policies are formulated, implemented, and experienced within the Somali Region. Focus on institutional performance, transparency, accountability, rule of law, citizen-state relations, and how governance reforms translate at regional and local levels."
      )
    },
    {
      icon: Wheat,
      title: c.t("research.thematic.3.title", "Pastoralism, Agriculture & Livelihoods"),
      description: c.t(
        "research.thematic.3.description",
        "Pastoralism as a central pillar of regional development — examining climate variability, rangeland degradation, market access, mobility constraints, and sustainable livelihood transformation that respects traditional systems."
      )
    },
    {
      icon: HeartPulse,
      title: c.t("research.thematic.4.title", "Social Services & Human Development"),
      description: c.t(
        "research.thematic.4.description",
        "Assessing availability, quality, and distribution of education, healthcare, water, and sanitation. Examining structural barriers including geographic remoteness, capacity gaps, financing constraints, and inequalities affecting women, children, and pastoralists."
      )
    },
    {
      icon: CloudSun,
      title: c.t("research.thematic.5.title", "Climate Change & Environmental Resilience"),
      description: c.t(
        "research.thematic.5.description",
        "Understanding immediate climate impacts and long-term adaptation needs — mapping vulnerability, analyzing environmental trends, and informing climate-resilient development strategies and disaster risk reduction."
      )
    },
    {
      icon: TrendingUp,
      title: c.t("research.thematic.6.title", "Economic Development & Structural Transformation"),
      description: c.t(
        "research.thematic.6.description",
        "Examining infrastructure gaps, labor markets, investment environments, and access to finance. Sectoral analysis identifying opportunities for inclusive growth, job creation, cross-border trade, and value chain development."
      )
    },
    {
      icon: BookOpen,
      title: c.t("research.thematic.7.title", "Religion, Culture & Social Values"),
      description: c.t(
        "research.thematic.7.description",
        "Exploring how religious institutions, cultural values, and traditional practices influence social cohesion, ethical governance, conflict resolution, and community support systems. Integrating these into development policies."
      )
    },
    {
      icon: ScrollText,
      title: c.t("research.thematic.8.title", "History, Heritage & Collective Memory"),
      description: c.t(
        "research.thematic.8.description",
        "Researching historical trajectories, heritage sites, oral histories, and collective memory. Understanding history to interpret present governance challenges, identity politics, and social relations."
      )
    }
  ];

  const serviceCards = [
    {
      title: c.t("research.services.1.title", "Research & Analysis"),
      description: c.t(
        "research.services.1.description",
        "Applied policy research designed around real institutional needs."
      ),
      list: c.t(
        "research.services.1.list",
        "Needs assessment studies\nBaseline and sector diagnostics\nPolitical economy and governance analysis\nField data and methodological outputs"
      )
    },
    {
      title: c.t("research.services.2.title", "Consulting & Advisory"),
      description: c.t(
        "research.services.2.description",
        "Technical support for policy design, reform, and implementation."
      ),
      list: c.t(
        "research.services.2.list",
        "Policy advisory and technical notes\nInstitutional capacity assessments\nStrategic planning and reform support\nMonitoring, evaluation, and impact frameworks"
      )
    },
    {
      title: c.t("research.services.3.title", "Training & Capacity Building"),
      description: c.t(
        "research.services.3.description",
        "Building lasting policy and institutional capability across sectors."
      ),
      list: c.t(
        "research.services.3.list",
        "Policy analysis and research methods training\nData collection and interpretation skills\nGovernance and accountability workshops\nYouth leadership and community facilitation programs"
      )
    }
  ];

  const cycleSteps = [
    {
      number: c.t("research.cycle.1.number", "01"),
      title: c.t("research.cycle.1.title", "Scoping & Needs Identification"),
      description: c.t(
        "research.cycle.1.description",
        "Field engagement and policy consultations define problem-driven research priorities."
      )
    },
    {
      number: c.t("research.cycle.2.number", "02"),
      title: c.t("research.cycle.2.title", "Evidence Generation"),
      description: c.t(
        "research.cycle.2.description",
        "Methodologically rigorous qualitative and quantitative research captures institutional realities."
      )
    },
    {
      number: c.t("research.cycle.3.number", "03"),
      title: c.t("research.cycle.3.title", "Analysis & Policy Framing"),
      description: c.t(
        "research.cycle.3.description",
        "Findings are synthesized into feasible policy options aligned with institutional constraints."
      )
    },
    {
      number: c.t("research.cycle.4.number", "04"),
      title: c.t("research.cycle.4.title", "Stakeholder Validation"),
      description: c.t(
        "research.cycle.4.description",
        "Draft findings are tested through workshops, consultations, and practitioner feedback."
      )
    },
    {
      number: c.t("research.cycle.5.number", "05"),
      title: c.t("research.cycle.5.title", "Advisory & Application"),
      description: c.t(
        "research.cycle.5.description",
        "Policy briefs, technical notes, and direct advisory engagements support institutional uptake."
      )
    },
    {
      number: c.t("research.cycle.6.number", "06"),
      title: c.t("research.cycle.6.title", "Capacity Strengthening"),
      description: c.t(
        "research.cycle.6.description",
        "Training, tools, and peer learning build durable institutional capability."
      )
    },
    {
      number: c.t("research.cycle.7.number", "07"),
      title: c.t("research.cycle.7.title", "Monitoring & Learning"),
      description: c.t(
        "research.cycle.7.description",
        "Recommendation uptake and policy outcomes are tracked to refine future work."
      )
    },
    {
      number: c.t("research.cycle.8.number", "08"),
      title: c.t("research.cycle.8.title", "Strategic Renewal"),
      description: c.t(
        "research.cycle.8.description",
        "Priorities are adjusted as political, social, and environmental conditions evolve."
      )
    }
  ];

  return (
    <PageShell t={c.t}>
      <PageHero
        eyebrow={c.t("research.hero.eyebrow", "RESEARCH & ANALYSIS")}
        title={c.t("research.hero.title", "Our thematic scope")}
        description={c.t(
          "research.hero.description",
          "Hiraad's thematic scope reflects a systematic understanding of the Somali Region's development\ntrajectory within Ethiopia's federal system and the wider Horn of Africa."
        )}
      />

      <section className="section section--surface research-thematic">
        <div className="container">
          <div className="grid grid--two research-thematic-grid">
            {thematicAreas.map((area) => (
              <IconCard key={area.title} icon={area.icon} title={area.title} description={area.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted research-services">
        <div className="container">
          <SectionIntro
            eyebrow={c.t("research.services.eyebrow", "WHAT WE DO")}
            title={c.t("research.services.title", "Research, advisory, and institutional support")}
            description={c.t(
              "research.services.description",
              "Our research agenda is implemented through integrated service lines that connect evidence generation to policy action, institutional capacity, and practical implementation."
            )}
            eyebrowTone="accent"
            size="xl"
          />
          <div className="grid grid--three">
            {serviceCards.map((card) => (
              <article key={card.title} className="service-card">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <p className="service-card-list">{card.list}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--surface research-dialogue">
        <div className="container">
          <SectionIntro
            eyebrow={c.t("research.dialogue.eyebrow", "HOW WE ENGAGE")}
            title={c.t("research.dialogue.title", "Dialogue, forums, and community engagement")}
            description={c.t(
              "research.dialogue.description",
              "Beyond publications, Hiraad sustains policy impact through convening, participatory engagement, and iterative stakeholder validation."
            )}
            eyebrowTone="accent"
            size="xl"
          />

          <div className="grid grid--three">
            <article className="info-card">
              <h3>{c.t("research.dialogue.1.title", "Dialogue, Forums & Convenings")}</h3>
              <p>
                {c.t(
                  "research.dialogue.1.description",
                  "Structured multi-stakeholder engagement through policy roundtables, HADAF, youth forums, seminars, and expert consultations that connect evidence to policy deliberation."
                )}
              </p>
            </article>
            <article className="info-card">
              <h3>{c.t("research.dialogue.2.title", "Community Engagement")}</h3>
              <p>
                {c.t(
                  "research.dialogue.2.description",
                  "Participatory consultations, community outreach visits, and feedback systems ensure policy analysis remains grounded in lived realities and locally articulated priorities."
                )}
              </p>
            </article>
            <article className="info-card">
              <h3>{c.t("research.dialogue.3.title", "Media & Public Communication")}</h3>
              <p>
                {c.t(
                  "research.dialogue.3.description",
                  "Commentary and public analysis promote accurate, contextualized discourse around governance and development issues."
                )}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--dark research-cycle">
        <div className="container">
          <SectionIntro
            eyebrow={c.t("research.cycle.eyebrow", "INSTITUTIONAL APPROACH")}
            title={c.t("research.cycle.title", "The Hiraad Policy Impact Cycle")}
            description={c.t(
              "research.cycle.description",
              "Our structured model links contextual scoping, research, advisory engagement, institutional learning, and strategic renewal into a continuous policy impact cycle."
            )}
            eyebrowTone="accent"
            size="xl"
          />

          <div className="cycle-grid">
            {cycleSteps.map((step) => (
              <article key={`${step.number}-${step.title}`} className="cycle-step">
                <p className="cycle-step-number">{step.number}</p>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
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
