import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import post from "./Post.module.css";
import Comment from "./Comment";
import Avatar from "./Avatar";
import { useState } from "react";

export default function Post({ author, publicheAt, content }) {

  // Array new comments
  const [comments, setComments] = useState(["Meu Primeiro comentario"]);
  const [newCommentsText, setnewCommentsText] = useState('')


  const publishedDateFormat = format(publicheAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publicheAt, {
    locale: ptBR,
    addSuffix: true,
  });


// event handlers -->
  function handleCreateNewComment() {
    //  event.preventDefault() evento para não redirect "Single-page application"
    event.preventDefault();

    // value do comentario :>
    setComments([...comments, newCommentsText]);

    setnewCommentsText("")
  }

  function handleNewCommentChange(){
    event.target.setCustomValidity("");
   setnewCommentsText(event.target.value)
  }

  // function de invalidação
  function handleNewCommentInvalid(){
    console.log(event.target.setCustomValidity("Escreva algo"));
  }


  // comunicação do componente comentario
    function deleteComment(commentToDelete){
      const commentsWithoutDeletedOne = comments.filter(comment =>{
        return comment !== commentToDelete;
      })
      console.log(commentsWithoutDeletedOne);

      setComments(commentsWithoutDeletedOne)
    }

    const isNewCommentEmpty = newCommentsText.length === 0;

  return (
    <article className={post.post}>
      <header className={post.header}>
        <div className={post.author}>
          <Avatar src={author.avatarUrl} />

          <div className={post.authorInfor}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormat} dateTime={publicheAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={post.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={post.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe seu comentário"
          value={newCommentsText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>
      <div className={post.commentList}>
        {comments.map((newComment) => {
          return (
            <Comment
              key={newComment}
              content={newComment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
