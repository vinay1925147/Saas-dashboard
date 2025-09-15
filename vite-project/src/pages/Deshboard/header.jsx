import React, {useState} from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

function Header({OpenSidebar}) {

  const [open, setOpen] = useState(false);
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <BsSearch  className='icon'/>
        </div>
     
      
    <div className="header-right flex items-center relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-600"
      >
        <BsPersonCircle className="text-2xl" />
        <span className="font-medium">Profile</span>
        <svg
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute -right-1 top-4 mt-6 w-30 bg-yellow-50 border rounded shadow-lg z-50">
          <ul className="py-2 text-gray-700">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Account</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <a href="http://localhost:5173/login">Log out</a>
            </li>
          </ul>
        </div>
      )}
    </div>
        
 
    </header>
  )
}

export default Header


