import Style from './Header.module.css'
import igniteLogo from '../assets/Ignitelogo.svg'

export default function Header(){
       return(
              <header className={Style.header}>
                     <img src={igniteLogo} alt="igniteLogo" />
              </header>
       )
}