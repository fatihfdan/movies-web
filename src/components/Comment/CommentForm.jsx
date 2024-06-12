/* eslint-disable react/prop-types */
import { useState } from "react";

const CommentForm = ({ addComment }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      addComment(comment);
      setComment("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Yorumunuzu yazın."
      ></textarea>
      <button type="submit">Yorum Yap</button>
    </form>
  );
};

export default CommentForm;
