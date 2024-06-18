import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GiAbstract051 } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="footer items-center p-1 md:p-2 flex justify-between w-full flex-col md:flex-row gap-y-8">
      <aside className="items-center grid-flow-col">
        <GiAbstract051 className="size-6 lg:size-8" />
        <p>Developed by bbs220</p>
      </aside>
      <nav className="flex justify-center items-center gap-x-8">
        <a
          href="#"
          className="link flex justify-center items-center scale-125 hover:text-slate-500 gap-1"
        >
          <FaGithub className="text-xl" />
          <span className="hidden md:inline label">GitHub</span>
        </a>
        <a
          href="#"
          className="link flex justify-center items-center scale-125 hover:text-slate-500 gap-1"
        >
          <FaLinkedin className="text-xl" />
          <span className="hidden md:inline label">LinkedIn</span>
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
