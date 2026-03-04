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
                ar
                ar-modes="webxr scene-viewer quick-look"
                camera-controls
                shadow-intensity="1"
                autoplay
                camera-orbit="30deg 75deg 2.5m"
                interaction-prompt="auto"
                style="width:100%;height:100%;background:transparent;"
              >
                <button slot="ar-button" style="position:absolute;bottom:24px;left:50%;transform:translateX(-50%);background:hsl(25 40% 30%);color:hsl(30 25% 97%);border:none;padding:12px 24px;border-radius:12px;font-size:14px;font-weight:600;cursor:pointer;box-shadow:0 10px 15px -3px rgba(0,0,0,0.1);">
                  Ver en Realidad Aumentada
                </button>
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
