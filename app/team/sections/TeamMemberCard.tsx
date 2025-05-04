import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {Github, Globe, Linkedin, Twitter} from 'lucide-react';
import Link from 'next/link';

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  imageUrl?: string;
  bio?: string;
  expertise?: string[];
  socials?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    website?: string;
  };
  category?: 'Leadership' | 'Research' | 'Engineering' | 'Design' | 'Operations';
}

function SocialLink({ href, icon: Icon, label }: { href?: string, icon: React.ElementType, label: string }) {
  if (!href) return null;
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-muted-foreground hover:text-primary transition-colors">
      <Icon className="h-5 w-5" />
    </Link>
  );
}

export function TeamMemberCard({ member }: { member: TeamMember }) {
  const initials = member.name
    .split(' ')
    .map(n => n[0])
    .slice(0, 2)
    .join('');

  return (
    <Card className="flex flex-col items-center p-6 transition-shadow hover:shadow-md dark:hover:shadow-primary/10 h-full">
      <Avatar className="w-24 h-24 mb-4 ring-2 ring-offset-2 ring-offset-background ring-primary/20">
        <AvatarImage src={member.imageUrl} alt={member.name} />
        <AvatarFallback className="text-xl font-semibold">{initials}</AvatarFallback>
      </Avatar>
      <CardHeader className="text-center p-2 mb-2 w-full">
        <CardTitle className="text-lg font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
          {member.name}
        </CardTitle>
        <CardDescription className="text-primary whitespace-nowrap overflow-hidden text-ellipsis">
          {member.title}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0 flex-grow flex flex-col items-center w-full pt-2">
        {member.bio && (
          <p className="text-sm text-muted-foreground mb-4 text-center flex-grow min-h-[4em]">{member.bio}</p>
        )}
        {member.expertise && member.expertise.length > 0 && (
          <div className="flex flex-wrap justify-center gap-1.5 mb-4">
            {member.expertise.map(skill => (
              <Badge key={skill} variant="secondary" className="text-xs font-medium">{skill}</Badge>
            ))}
          </div>
        )}
        <div className="flex space-x-4 mt-auto">
          <SocialLink href={member.socials?.linkedin} icon={Linkedin} label={`${member.name} LinkedIn`} />
          <SocialLink href={member.socials?.github} icon={Github} label={`${member.name} GitHub`} />
          <SocialLink href={member.socials?.twitter} icon={Twitter} label={`${member.name} Twitter/X`} />
          <SocialLink href={member.socials?.website} icon={Globe} label={`${member.name} Website`} />
        </div>
      </CardContent>
    </Card>
  );
}
