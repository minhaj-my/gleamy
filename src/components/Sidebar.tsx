import { useState } from "react";
import { menuIcon } from "../assets";

type PageKey = keyof typeof pages;
const navLinks: { id: PageKey; label: string }[] = [
  { id: "about", label: "About Us" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
];

const pages = {
  about: (
    <div>
      <h2 className="text-3xl font-roboto  mb-4">About Us</h2>
      <p className="text-gray-400  font-open-sans leading-relaxed">
        We are a creative studio crafting bold digital experiences.
      </p>
    </div>
  ),
  services: (
    <div>
      <h2 className="text-3xl font-roboto  mb-4">Services</h2>
      <ul className="text-gray-400 space-y-2">
        <li>→ UI/UX Design</li>
        <li>→ Web Development</li>
        <li>→ Brand Identity</li>
      </ul>
    </div>
  ),
  portfolio: (
    <div>
      <h2 className="text-3xl font-roboto  mb-4">Portfolio</h2>
      <p className="text-gray-400 leading-relaxed">
        Explore our latest projects and case studies.
      </p>
    </div>
  ),
};

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  type PageKey = keyof typeof pages;
  const [activePage, setActivePage] = useState<PageKey>("about");

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="pl-4 flex hover:brightness-50 transition-all cursor-pointer items-center"
      >
        <img src={menuIcon} alt="Menu" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-black/10 backdrop-blur-xs border border-white/10 rounded-2xl shadow-2xl text-white z-50 flex flex-col
          transform transition-transform duration-500 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close button */}
        <div className="flex justify-end p-6">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-orange-500 transition-colors text-2xl leading-none"
          >
            ✕
          </button>
        </div>

        {/* Nav tabs */}
        <nav className="flex flex-col gap-1 px-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActivePage(link.id)}
              className={`text-left py-3 px-4 rounded-lg font-poppins text-sm uppercase tracking-widest transition-all
                ${
                  activePage === link.id
                    ? "text-orange-500 border-l-2 border-orange-500 pl-5"
                    : "text-gray-400 hover:text-white"
                }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Page content */}
        <div className="flex-1 px-8 py-10 overflow-y-auto">
          {pages[activePage]}
        </div>
      </div>
    </>
  );
};
