//import {useState} from 'react'
import reactLogo from '../assets/react.svg'
import BurgerMenu from './BurgerMenu';
import { navbarLinks } from './constants/navbarLinks';

const Navbar = () => {


  return (
    <nav className='flexBetween max-container padding-container z-30 py-5 border-2 border-red-500'>
        <a href="/">
            <img src={reactLogo} alt="logo provisorio" style={{width: '40px', height: '40px'}}/>
        </a>
        {/*navegación en desktop*/}
        <ul className="invisible h-full gap-12 lg:flex lg:visible">
          {navbarLinks.map(link => <li key={link.id} className="regular-10 text-white text-lg cursor-pointer pb-1.5 transition-all hover:font-bold">
                                <a src={link.link} >{link.title}</a>
                            </li>    )
          }          
        </ul>

        {/*navegación en mobile*/}
        <BurgerMenu/>
        
    </nav>
  )
}

export default Navbar;