// Example: app/blog/[slug]/page.tsx
import MarkdownRenderer from '@/components/MarkdownRenderer';
// Assume you fetch your blog post data
// import { getBlogPost } from '@/lib/blog';

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    // const post = await getBlogPost(params.slug);
    const post = { // Dummy data for example
        title: "Styling Your Markdown",
        markdownContent: `
# Main Heading (h1)

This paragraph introduces the topic. We'll explore styling various elements.

## Subheading (h2)

Lists are common:

* Unordered item 1
* Unordered item 2
    * Nested item

1.  Ordered item 1
2.  Ordered item 2

> This is a blockquote. It often stands out a bit.
> It can span multiple lines.

Let's look at a [link to an example](https://example.com).

---

And finally, some code:

\`\`\`tsx
import React from 'react';

function MyComponent() {
  return <div>Hello!</div>;
}
\`\`\`

\`\`\`python
print("Hello from Python")
\`\`\`

This is \`inline code\`.
    `
    };

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        // Centering Container:
        // - `container` (optional, if you have it defined globally for padding)
        // - `mx-auto` centers the block horizontally
        // - `max-w-3xl` sets a max read width (adjust as needed: prose, 2xl, 4xl etc.)
        // - `py-8` or `py-12` adds vertical padding
        <article className="container mx-auto max-w-3xl py-12">
            <h1 className="text-center text-4xl md:text-5xl font-bold mb-8">{post.title}</h1>
            {/* MarkdownRenderer itself doesn't need centering classes now */}
            <MarkdownRenderer>
                {post.markdownContent}
            </MarkdownRenderer>
        </article>
    );
}
