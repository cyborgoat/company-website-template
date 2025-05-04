// Generic ContentGrid for Blog, News, Demo, etc.
'use client';
import {motion} from 'framer-motion';
import {staggerContainer} from '@/lib/animations';
import type {ContentItem} from '@/types/content';
import {ContentCard} from './ContentCard';

interface ContentGridProps<T extends ContentItem> {
  items: T[];
  hrefPrefix: string;
  showReadTime?: boolean;
  readTimeField?: string;
  imageField?: string;
  imageClassName?: string;
}

export function ContentGrid<T extends ContentItem>({
  items,
  hrefPrefix,
  showReadTime = false,
  readTimeField = 'readTime',
  imageField = 'image',
  imageClassName = '',
}: ContentGridProps<T>) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={staggerContainer(0.15, 0.2)}
      initial="hidden"
      animate="visible"
    >
      {items.length > 0 ? (
        items.map((item, idx) => (
          <ContentCard
            key={`${item.slug}-${idx}`}
            item={item}
            href={`/${hrefPrefix}/${item.slug}`}
            showReadTime={showReadTime}
            readTimeField={readTimeField}
            imageField={imageField}
            imageClassName={imageClassName}
          />
        ))
      ) : (
        <motion.p
          className="col-span-full text-center text-muted-foreground mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          No items found.
        </motion.p>
      )}
    </motion.div>
  );
}
