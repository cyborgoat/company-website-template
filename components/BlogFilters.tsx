'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';

interface BlogFiltersProps {
  availableTags: string[];
  currentQuery?: string;
  currentTags?: string[];
}

export function BlogFilters({ availableTags, currentQuery = '', currentTags = [] }: BlogFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState<string>(currentQuery);
  const [selectedTags, setSelectedTags] = useState<string[]>(currentTags);

  useEffect(() => {
    setQuery(currentQuery);
  }, [currentQuery]);

  useEffect(() => {
    setSelectedTags(currentTags);
  }, [currentTags]);

  const updateUrl = useCallback(
    (q: string, tags: string[]) => {
      const params = new URLSearchParams(searchParams.toString());
      if (q && q.trim().length > 0) {
        params.set('q', q.trim());
      } else {
        params.delete('q');
      }
      if (tags.length > 0) {
        params.set('tags', tags.join(','));
      } else {
        params.delete('tags');
      }
      const next = params.toString();
      router.push(`${pathname}${next ? `?${next}` : ''}`);
    },
    [pathname, router, searchParams]
  );

  // Debounce query updates
  useEffect(() => {
    const handle = setTimeout(() => {
      if (query !== (currentQuery || '')) {
        updateUrl(query, selectedTags);
      }
    }, 300);
    return () => clearTimeout(handle);
  }, [query, selectedTags, currentQuery, updateUrl]);

  const onToggleTag = (tag: string) => {
    const tagLower = tag.toLowerCase();
    const next = selectedTags.some((t) => t.toLowerCase() === tagLower)
      ? selectedTags.filter((t) => t.toLowerCase() !== tagLower)
      : [...selectedTags, tag];
    setSelectedTags(next);
    updateUrl(query, next);
  };

  const hasActiveFilters = useMemo(
    () => (query && query.trim().length > 0) || selectedTags.length > 0,
    [query, selectedTags]
  );

  const onClear = () => {
    setQuery('');
    setSelectedTags([]);
    updateUrl('', []);
  };

  return (
    <div className="mb-8 space-y-4">
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
        <input
          type="text"
          aria-label="Search blog posts"
          placeholder="Search by title or excerpt..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full sm:max-w-md rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
        <div className="flex items-center gap-2">
          {hasActiveFilters && (
            <Button variant="ghost" size="sm" onClick={onClear} aria-label="Clear filters">
              Reset
            </Button>
          )}
        </div>
      </div>

      {availableTags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {availableTags.map((tag) => {
            const isActive = selectedTags.some((t) => t.toLowerCase() === tag.toLowerCase());
            return (
              <Button
                key={tag}
                type="button"
                variant={isActive ? 'default' : 'outline'}
                size="sm"
                onClick={() => onToggleTag(tag)}
                aria-pressed={isActive}
              >
                {tag}
              </Button>
            );
          })}
        </div>
      )}
    </div>
  );
}


