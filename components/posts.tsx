"use client";
import { usePosts } from "@/store";
import Link from "next/link";
import { useEffect } from "react";

export default function Posts() {
  const posts = usePosts((state) => state.posts);
  const loading = usePosts((state) => state.loading);
  const getAllPosts = usePosts((state) => state.getAllPosts);

  useEffect(() => {
    getAllPosts();
  }, []);

  return loading ? (
    <h3>Loading...</h3>
  ) : (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
