import React from "react";

function ShowArticlePage(props) {
console.log(props);
  return (
    <div className="main-div">
      <h1>showArticle</h1>
      <h1>{props.params.title}</h1>
    </div>
  );
}

export default ShowArticlePage;
