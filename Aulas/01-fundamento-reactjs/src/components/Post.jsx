import post from "./Post.module.css";

export default function Post() {
  return (
    <article className={post.post}>
      <header className={post.header}>
        <div className={post.author}>
          <img
            className={post.avatar}
            src="https://avatars.githubusercontent.com/u/85002280?v=4"
            alt=""
          />
          <div className={post.authorInfor}>
            <strong>Pedro Lucas</strong>
            <span>Web Develop</span>
          </div>
        </div>

        <time title="22 de março às 22:00h" dateTime="2023-03-22 22:41:32">
          Publicado há 1h
        </time>
      </header>

      <div className={post.content}>
        <p> Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
          <a href="#rocketseat"></a>
        </p>
      </div>

      <form className={post.commentForm}>
       <strong>Deixe seu feedback</strong>

       <textarea
       placeholder="Deixe seu comentário"
       />

       <button type="submit">Puclicar</button>
      </form>
    </article>
  );
}
