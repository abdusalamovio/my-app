import Link from "next/link";

type Post = {
  id: number;
  title: string;
};

type Props = {
  posts: Post[];
};

export default function Posts({ posts }: Props) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
