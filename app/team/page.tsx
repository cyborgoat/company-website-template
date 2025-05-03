// app/team/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Linkedin, Github, Twitter, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

// Define the structure for a team member
interface TeamMember {
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

// Your team data
const teamMembers: TeamMember[] = [
    { id: 'jane-doe', name: 'Dr. Jane Doe', title: 'Chief Executive Officer', imageUrl: '/images/team/jane-doe.jpg', bio: 'Visionary leader with over 15 years of experience in AI R&D and commercialization.', category: 'Leadership', socials: { linkedin: '#', twitter: '#' } },
    { id: 'alex-smith', name: 'Alex Smith', title: 'Head of Research', imageUrl: '/images/team/alex-smith.jpg', bio: 'Pioneering research in Natural Language Processing and Large Language Models.', category: 'Research', expertise: ['NLP', 'Large Language Models', 'Deep Learning'], socials: { linkedin: '#', github: '#', website: '#' } },
    { id: 'maria-garcia', name: 'Maria Garcia', title: 'Lead AI Engineer', imageUrl: '/images/team/maria-garcia.jpg', bio: 'Expert in building scalable machine learning infrastructure and deploying AI models.', category: 'Engineering', expertise: ['MLOps', 'Cloud Architecture (AWS)', 'Distributed Systems', 'Python'], socials: { linkedin: '#', github: '#' } },
    { id: 'chen-wang', name: 'Chen Wang', title: 'Senior UX Designer', imageUrl: '/images/team/chen-wang.jpg', bio: 'Designing intuitive and effective interfaces for complex AI applications.', category: 'Design', expertise: ['Human-AI Interaction', 'Design Systems', 'Prototyping'], socials: { linkedin: '#', website: '#' } },
    { id: 'sam-jones', name: 'Sam Jones', title: 'Machine Learning Engineer', bio: 'Focusing on computer vision applications and model optimization.', category: 'Engineering', expertise: ['Computer Vision', 'PyTorch', 'Model Optimization'], socials: { linkedin: '#', github: '#' } },
]; // Remember to replace '#' with actual links and add real images!


// Metadata for the page
export const metadata: Metadata = {
    title: 'Our Team | Your AI Company', // Customize
    description: 'Meet the talented team behind our cutting-edge AI solutions.',
};

// Helper component for social links
function SocialLink({ href, icon: Icon, label }: { href?: string, icon: React.ElementType, label: string }) {
    if (!href) return null;
    return (
        <Link href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-muted-foreground hover:text-primary transition-colors">
            <Icon className="h-5 w-5" />
        </Link>
    );
}

// Helper component for each Team Member's Card (with fix for line breaks)
function TeamMemberCard({ member }: { member: TeamMember }) {
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

            {/* Added w-full, whitespace-nowrap, overflow-hidden, text-ellipsis */}
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
                {/* Social Links */}
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


// Main Page Component
export default function TeamPage() {
    const categories = ['Leadership', 'Research', 'Engineering', 'Design', 'Operations'];
    const groupedMembers: { [key: string]: TeamMember[] } = {};

    teamMembers.forEach(member => {
        const category = member.category || 'Other';
        if (!groupedMembers[category]) {
            groupedMembers[category] = [];
        }
        groupedMembers[category].push(member);
    });

    return (
        <main className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
            <div className="text-center mb-12 md:mb-16">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                    Meet Our Team
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                    Driving innovation in AI with expertise, passion, and collaboration.
                </p>
            </div>

            {categories.map(category => (
                groupedMembers[category] && groupedMembers[category].length > 0 && (
                    <section key={category} className="mb-12 md:mb-16">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-center border-b pb-3">{category}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                            {groupedMembers[category].map((member) => (
                                <TeamMemberCard key={member.id} member={member} />
                            ))}
                        </div>
                    </section>
                )
            ))}
            {groupedMembers['Other'] && groupedMembers['Other'].length > 0 && (
                <section className="mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-center border-b pb-3">Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                        {groupedMembers['Other'].map((member) => (
                            <TeamMemberCard key={member.id} member={member} />
                        ))}
                    </div>
                </section>
            )}
        </main>
    );
}