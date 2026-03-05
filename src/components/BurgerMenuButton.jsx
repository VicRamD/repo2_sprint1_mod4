import {useState, useCallback} from 'react'
//import './navbar.css'

const BurgerMenuButton = ({onToggle}) => {
    
    //Para cambiar las clases de los elementos del burger-menu
    const [burgerClass, setBurgerClass] = useState('burger-bar unclicked');

    //cambio en el burger menu
    /*const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass('burger-bar clicked');
            //setMenuClass('menu visible');
        } else {
            setBurgerClass('burger-bar unclicked');
            //setMenuClass('menu hidden');
        }
        setIsMenuClicked(!isMenuClicked);
    } */

    const updateMenu = useCallback(() => {
        // Solo anima localmente, NO maneja menu state
        setBurgerClass(prev => 
            prev === 'burger-bar unclicked' ? 'burger-bar clicked' : 'burger-bar unclicked'
        );
        
        onToggle?.(); 
    }, [onToggle]);

    /*if (onToggle) {
        onToggle()
    }*/

    return (
        <div className='burger-menu-button' onClick={updateMenu}>
            <div className={burgerClass}></div>
            <div className={burgerClass}></div>
            <div className={burgerClass}></div>
        </div>
    )
}

export default BurgerMenuButton
