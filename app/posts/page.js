import React from "react";
import Link from "next/link";
import Todo from "../components/Todo";
// import Link from "next/link";
async function Page() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    // cache: "force-cache",
    // ssg
    // cache: "no-store",
    // ssr
    next: {
      revalidate: 120,
    },
    // isr
  });
  const posts = await response.json();
  const postJSX = posts.map((post) => {
    return (
      <Link
        href={`/posts/${post.id}`}
        style={{
          width: "70%",
        }}
      >
        <div
          style={{
            width: "100%",
            background: "white",
            padding: "10px",
            borderRadius: "10px",
            color: "black",
            marginTop: "20px",
          }}
        >
          <h1>{post.title}</h1>
          <p>{post.body}</p>{" "}
        </div>
      </Link>
    );
  });
  console.log(posts);

  return (
    <div className="main-div">
      <h1>Posts</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {postJSX}
      </div>
      {/* <Link href="/articles">
        <button style={{ color: "red" }}>Take me to the articles page</button>
      </Link>
      <h2>Postssss</h2>
      <h3>{posts.title}</h3>
      <div style={{ backgroundColor: "blue" }}>
        <Todo />
      </div> */}
      <div style={{ backgroundColor: "blue" }}>
        <Todo />
      </div>
    </div>
  );
}

export default Page;
