import type { ContentSection } from '@/src/lib/types';

interface ContentSectionsProps {
  sections: ContentSection[];
}

export function ContentSections({ sections }: ContentSectionsProps) {
  return (
    <div className="content-grid">
      {sections.map((section, index) => (
        <article key={section.title} className="content-card reveal" style={{ animationDelay: `${index * 90}ms` }}>
          <h2>{section.title}</h2>
          <p>{section.text}</p>
          {section.bullets && section.bullets.length > 0 ? (
            <ul>
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
        </article>
      ))}
    </div>
  );
}
