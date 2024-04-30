import { resolve } from "styled-jsx/css";
import PostDetails from "@/app/components/PostDetails";
import { Suspense } from "react";
async function postDetailsPage({ params }) {
  const postId = params.postId;
  const loading =(<div><h1>Loading.......</h1></div>)

  return (
    <div style={{ padding: "20px" }}>
      <h1>Post Details</h1>

      <Suspense fallback={loading}>
        {" "}
        <PostDetails postId={postId} />
      </Suspense>
    </div>
  );
}

export default postDetailsPage;
