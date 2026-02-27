"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

interface BlogPost {
  slug: string;
  title: string;
  publishedAt: string;
  summary: string;
  category: string;
}

const ALL_CATEGORY = "All";

export function BlogList({ posts }: { posts: BlogPost[] }) {
  const categories = [
    ALL_CATEGORY,
    ...Array.from(new Set(posts.map((p) => p.category).filter(Boolean))).sort(),
  ];
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORY);

  const filtered =
    activeCategory === ALL_CATEGORY
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button key={cat} onClick={() => setActiveCategory(cat)}>
            <Badge
              variant={activeCategory === cat ? "default" : "outline"}
              className={cn(
                "cursor-pointer transition-colors text-sm px-3 py-1",
                activeCategory === cat
                  ? ""
                  : "hover:bg-secondary"
              )}
            >
              {cat}
            </Badge>
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((post) => (
            <motion.div
              key={post.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <article className="group h-full rounded-lg border bg-card p-4 transition-colors hover:bg-accent">
                  <div className="flex items-center justify-between mb-2">
                    {post.category && (
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                    )}
                    <time className="text-xs text-muted-foreground">
                      {post.publishedAt}
                    </time>
                  </div>
                  <h3 className="font-medium tracking-tight mb-2 group-hover:underline">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {post.summary}
                  </p>
                </article>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground mt-8">
          No posts found in this category.
        </p>
      )}
    </div>
  );
}
