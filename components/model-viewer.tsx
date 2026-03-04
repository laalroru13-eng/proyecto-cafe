"use client"

import { useEffect, useState } from "react"
import Script from "next/script"

export function ModelViewer() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (customElements.get("model-viewer")) {
      setReady(true)
    }
  }, [])

  return (
    <div className="relative h-full w-full">
      <Script
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"
        type="module"
        onLoad={() => setReady(true)}
      />
      {ready ? (
        <div
          className="h-full w-full"
          dangerouslySetInnerHTML={{
            __html: `
              <model-viewer
                src="/models/avatar.glb"
                camera-controls
                touch-action="pan-y"
                shadow-intensity="1"
                autoplay
                camera-orbit="30deg 75deg 2.5m"
                interaction-prompt="auto"
                style="width:100%;height:100%;background:transparent;"
              >
              </model-viewer>
            `,
          }}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary/30 border-t-primary" />
            <p className="text-sm text-muted-foreground">Cargando modelo 3D...</p>
          </div>
        </div>
      )}
    </div>
  )
}
