"use client";

import { useCallback, useEffect, useState } from "react";
import type { PortfolioPost, PostType, TabId } from "@/types/portfolio";
import { profile, getPostsByTab, getPost } from "@/data";
import { ProfileMobileHeader } from "@/components/layout/profile-mobile-header";
import { ProfileHeader } from "./profile-header";
import { Highlights } from "./highlights";
import { ProfileTabs } from "./profile-tabs";
import { ProfileFooter } from "./profile-footer";
import { PostGrid } from "@/components/grid/post-grid";
import { PostModal } from "@/components/modal/post-modal";

interface ProfileClientProps {
  initialTab?: TabId;
  initialPost?: { type: PostType; slug: string };
}

export function ProfileClient({
  initialTab = "projects",
  initialPost,
}: ProfileClientProps) {
  const [activeTab, setActiveTab] = useState<TabId>(() => {
    if (initialPost) return initialPost.type;
    return initialTab;
  });
  const [selectedPost, setSelectedPost] = useState<PortfolioPost | null>(() => {
    if (initialPost) return getPost(initialPost.type, initialPost.slug) ?? null;
    return null;
  });
  const [selectedType, setSelectedType] = useState<PostType | null>(() => {
    if (initialPost) return initialPost.type;
    return null;
  });

  const openPost = useCallback(
    (type: PostType, post: PortfolioPost) => {
      setSelectedPost(post);
      setSelectedType(type);
      setActiveTab(type);
      window.history.pushState(null, "", `/p/${type}/${post.slug}`);
    },
    []
  );

  const closePost = useCallback(() => {
    setSelectedPost(null);
    setSelectedType(null);
    window.history.pushState(null, "", "/");
  }, []);

  const handlePostClick = useCallback(
    (post: PortfolioPost) => {
      openPost(activeTab, post);
    },
    [activeTab, openPost]
  );

  const handleTabChange = useCallback(
    (tab: TabId) => {
      setActiveTab(tab);
      if (selectedPost) {
        setSelectedPost(null);
        setSelectedType(null);
        window.history.pushState(null, "", "/");
      }
    },
    [selectedPost]
  );

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const match = path.match(/^\/p\/([^/]+)\/([^/]+)$/);
      if (match) {
        const [, type, slug] = match;
        const post = getPost(type as PostType, slug);
        if (post) {
          setSelectedPost(post);
          setSelectedType(type as PostType);
          setActiveTab(type as PostType);
        } else {
          setSelectedPost(null);
          setSelectedType(null);
        }
      } else {
        setSelectedPost(null);
        setSelectedType(null);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const posts = getPostsByTab(activeTab);

  return (
    <>
      <ProfileMobileHeader />
      <div className="mx-auto w-full max-w-[935px] md:px-5 md:pt-[30px]">
        <ProfileHeader profile={profile} />
        <Highlights highlights={profile.highlights} />
        <ProfileTabs activeTab={activeTab} onTabChange={handleTabChange} />
        <PostGrid
          posts={posts}
          activeTab={activeTab}
          onPostClick={handlePostClick}
        />
        <ProfileFooter />
      </div>
      <PostModal
        post={selectedPost}
        type={selectedType}
        onClose={closePost}
      />
    </>
  );
}
