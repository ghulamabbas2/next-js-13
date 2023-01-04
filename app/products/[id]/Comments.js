import React from "react";

async function getComments() {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments = await res.json();
  return comments;
}

const Comments = async () => {
  const comments = await getComments();

  return (
    <div className="mt-5">
      <h1 className="my-5">Comments</h1>
      {comments.map((comment) => (
        <p>{comment.name}</p>
      ))}
    </div>
  );
};

export default Comments;
