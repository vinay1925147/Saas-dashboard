import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import { FaCloud } from "react-icons/fa";

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
         <div className="flex items-center gap-3">
          <FaCloud className="text-blue-500 text-3xl" />
          <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">
          SaaS Dashboard
          </span>
         </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="http://localhost:5173/dashboard">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li> 
            <li className='sidebar-list-item'>
                <a href="http://localhost:5173/contract">
                    <BsFillArchiveFill className='icon'/> Contracts
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGrid3X3GapFill className='icon'/> Insights
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="http://localhost:5173/">
                    <BsPeopleFill className='icon'/> Reports
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li>
             <li className='sidebar-list-item'>
                <a href="http://localhost:5173/login">
                    Log-out
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar