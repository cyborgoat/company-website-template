// Generic ContentCard for Blog, News, Demo, etc.
'use client';
import Link from 'next/link';
import Image from 'next/image';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Calendar, Clock} from 'lucide-react';
import {motion} from 'framer-motion';
import {cardHover, fadeInUp} from '@/lib/animations';
import type {ContentItem} from '@/types/content';

interface ContentCardProps<T extends ContentItem> {
  item: T;
  href: string;
  showReadTime?: boolean;
  readTimeField?: string;
  imageField?: string;
  imageClassName?: string;
}

export function ContentCard<T extends ContentItem>({
  item,
  href,
  showReadTime = false,
  readTimeField = 'readTime',
  imageField = 'image',
  imageClassName = '',
}: ContentCardProps<T>) {
  const imageUrl = item[imageField] || item.image || '';
  const readTime = showReadTime ? item[readTimeField] : undefined;
  return (
    <motion.div variants={fadeInUp} whileHover={cardHover} className="h-full">
      <Card className="flex flex-col h-full overflow-hidden border shadow-sm transition-shadow duration-300 dark:border-gray-700">
        {imageUrl && (
          <div className={`aspect-video relative w-full ${imageClassName}`}>
            <Image
              src={imageUrl}
              alt={`${item.title} thumbnail`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
              className="bg-muted"
            />
          </div>
        )}
        <CardHeader>
          <CardTitle className="text-xl">
            <Link href={href} className="hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-sm">
              {item.title}
            </Link>
          </CardTitle>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground pt-1">
            {item.date && (
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
              </span>
            )}
            {readTime && (
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {readTime}
              </span>
            )}
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription>{item.excerpt}</CardDescription>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm" asChild>
            <Link href={href}>Read More &rarr;</Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
