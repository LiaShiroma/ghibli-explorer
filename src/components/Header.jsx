import { useState } from "react";
import Logo from "../assets/logo.svg";
import { Menu, X } from "lucide-react";

const navLinks = ["Search", "Films", "Top Rated", "About"];
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center  border-b border-darkGreen/5 py-2">
        <img src={Logo} />

        <button
          className="md:hidden text-green"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={24} />
        </button>

        <nav className="hidden md:flex justify-between items-center gap-12 font-[Nunito] uppercase text-xs text-darkGreen/70">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="relative before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-sand before:transition-all before:duration-300 hover:before:w-full after:content-['■'] after:absolute after:-right-6 after:transform after:translate-x-1/2 after:bottom-0.5 after:text-sand last:after:content-none "
            >
              {link}
            </a>
          ))}
        </nav>
      </div>

      <div
        className={`md:hidden fixed top-0 left-0 p-4 h-full w-full bg-bg transform transition-all duration-500 ${
          isOpen ? "opacity-100 translate-x-0" : "-translate-x-1080 opacity-0 pointer-events-none"
        }`}
      >
        <button
          className="text-green absolute right-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <X size={32} />
        </button>
        <nav className="h-full flex flex-col font-[Nunito] uppercase items-center justify-center gap-6 text-darkGreen/70 text-xl">
          {navLinks.map((link) => (
            <a href="#" key={link}>
              {link}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
