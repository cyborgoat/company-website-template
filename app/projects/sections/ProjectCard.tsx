import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {ExternalLink} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl?: string | null;
  tags?: string[];
}

export function ProjectCard({ project }: { project: ProjectData }) {
  return (
    <Card className="flex flex-col h-full overflow-hidden border shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="aspect-video relative w-full">
        <Image
          src={project.imageUrl || "https://images.pexels.com/photos/4614204/pexels-photo-4614204.jpeg"}
          alt={`${project.title} thumbnail`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 pt-2">
            {project.tags.map(tag => (
              <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
            ))}
          </div>
        )}
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{project.description}</CardDescription>
      </CardContent>
      <CardFooter>
        {project.projectUrl && (
          <Button variant="outline" size="sm" asChild>
            <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer">
              View Project
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
