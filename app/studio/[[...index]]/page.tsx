"use client";

import { NextStudio } from "next-sanity/studio";

import config from "@/sanity.config";

const requiredEnvKeys = ["NEXT_PUBLIC_SANITY_PROJECT_ID"] as const;

export default function StudioPage() {
  const missingEnvKeys = requiredEnvKeys.filter((key) => !process.env[key]);

  if (missingEnvKeys.length > 0) {
    return (
      <main style={{ padding: 24, fontFamily: "var(--font-inter), sans-serif" }}>
        <h1 style={{ marginTop: 0 }}>Sanity Studio is not configured</h1>
        <p>
          Missing required environment variables: <code>{missingEnvKeys.join(", ")}</code>
        </p>
        <p>
          Local setup: add them to <code>.env.local</code> and restart the dev server. Dataset defaults to <code>production</code>.
        </p>
        <p>
          Vercel setup: add them in Project Settings → Environment Variables and redeploy. Dataset also defaults to <code>production</code>.
        </p>
      </main>
    );
  }

  return <NextStudio config={config} />;
}
