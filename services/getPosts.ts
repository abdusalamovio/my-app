export async function getAllPosts() {
  const resposne = await fetch("/api/posts", {
    next: {
      revalidate: 60,
    },
  });

  if (!resposne.ok) throw new Error("Failed to fetch data");

  return resposne.json();
}

export async function getPostsBySearch(search: string) {
  const response = await fetch(`/api/posts?q=${search}`);

  if (!response.ok) throw new Error("Unable to fetch posts by search");

  return response.json();
}
