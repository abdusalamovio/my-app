export async function getData() {
  const resposne = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });

  if (!resposne.ok) throw new Error("Failed to fetch data");

  return resposne.json();
}

export async function getPostsBySearch(search: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?q=${search}`
  );

  if (!response.ok) throw new Error("Unable to fetch posts by search");

  return response.json();
}
