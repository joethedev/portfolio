import Image from "next/image";
import portfolio_img from "@/assets/imgs/portfolio-img.png";
import linkedIn from "@/assets/imgs/linkedIn.png";
import github from "@/assets/imgs/github.webp";
import youtube from "@/assets/imgs/youtube.png";
import ig from "@/assets/imgs/ig.webp";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex mt-[50px] justify-evenly gap-[40px]">
      <div>
        <Image
          src={portfolio_img}
          alt="hero"
          width={800}
          height={400}
          className="rounded-sm"
        />
      </div>
      <div className="max-w-[600px] mt-10">
        <p className="text-[19px]">
          Born in the alleys of Fes, brewed in caffeine and battle-tested by
          deadlines, Joelani is the legendary full-stack web developer who
          merges Moroccan grit with pixel-perfect precision. By day, he slings
          code with the elegance of a calligrapher. By night, he refactors
          legacy horrors into clean, test-covered beauty — all with a keyboard
          in one hand and a cup of coffee in the other
        </p>
        <h3 className="text-2xl font-bold mt-4">🦸‍♂️ Superpowers:</h3>
        <ul className="list-none text-[19px] ml-5 mt-2">
          <li>🧠 Domain-Driven Debugging</li>
          <li>⚙️ Component Summoning with React</li>
          <li>🔐 Guardian of Secure APIs (NestJS + JWT)</li>
          <li>📦 Deploys with CI/CD fury</li>
          <li>☁️ Cloud-surfing across AWS and GCP skies</li>
        </ul>
        <h3 className="text-2xl font-bold mt-4">🧰 Weapons of Choice:</h3>
        <ul className="list-none text-[19px] ml-5 mt-2">
          <li>Dual-wielding Git and GitHub like a true code samurai</li>
          <li>Uses Tailwind as a cape</li>
          <li>Dockerized environments to teleport between projects</li>
          <li>Coffee mug enchanted with infinite refills</li>
        </ul>
        <h3 className="text-2xl font-bold mt-4">He uses social media:</h3>
        <div className="flex gap-2 mt-4">
          <Link href="google.com">
            <Image
              src={linkedIn}
              alt="LinkedIn"
              width={40}
              height={40}
              className="rounded-lg"
            />
          </Link>
          <Link href="google.com">
            <Image
              src={github}
              alt="Github"
              width={40}
              height={40}
              className="rounded-lg"
            />
          </Link>
          <Link href="google.com">
            <Image
              src={youtube}
              alt="Youtube"
              width={40}
              height={40}
              className="rounded-lg"
            />
          </Link>
          <Link href="google.com">
            <Image src={ig} alt="Instagram" width={40} height={40} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
