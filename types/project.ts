export interface Project {
  id: string;
  title: string;
  artist: string;
  year: string;
  type: string;
  description: string;
  youtubeUrl?: string;
  videoUrl?: string;
  posterUrl?: string;
  tags: string[];
  featured: boolean;
  isComingSoon?: boolean;
}