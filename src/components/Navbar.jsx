
import React,{useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'
export default function Navbar() {
  const [isOpen, setisOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
const navigate=useNavigate();
  return (
    <div>
    <div className='bg-black text-white flex items-center justify-between lg:px-20 px-1   '>
<Link to="/"> <img src={logo} alt="" className='lg:h-20 h-20'/></Link>
<div className='lg:flex gap-4 hidden'>
<Link to="/" className='cursor-pointer'>Home</Link>
<Link to="/about" className='cursor-pointer'>About</Link>
<Link to="/services" className='cursor-pointer'>Service</Link>
<Link to="/project" className='cursor-pointer'>Project</Link>
{/* <Link to="/contact" className='cursor-pointer'>Contact</Link> */}
</div>
<button className='rounded-3xl lg:block hidden text-white bg-[#0b6380]  p-2 px-7 font-bold'
onClick={()=>{
    navigate("/contact")
}}
>
  Contact
</button>
<div className='lg:hidden block text-white' onClick={()=>{
  setisOpen(!isOpen);
}}>
  {isOpen===false?<MenuIcon />:<CloseIcon/>}
 
</div>

    </div>
    <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden bg-gray-200 transition-transform duration-100 ease-in-out transform`}>
                <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col items-center">
                    
                    <Link
                        to="/"
                        className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Home
                    </Link>
                    <Link 
                        to="/about"
                        className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        About
                    </Link>
                    <Link
                        to="/services"
                        className="text-black hover:bg-gray-700 group relative hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    
                    >
                        Service
                    </Link>
                    {isDropdownOpen && (
            <div className="absolute mt-2 z-10 px-7 md:-right-8 right-3 rounded-lg bg-white border text-black p-2 space-y-2 transition-opacity duration-900 ease-in-out opacity-100"
            onMouseOver={()=>{setDropdownOpen(true)}} onMouseLeave={()=>setDropdownOpen(false)}
            >
              <Link to="/profile" className="block hover:text-blue-600 px-4 py-2">
                Profile
              </Link>
              <Link to="/about-us" className="block hover:text-blue-600 px-4 py-2">
                About
              </Link>
              <a href="#" className="block hover:text-blue-600 px-4 py-2">
                Logout
              </a>
            </div>
          )}
       
                    <Link
                        to="/project"
                        className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Product
                    </Link>
                    <Link
                        to="/contact"
                        className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Contact
                    </Link>
                </div>
            </div>
    </div>

  )
}
