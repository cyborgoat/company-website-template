import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, Tag } from 'lucide-react';
import type { BlogPostData } from '@/types/content';

export function BlogList({ posts }: { posts: BlogPostData[] }) {
  if (posts.length === 0) {
    return (
      <p className="text-muted-foreground mt-12 text-center">No posts found.</p>
    );
  }
  return (
    <div className="space-y-2">
      {posts.map((post) => {
        const tags: string[] = Array.isArray((post as any).tags)
          ? ((post as any).tags as string[])
          : [];
        const imageUrl = (post as any).image as string | undefined;
        return (
          <article key={post.slug}>
            <Link
              href={`/blogs/${post.slug}`}
              className="group block rounded-lg p-4 transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <div className="flex gap-4 items-start">
                <div className="relative w-40 sm:w-48 aspect-[16/10] overflow-hidden rounded-md flex-shrink-0">
                  {imageUrl ? (
                    <Image
                      src={imageUrl}
                      alt={`${post.title} thumbnail`}
                      fill
                      sizes="(max-width: 640px) 40vw, 320px"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="h-full w-full bg-muted/60" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    {post.title}
                    <span className="ml-1 inline-block translate-x-0 transition-transform duration-200 group-hover:translate-x-0.5">
                      →
                    </span>
                  </h2>
                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                    {post.date && (
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                    )}
                    {post.readTime && (
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    )}
                    {(post as any).author && (
                      <span className="flex items-center gap-1.5">
                        • {(post as any).author as string}
                      </span>
                    )}
                  </div>
                  {post.excerpt && (
                    <p className="mt-3 text-muted-foreground">
                      {post.excerpt}
                    </p>
                  )}
                  {tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2 text-xs">
                      {tags.map((t) => (
                        <span key={t} className="inline-flex items-center gap-1 rounded-md border px-2 py-0.5 bg-background/60">
                          <Tag className="h-3 w-3" /> {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          </article>
        );
      })}
    </div>
  );
}


