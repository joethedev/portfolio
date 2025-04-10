import React from 'react'

const Nav = () => {
  return (
    <nav className="flex justify-center items-center p-4 max-w-[600px] fixed top-0 left-0 right-0 z-10">
        <ul className="flex space-x-4">
            <li><a href="#about" className="text-gray-600 hover:text-gray-800">About</a></li>
            <li><a href="#projects" className="text-gray-600 hover:text-gray-800">Projects</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a></li>
        </ul>   
     </nav>       
  )
}

export default Nav
