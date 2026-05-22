"use client";

import { getYouTubeEmbedUrl } from "@/utils/youtube";

interface VideoPlayerProps {
  youtubeUrl?: string;
  videoUrl?: string;
  posterUrl?: string;
  title?: string;
}

export default function VideoPlayer({
  youtubeUrl,
  videoUrl,
  posterUrl,
  title,
}: VideoPlayerProps) {
  if (youtubeUrl) {
    const embedUrl = getYouTubeEmbedUrl(youtubeUrl);
    if (!embedUrl) return null;

    return (
      <iframe
        src={`${embedUrl}?autoplay=1`}
        title={title || "Video"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        className="w-full h-full"
      />
    );
  }

  if (videoUrl) {
    return (
      <video
        controls
        playsInline
        preload="metadata"
        poster={posterUrl || undefined}
        className="w-full h-full object-contain"
      >
        <source src={videoUrl} type="video/mp4" />
        Tu navegador no soporta la reproducción de vídeo.
      </video>
    );
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
      <span className="text-zinc-600 text-sm uppercase tracking-wider">
        Vídeo pendiente de añadir
      </span>
    </div>
  );
}