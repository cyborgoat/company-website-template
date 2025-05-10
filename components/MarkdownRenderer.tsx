// components/MarkdownRenderer.tsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {vscDarkPlus} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {cn} from '@/lib/utils';
import Image from 'next/image';
import {Separator} from '@/components/ui/separator';

interface MarkdownRendererProps {
  children: string;
  className?: string;
}

/**
 * A component to render Markdown content with styles and syntax highlighting.
 * Uses Tailwind CSS classes for styling elements and prevents invalid HTML nesting.
 */
export function MarkdownRenderer({ children, className }: MarkdownRendererProps) {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const markdownComponents: any = {
    // Root wrapper - Apply base prose styles here
    div: ({ className: nodeClassName, ...props }) => (
      <div
        className={cn(
          'prose prose-slate dark:prose-invert',
          'prose-headings:font-semibold prose-a:text-primary',
          'max-w-none',
          className,
          nodeClassName
        )}
        {...props}
      />
    ),
    h1: ({ ...props }) => (
      <h1 className="text-3xl md:text-4xl font-bold mt-8 mb-4 border-b pb-2" {...props} />
    ),
    h2: ({ ...props }) => (
      <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-4 border-b pb-2" {...props} />
    ),
    h3: ({ ...props }) => (
      <h3 className="text-xl md:text-2xl font-semibold mt-6 mb-3" {...props} />
    ),
    h4: ({ ...props }) => (
      <h4 className="text-lg md:text-xl font-semibold mt-4 mb-2" {...props} />
    ),
    p: ({ ...props }) => (
      <p className="leading-relaxed mb-4" {...props} />
    ),
    a: ({ ...props }) => (
      <a className="text-primary hover:underline font-medium" {...props} />
    ),
    ul: ({ ...props }) => (
      <ul className="list-disc pl-6 mb-4 space-y-1" {...props} />
    ),
    ol: ({ ...props }) => (
      <ol className="list-decimal pl-6 mb-4 space-y-1" {...props} />
    ),
    li: ({ ...props }) => (
      <li className="my-1" {...props} />
    ),
    blockquote: ({ ...props }) => (
      <blockquote
        className="border-l-4 border-primary/50 bg-muted/50 pl-4 pr-2 py-2 my-6 italic text-muted-foreground"
        {...props}
      />
    ),
    hr: ({ ...props }) => (
      <Separator className="my-8" {...props} />
    ),
    code: ({ inline, className: codeClassName, children, ...props }) => {
      const match = /language-(\w+)/.exec(codeClassName || '');
      const language = match ? match[1] : undefined;

      if (!inline && language) {
        return (
          <div className="my-6 rounded-md overflow-hidden">
            <SyntaxHighlighter
              style={vscDarkPlus}
              language={language}
              PreTag="div"
              className="!p-4 !bg-gray-800 dark:!bg-gray-900 text-sm"
              {...props}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          </div>
        );
      }
      else if (!inline) {
        return (
          <pre className="bg-muted p-4 rounded-md overflow-x-auto my-6 text-sm">
            <code>{children}</code>
          </pre>
        );
      }
      else {
        return (
          <code
            className={cn(
              'px-[0.4em] py-[0.2em] mx-[0.1em] bg-muted text-sm rounded-[0.2em]',
              codeClassName
            )}
          >
            {children}
          </code>
        );
      }
    },
    table: ({ ...props }) => (
      <div className="overflow-x-auto my-6">
        <table className="w-full text-left border-collapse" {...props} />
      </div>
    ),
    thead: ({ ...props }) => <thead className="bg-muted" {...props} />,
    tbody: ({ ...props }) => <tbody className="divide-y divide-border" {...props} />,
    tr: ({ ...props }) => <tr className="border-b border-border" {...props} />,
    th: ({ ...props }) => (
      <th className="px-4 py-2 font-semibold text-left" {...props} />
    ),
    td: ({ ...props }) => (
      <td className="px-4 py-2" {...props} />
    ),
    img: ({ alt, src }) => (
      <div className="my-6 relative w-full h-auto">
        <Image
          src={src || ''}
          alt={alt || ''}
          width={800}
          height={600}
          className="max-w-full h-auto rounded-md shadow-md"
        />
      </div>
    ),
  };

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={markdownComponents}
      // Add this prop to prevent invalid nesting like <p><pre>...</pre></p>
      unwrapDisallowed={true}
    >
      {children}
    </ReactMarkdown>
  );
}

export default MarkdownRenderer;