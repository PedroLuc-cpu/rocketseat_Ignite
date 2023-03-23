import Header from "./components/Header"
import Style from './app.module.css'
import Post from "./components/Post"
import Sidebar from "./components/Sidebar"

import "./global.css"


export default function App() {

  return (
    <div>
      <Header/>
      <div className={Style.wrapper}>
        <Sidebar/>

        <main>
          <Post 
            author="Sêneca" 
            content="“Sorte é o que acontece quando a preparação encontra a oportunidade“."
          />
          <Post 
            author="Sêneca" 
            content="“Sorte é o que acontece quando a preparação encontra a oportunidade“."
          />

        </main>
      </div>
    </div>
  )
}
