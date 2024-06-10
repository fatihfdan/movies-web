const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.length === 0 ? (
        <p>Henüz yorum yapılmamış</p>
      ) : (
        comments.map((comment, index) => (
          <div key={index}>
            <p>{comment}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default CommentList;
