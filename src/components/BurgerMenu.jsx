import { useState } from "react";
import './navbar.css'
import { navbarLinks } from "./constants/navbarLinks";

const BurgerMenu = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [burgerClass, setBurgerClass] = useState('burger-bar unclicked');
    const [isMenuClicked , setIsMenuClicked] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass('burger-bar clicked');
        } else {
            setBurgerClass('burger-bar unclicked');
        }
        setIsMenuClicked(!isMenuClicked);
    }

    const doBothChangesFunction = () => {
        //Despliega o repliega el menú para moviles
        toggleMenu();
        //Activa animación relacionada al burger-menu-button 
        updateMenu();
    }

    /*const toggleMenu = useCallback(() => {
        setIsOpen(prev => !prev);  
    }, []);*/

    return (
        <div className="relative">
            <div className='burger-menu-button lg:invisible' onClick={doBothChangesFunction}>
                <div className={burgerClass}></div>
                <div className={burgerClass}></div>
                <div className={burgerClass}></div>
            </div>

            <div className={`fixed top-0 right-0 h-full w-64 bg-sky-700 shadow-lg transform
            ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden z-45`}>
                
                <div className="flex justify-end p-4">

                </div>
                <ul className="text-white flex flex-col items-center justify-center space-y-6 mt-10">
                    {navbarLinks.map(link => <li key={link.id} className="text-lg hover:text-gray-300 transition">
                                                    <a src={link.link} >{link.title}</a>
                                                </li>    )
                    }  
                </ul>
            </div>
            {isOpen && (
                <div className="fixed inset-0 bg-black/50 lg:hidden z-40" onClick={doBothChangesFunction}></div>
            )}
        </div>
    )
}

export default BurgerMenu;