"use client";

import { NextStudio } from "next-sanity/studio";

import config from "@/sanity.config";

export default function StudioPage() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return (
      <main style={{ padding: 24, fontFamily: "var(--font-inter), sans-serif" }}>
        <h1 style={{ marginTop: 0 }}>Sanity Studio is not configured</h1>
        <p>Set `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` in `.env.local` and reload.</p>
      </main>
    );
  }

  return <NextStudio config={config} />;
}
