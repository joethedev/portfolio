import React from 'react'

const Nav = ({setVisibleSection}) => {
  return (
    <nav className="flex justify-center items-center p-4 fixed top-0 left-0 right-0 z-10">
        <ul className="flex space-x-4">
            <li><a href="#about" onClick={() => setVisibleSection("about")} className="text-xl p-4 hover:bg-amber-300 font-semibold">About</a></li>
            <li><a href="#projects" onClick={() => setVisibleSection("projects")} className="text-xl p-4 hover:bg-amber-300 font-semibold">Projects</a></li>
            <li><a href="#projects" className="text-xl p-4 hover:bg-amber-300 font-semibold">Skills</a></li>
            <li><a href="#projects" className="text-xl p-4 hover:bg-amber-300 font-semibold">Hobbies</a></li>
            <li><a href="#contact" className="text-xl p-4 hover:bg-amber-300 font-semibold">Contact</a></li>
        </ul>   
     </nav>       
  )
}

export default Nav
