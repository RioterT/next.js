// app/blog/page.tsx

import React from "react";
import { promises as fs } from "fs";
import path from "path";

// This function runs on the server to read local data
async function fetchBlogPosts() {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  const jsonData = await fs.readFile(filePath, "utf8");
  const posts = JSON.parse(jsonData);
  return posts;
}

const BlogPosts = async () => {
  const posts = await fetchBlogPosts();

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map((post: any) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
