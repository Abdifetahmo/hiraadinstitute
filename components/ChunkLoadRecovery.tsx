"use client";

import { useEffect } from "react";

const RELOAD_FLAG_KEY = "__hiraad_chunk_reload_once__";

function readErrorMessage(reason: unknown): string {
  if (!reason) return "";
  if (typeof reason === "string") return reason;
  if (typeof reason === "object") {
    const withMessage = reason as { message?: unknown; name?: unknown };
    const parts = [withMessage.name, withMessage.message].filter((part) => typeof part === "string");
    return parts.join(" ");
  }
  return String(reason);
}

function isChunkLoadError(message: string): boolean {
  return /ChunkLoadError|Loading chunk .* failed|CSS_CHUNK_LOAD_FAILED/i.test(message);
}

function safeGetFlag(): string | null {
  try {
    return window.sessionStorage.getItem(RELOAD_FLAG_KEY);
  } catch {
    return null;
  }
}

function safeSetFlag(value: string): void {
  try {
    window.sessionStorage.setItem(RELOAD_FLAG_KEY, value);
  } catch {
    // no-op
  }
}

function safeClearFlag(): void {
  try {
    window.sessionStorage.removeItem(RELOAD_FLAG_KEY);
  } catch {
    // no-op
  }
}

function reloadOnceForChunkError(message: string): void {
  if (!isChunkLoadError(message)) return;

  const alreadyRetried = safeGetFlag() === "1";
  if (alreadyRetried) {
    safeClearFlag();
    return;
  }

  safeSetFlag("1");
  window.location.reload();
}

export function ChunkLoadRecovery() {
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      reloadOnceForChunkError(event.message ?? "");
    };

    const handleRejection = (event: PromiseRejectionEvent) => {
      const message = readErrorMessage(event.reason);
      reloadOnceForChunkError(message);
    };

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleRejection);

    const clearTimer = window.setTimeout(() => {
      safeClearFlag();
    }, 10000);

    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleRejection);
      window.clearTimeout(clearTimer);
    };
  }, []);

  return null;
}

