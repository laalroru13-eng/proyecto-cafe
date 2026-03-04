"use client"

import { useEffect, useRef } from "react"

export function ModelViewer() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    import("@google/model-viewer")
  }, [])

  return (
    <div ref={containerRef} className="relative h-full w-full">
      {/* @ts-expect-error - model-viewer is a web component */}
      <model-viewer
        src="/models/avatar.glb"
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        shadow-intensity="1"
        autoplay
        camera-orbit="30deg 75deg 2.5m"
        min-camera-orbit="auto auto auto"
        max-camera-orbit="auto auto auto"
        interaction-prompt="auto"
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
          "--poster-color": "transparent",
        }}
      >
        <button
          slot="ar-button"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer rounded-xl border-none bg-primary px-6 py-3 font-sans text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:shadow-xl"
        >
          Ver en Realidad Aumentada
        </button>
      </model-viewer>
    </div>
  )
}
