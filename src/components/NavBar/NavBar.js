import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import './NavBar.css'




const NavBar = () =>{
return (
    <>
    
    <div className='menu__header'>
    
     <div className='menu__navegacion'>
        <Link   to= './' >
              <HomeIcon className='menu__icons' fontSize='medium' />
        </Link>
        <Link  to= './Perfil'>
              <PersonIcon  className='menu__icons' fontSize='medium'/>
        </Link>
    </div>  
    <div className='logo__app'>
    <img className="logo"src="../logo.png" />
    </div>
    </div>
    
    </>
)

}
export default NavBar