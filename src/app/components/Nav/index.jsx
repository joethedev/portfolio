import Image from "next/image";
import logo_dark from "@/assets/imgs/logo-joelani-dark.png";

const Nav = ({setVisibleSection}) => {
  return (
    <nav className="flex justify-between bg-gray-950 items-center px-[3rem] py-4 fixed top-0 left-0 right-0 z-10">
    <div>
    <Image src={logo_dark} alt="Logo" width={200} height={100} />
    </div>   
    <ul className="flex space-x-4 text-white">
            <li><a href="#about" onClick={() => setVisibleSection("about")} className="text-xl p-4 hover:bg-amber-300 font-semibold">About</a></li>
            <li><a href="#projects" onClick={() => setVisibleSection("projects")} className="text-xl p-4 hover:bg-amber-300 font-semibold">Projects</a></li>
            <li><a href="#projects" className="text-xl p-4 hover:bg-amber-300 font-semibold">Skills</a></li>
            <li><a href="#projects" className="text-xl p-4 hover:bg-amber-300 font-semibold">Hobbies</a></li>
            <li><a href="#contact" className="text-xl p-4 hover:bg-amber-300 font-semibold">Contact</a></li>
        </ul>   
        <div>
        Lonaguage</div>
     </nav>       
  )
}

export default Nav
