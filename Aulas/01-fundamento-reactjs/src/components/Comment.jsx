import { useState } from "react";
import Avatar from "./Avatar";
import Style from "./Comment.module.css";
import { Trash, ThumbsUp } from "phosphor-react";

export default function Comment({ content, onDeleteComment }) {
  function handleDeleteComment(){
    onDeleteComment(content);
  }

  const [toGiveLike, setToGiveLike] = useState(0)

  function handToGiveLike(){
      
   const like = toGiveLike + 1;

   if(toGiveLike === 0){
       return setToGiveLike(like);

   }else{
    return setToGiveLike(like - like);
   }

   }

  return (
    <div className={Style.comment}>
      <Avatar
        hasborder={false}
        src="https://avatars.githubusercontent.com/u/69590972?s=200&v=4"
      />

      <div className={Style.commentBox}>
        <div className={Style.commentContent}>
          <header>
            <div className={Style.authorAndTime}>
              <strong>Pedro Lucas</strong>
              <time
                title="22 de março às 22:00h"
                dateTime="2023-03-22 22:41:32"
              >
                {" "}
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar cometário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handToGiveLike}>
            <ThumbsUp />
            Aplaudir <span>{toGiveLike}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
