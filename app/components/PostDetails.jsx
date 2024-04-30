import React from "react";
import { resolve } from "styled-jsx/css";

async function PostDetails({ postId }) {
//   const postId = params.postId;

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      // cache: "force-cache",
      // ssg
      // cache: "no-store",
      // ssr
      next: {
        revalidate: 120,
      },
      // isg
    }
  );
  const post = await response.json();

  return (
    <div >
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
        {/* <h1></h1> */}
        <hr />
        <p>{post.body}</p>
      </div>
    </div>
  );
}

export default PostDetails;
