import Image from "next/image";
import logo_dark from "@/assets/imgs/logo-joelani-dark.png";

const Nav = ({ setVisibleSection }) => {
  return (
    <nav className="max-w-[1080px] mx-auto flex justify-between items-center px-[3rem] py-4 fixed top-0 left-0 right-0 z-10">
      <div>
        <Image src={logo_dark} alt="Logo" width={150} height={100} />
      </div>
      <ul className="flex space-x-4 text-white">
        <li>
          <a
            href="#about"
            onClick={() => setVisibleSection("about")}
            className="text-l p-4 hover:text-orange-400"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={() => setVisibleSection("projects")}
            className="text-l p-4 hover:text-orange-400"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="text-l p-4 hover:text-orange-400"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="text-l p-4 hover:text-orange-400"
          >
            Hobbies
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-l p-4 hover:text-orange-400"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
