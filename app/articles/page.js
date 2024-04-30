import React from "react";
import Link from "next/link";
export const metadata = {
  title: "articles page",
};
function articles() {
  return (
    <div className="main-div">
      <h1>articles</h1>
      <Link href="/posts">
        <button style={{ color: "blue" }}>Take me to the posts page </button>
      </Link>
    </div>
  );
}

export default articles;
