"use client";
import { useState } from "react";
import VantaBackground from "@/app/components/VantaBackground";
import Hero from "./components/Hero";
import ProjectShowcase from "./components/Project";
import synergia from "@/assets/imgs/synergia.png";
import jaldes from "@/assets/imgs/jaldes.png";
import winners from "@/assets/imgs/winnersclub.png";
import mobilize from "@/assets/imgs/mobilize.png";
import Nav from "./components/Nav";

export default function Home() {
  const projects = [
    {
      title: "Synergia Shop",
      description:
        "A drag-and-drop AI-powered landing page generator for startups.",
      image: synergia,
      link: "https://yourprojectlink.com",
      tags: ["Next.js", "OpenAI", "Tailwind"],
    },
    {
      title: "L'aboratoire Jaldes",
      description:
        "Admin dashboard for managing orders, customers, and inventory.",
      image: jaldes,
      link: "https://yourdashboardlink.com",
      tags: ["React", "Chart.js", "Node.js"],
    },
    {
      title: "Le winners Club",
      description:
        "Admin dashboard for managing orders, customers, and inventory.",
      image: winners,
      link: "https://yourdashboardlink.com",
      tags: ["React", "Chart.js", "Node.js"],
    },
    {
      title: "Mobilize Belgique",
      description:
        "Admin dashboard for managing orders, customers, and inventory.",
      image: mobilize,
      link: "https://yourdashboardlink.com",
      tags: ["React", "Chart.js", "Node.js"],
    },
  ];

  const [visibleSection, setVisibleSection] = useState("about");
  return (
    <>
      
        <div className="max-w-[1080px] mx-auto">
          <Nav setVisibleSection={setVisibleSection} />
        </div>
        <div className="h-screen flex justify-center items-center bg-[#202020]">
        <div className="max-w-[1080px]">
          {visibleSection == "about" && <Hero />}
          {visibleSection == "projects" && (
            <ProjectShowcase projects={projects} />
          )}
        </div>
      </div>
    </>
  );
}
