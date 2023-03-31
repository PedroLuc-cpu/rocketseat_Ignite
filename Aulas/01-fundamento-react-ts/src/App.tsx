import Header from "./components/Header"
import Style from './app.module.css'
import Post from "./components/Post"
import Sidebar from "./components/Sidebar"
import "./global.css"


const post =[
  {
    id:1,
    author:{
      avatarUrl:"https://avatars.githubusercontent.com/u/56851943?v=4",
      name:"Eline Ester",
      role:"Designer",
    },
    content:[
     {type:"paragraph", content: "Fala galeraa"},
     {type:"paragraph", content: "Acabei de subir mais um projeto no meu portfolio.🚀"},
     {type:"link", content: "jane.design"},
    ],
    publicheAt: new Date("2023-03-24 22:00:00")
  },

    {
    id:2,
    author:{
      avatarUrl:"https://avatars.githubusercontent.com/u/1149845?s=70&v=4",
      name:"Pedro Lucas",
      role:"Web Developer"
    },
    content:[
     {type:"paragraph", content: "Fala galeraa"},
     {type:"paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
     {type:"link", content: "jane.design/doctorcare"},
    ],
    publicheAt: new Date("2022-05-03 20:00:00")
  }
]


export default function App() {


  return (
    <div>
      <Header/>
      <div className={Style.wrapper}>
        <Sidebar/>

        <main>
          {
            post.map(post => {
             return( 
             <Post
             key={post.id}
             author={post.author}
             content={post.content}
             publicheAt={post.publicheAt}
             /> 
             )
            })
          }
        </main>
      </div>
    </div>
  )
}
