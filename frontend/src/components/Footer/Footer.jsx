import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GiAbstract051 } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="flex justify-between w-full h-10 items-center p-4 flex-col md:flex-row gap-y-8">
      <aside className="items-center grid-flow-col">
        <div className="flex gap-x-4 justify-center items-center text-center">
          <GiAbstract051 className="size-6 lg:size-8" />
          <p>Developed by bbs220</p>
        </div>
      </aside>
      <nav className="flex justify-center items-center gap-x-8">
        <a
          href="#"
          className="link flex justify-center items-center scale-125 hover:text-slate-500 gap-1 mb-4 md:mb-0"
        >
          <FaGithub className="text-xl" />
          <span className="hidden md:inline label">GitHub</span>
        </a>
        <a
          href="#"
          className="link flex justify-center items-center scale-125 hover:text-slate-500 gap-1 mb-4 md:mb-0"
        >
          <FaLinkedin className="text-xl" />
          <span className="hidden md:inline label">LinkedIn</span>
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
