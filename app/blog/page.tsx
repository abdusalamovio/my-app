import { Metadata } from "next";
import Link from "next/link";

type Props = {
  id: number;
  title: string;
};

async function getData() {
  const resposne = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });

  if (!resposne.ok) throw new Error("Failed to fetch data");

  return resposne.json();
}

export const metadata: Metadata = {
  title: "Blog | Next App",
};

export default async function BlogPage() {
  const posts = await getData();

  return (
    <>
      <h1>Blog page</h1>
      <ul>
        {posts.map((post: Props) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
