import Avatar from "./Avatar"
import sidebar from "./Sidebar.module.css"
import {PencilLine} from 'phosphor-react'

export default function SideBar(){
       return(
             <aside className={sidebar.sidebar}>
              <img 
               className={sidebar.cover}
               src="https://images.unsplash.com/photo-1570649243616-238b814943e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
              />
              
              <div className={sidebar.profile}>
                     <Avatar  src="https://avatars.githubusercontent.com/u/85002280?v=4"/>
                     <strong>Pedro Lucas</strong>
                     <span>FrontEnd & BackEnd</span>
              </div>

              <footer>
                     <a href="#">
                      <PencilLine size={20}/> 
                      Editar seu Perfil
                     </a>
              </footer>
             </aside> 
       )
}