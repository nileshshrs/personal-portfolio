"use client"

import { useEffect } from "react"

import { HexagonLoader } from "@/components/ui/Loader/HexagonLoader"
import {
  loaderAnimationDurationMs,
  loaderStorageKey,
} from "@/lib/loader"

export function InitialLoader() {
  useEffect(() => {
    const shouldPersist = process.env.NODE_ENV === "production"
    const root = document.documentElement

    if (root.dataset.loaderActive !== "true") {
      return
    }

    if (shouldPersist) {
      document.cookie = `${loaderStorageKey}=true; path=/; samesite=lax`
    }

    const timeoutId = globalThis.setTimeout(() => {
      root.dataset.loaderActive = "false"
    }, loaderAnimationDurationMs)

    return () => {
      globalThis.clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="portfolio-loader pointer-events-none fixed inset-0 z-90 flex items-center justify-center bg-slate-900 px-6 opacity-100 transition-[opacity,visibility] duration-500 ease-out"
    >
      <div className="flex flex-col items-center gap-5">
        <HexagonLoader />
      </div>
    </div>
  )
}
