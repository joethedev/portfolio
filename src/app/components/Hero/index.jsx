import Image from "next/image";
import portfolio_img from "@/assets/imgs/portfolio-joelani.png";
import linkedIn from "@/assets/imgs/linkedIn.png";
import github from "@/assets/imgs/github.webp";
import youtube from "@/assets/imgs/youtube.png";
import ig from "@/assets/imgs/ig.webp";
import Link from "next/link";
import { FaBrain, FaLock, FaGear, FaStackOverflow, FaCloud } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="flex justify-center gap-[70px] items-end h-screen">
      <div className="max-w-[500px] text-white self-center">
        <h1 className="text-[43px] mb-10">
          <span className="font-bold bg-gradient-to-r from-white via-orange-500 to-white inline-block text-transparent bg-clip-text">
            The Code Caffeinator
          </span>
          ☕
        </h1>
        <p className="text-[19px]">
          Born in the alleys of Fes, brewed in caffeine and battle-tested by
          deadlines, Joelani is the legendary full-stack web developer who
          merges Moroccan grit with pixel-perfect precision.
        </p>
        <h3 className="text-2xl font-bold mt-4">Superpowers</h3>
        <ul className="list-none text-[19px] ml-5 mt-2">
          <li className="flex items-center gap-2"><FaBrain /><span>Domain-Driven Debugging</span></li>
          <li className="flex items-center gap-2"><FaGear /><span>Component Summoning with React/Next</span></li>
          <li className="flex items-center gap-2"><FaLock /><span>Guardian of Secure APIs (NestJS + Express)</span></li>
          <li className="flex items-center gap-2"><FaStackOverflow  /><span>Deploys with CI/CD fury</span></li>
          <li className="flex items-center gap-2"><FaCloud   /><span>Cloud-surfing across AWS and Azure skies</span></li>
        </ul>
        <h3 className="text-2xl font-bold mt-4">Get in touch:</h3>
        <div className="flex gap-2 mt-4">
          <Link href="google.com">
            <Image
              src={linkedIn}
              alt="LinkedIn"
              width={40}
              height={40}
              className="rounded-lg hover:scale-110 transition-transform duration-300 hover:drop-shadow-sm"
            />
          </Link>
          <Link href="google.com">
            <Image
              src={github}
              alt="Github"
              width={40}
              height={40}
              className="rounded-lg hover:scale-110 transition-transform duration-300 hover:drop-shadow-sm"
            />
          </Link>
          <Link href="google.com">
            <Image
              src={youtube}
              alt="Youtube"
              width={40}
              height={40}
              className="rounded-lg hover:scale-110 transition-transform duration-300 hover:drop-shadow-sm"
            />
          </Link>
          <Link href="google.com">
            <Image
              src={ig}
              alt="Instagram"
              width={40}
              height={40}
              className="rounded-lg hover:scale-110 transition-transform duration-300 hover:drop-shadow-sm"
            />
          </Link>
        </div>
      </div>
      <div>
        <Image src={portfolio_img} alt="hero" className="w-[87%]" />
      </div>
    </div>
  );
};

export default Hero;
