import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "video-musical-001",
    title: "Vídeo musical destacado",
    artist: "Cliente",
    year: "2026",
    type: "Edición musical",
    description:
      "Pieza musical editada con foco en ritmo, energía visual y narrativa.",
    videoUrl: "https://videos.caarrasco.dev/videoclip-01.mp4",
    posterUrl: "",
    tags: ["musical", "videoclip", "color", "ritmo"],
    featured: true,
    isComingSoon: false,
  },
  {
    id: "placeholder-001",
    title: "Nuevo videoclip",
    artist: "Próximamente",
    year: "2026",
    type: "Videoclip",
    description: "Nuevo proyecto de videoclip musical en producción.",
    tags: ["videoclip", "próximamente"],
    featured: false,
    isComingSoon: true,
  },
  {
    id: "placeholder-002",
    title: "Edit musical",
    artist: "Próximamente",
    year: "2026",
    type: "Edición musical",
    description: "Edición musical con enfoque en narrativa y ritmo visual.",
    tags: ["musical", "social", "próximamente"],
    featured: false,
    isComingSoon: true,
  },
];