"use client";

import type { PortfolioPost, TabId } from "@/types/portfolio";
import { VisualMedia } from "@/components/ui/visual-media";
import { SiGithub } from "react-icons/si";
import { HiOutlineArrowTopRightOnSquare, HiOutlinePhoto } from "react-icons/hi2";

interface SequenceListProps {
  posts: PortfolioPost[];
  activeTab: TabId;
  onPostClick: (post: PortfolioPost) => void;
}

export function SequenceList({ posts, activeTab, onPostClick }: SequenceListProps) {
  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-dashed border-border bg-muted">
          <HiOutlinePhoto className="h-6 w-6 text-muted-foreground" />
        </div>
        <h3 className="text-xl font-medium text-foreground">No Items Found</h3>
        <p className="text-sm text-muted-foreground mt-1">This section is currently empty.</p>
      </div>
    );
  }

  return (
    <div className="relative mt-8 pl-8 md:pl-12 timeline-line pb-12">
      <div className="space-y-12">
        {posts.map((post) => {
          const dateStr = post.duration ?? post.buildDate ?? post.eventDate ?? "";
          
          // Bullet list based on active tab
          const detailsList = 
            activeTab === "projects" ? post.features : 
            activeTab === "experience" ? post.responsibilities : 
            post.outcome ? [post.outcome] : undefined;

          return (
            <div key={post.id} className="relative group/item">
              {/* Timeline Node Dot */}
              <div className="absolute left-[-23px] md:left-[-35px] top-6 h-4 w-4 md:h-5 md:w-5 rounded-full border-4 border-background bg-primary shadow-sm transition-transform duration-200 group-hover/item:scale-125 z-10" />

              {/* Card Container */}
              <div className="flex flex-col lg:flex-row items-stretch gap-6 bg-muted/20 hover:bg-muted/40 rounded-xl p-5 md:p-6 border border-border transition-all duration-300 hover:shadow-sm">
                
                {/* Thumbnail Image */}
                <button
                  type="button"
                  onClick={() => onPostClick(post)}
                  className="relative aspect-[16/10] w-full lg:w-[260px] shrink-0 overflow-hidden rounded-lg cursor-pointer bg-muted border border-border group focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label={`Open slideshow for ${post.title}`}
                >
                  <VisualMedia
                    visual={post.thumbnail}
                    fallback={post.thumbnailFallback}
                    alt={post.title}
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Premium Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-xs font-semibold text-black shadow-sm">
                      <HiOutlinePhoto className="h-4 w-4" />
                      View Slideshow
                    </span>
                  </div>
                </button>

                {/* Information Area */}
                <div className="flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Header */}
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 
                        onClick={() => onPostClick(post)}
                        className="text-lg md:text-xl font-bold text-foreground hover:text-primary transition-colors cursor-pointer"
                      >
                        {post.title}
                      </h3>
                      {dateStr && (
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                          {dateStr}
                        </span>
                      )}
                    </div>

                    {/* About Text */}
                    <p className="text-sm md:text-[15px] text-foreground/80 leading-relaxed mt-2">
                      {post.description}
                    </p>

                    {/* Highlight Bullets */}
                    {detailsList && detailsList.length > 0 && (
                      <ul className="mt-3 space-y-1.5">
                        {detailsList.map((item, idx) => (
                          <li key={idx} className="text-xs md:text-sm text-muted-foreground flex items-start gap-2 leading-relaxed">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-2" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Footer (Technologies & Actions) */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-border/60">
                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {post.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-2 py-0.5 bg-muted border border-border rounded text-[10px] font-medium tracking-wide uppercase text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-3 ml-auto">
                      {post.githubUrl && (
                        <a
                          href={post.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-foreground hover:text-primary transition-colors"
                        >
                          <SiGithub className="h-4 w-4" />
                          Source
                        </a>
                      )}
                      {post.externalUrl && (
                        <a
                          href={post.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-foreground hover:text-primary transition-colors"
                        >
                          <HiOutlineArrowTopRightOnSquare className="h-4 w-4" />
                          Demo
                        </a>
                      )}
                      <button
                        type="button"
                        onClick={() => onPostClick(post)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-ig-link transition-colors cursor-pointer"
                      >
                        Slides ({post.slides.length})
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
