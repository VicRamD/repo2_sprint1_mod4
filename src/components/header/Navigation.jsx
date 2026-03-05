import logoReact from '../../assets/react.svg';
import {navbarLinks} from '../constants/navbarLinks';

const Navigation = () => {
    //console.log(navbarLinks)

  return (
    <nav className="w-full bg-gray-800/30">
        {/* vista desktop */}
        <div className='flex justify-between items-center px-4 py-2'>
          <div className="flex items-center gap-2">
            <img src={logoReact} alt="logo react" className='w-15'/>
            <p className='text-white font-bold text-3xl'>ARG</p>
          </div>

            <div>
                <ul className='flex gap-4 px-4'>
                    {navbarLinks.map(link =>{
                        {console.log("lista: ", link)}
                        return(
                            <li key={link.id}>
                                <a src={link.link} className='bg-amber-500'>{link.title}</a>
                            </li>    
                        )
                        
                    })}
                </ul>
            </div>  
        </div>

        

        {/* vista mobile */}
        <div>

        </div>
    </nav>
  )
}

export default Navigation