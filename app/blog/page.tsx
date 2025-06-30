import Posts from "@/components/posts";
import PostSearch from "@/components/postSearch";

export default function BlogPage() {
  return (
    <>
      <h1>Blog page</h1>
      <PostSearch />
      <Posts />
    </>
  );
}
