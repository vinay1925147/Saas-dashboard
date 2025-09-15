import { useState } from 'react'
import './Deshboard.css'
import Header from './header'
import Home from './Home'
import Sidebar from './sidebar'


function Deshboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
      
       
     
    </div>
  )
}

export default Deshboard;