import React, { useState } from "react";
import { RiMenuFoldLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { MdDownload } from "react-icons/md";
import icon from "../../assets/profile image-01.png";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa6";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const navItems = [
    { name: "home", href: "#hero-section" },
    { name: "feature", href: "#feature" },
    { name: "portfolio", href: "#portfolio" },
    { name: "testimonial", href: "#testimonial" },
    { name: "FAQ", href: "#faq" },
    { name: "contact", href: "#contact" },
  ];

  // Toast + download handler (toast just shows, download handled by <a>)
  const handleDownload = () => {
    toast.success("Successfully Downloaded CV");

  };




  return (
    <header className="border-0 px-3 z-10 container m-auto fixed right-0 left-0 top-0 w-full bg-[#ECF0F3] border-b border-gray-300">
      <div className="py-4 flex items-center justify-between">
        {/* logo */}
        <div className="flex items-center gap-2">
          <img
            src={icon}
            className="w-10 h-10 object-cover rounded-full border border-blue-300"
            alt="Profile"
          />
          <h1 className="font-bold text-[var(--deepColor)] text-xl">Ridwan</h1>
        </div>

        <div className="flex gap-1 items-center">
          {/* nav items for desktop */}
          <div className="lg:block hidden">
            <nav>
              <ul className="flex items-center space-x-1">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={() => setActive(item.name)}
                    className={`px-3 relative py-1 text-[var(--deepColor)] capitalize`}
                  >
                    {item.name}
                    {/* active line */}
                    <span
                      className={`absolute bottom-1 border-[var(--primaryColor)] w-7 h-1 left-3 border-0 border-b-2 ${
                        active === item.name ? "opacity-100" : "opacity-0"
                      }`}
                    ></span>
                  </a>
                ))}
              </ul>
            </nav>
          </div>

          {/* Download CV button */}
          <a
            href="/Ridwan_cv.pdf" // path from public folder
            download="Ridwan_cv.pdf"
            target="_blank"
            onClick={handleDownload}
            rel="noopener noreferrer"
            className="flex me-3 text-[14px] gap-1 items-center shadow-white-3 gradient-box py-2 px-4 rounded-md cursor-pointer"
          >
            Download CV <FaSpinner className="text-[var(--primaryColor)] animate-spin ml-1" />
          </a>

          {/* hamburger menu  */}
          <button
            onClick={() => setOpen(true)}
            aria-label="open menu"
            className="lg:hidden border-slate-300 rounded border p-1"
          >
            <RiMenuFoldLine size={32} />
          </button>

        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 lg:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* OFF‑CANVAS PANEL */}
      <aside
        className={`fixed right-0 p-7 top-0 h-full w-72 bg-[var(--bodyColor)] shadow-lg
          lg:hidden transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <nav>
          <div className="border-b border-slate-300 flex justify-between items-center">
            <h1 className="font-bold text-[var(--deepColor)] text-xl">Ridwan</h1>
            <button
              onClick={() => setOpen(false)}
              aria-label="close menu"
              className="p-3 cursor-pointer"
            >
              <AiOutlineClose size={25} />
            </button>

          </div>

          <ul className="flex flex-col pt-5 space-y-2">
            {navItems.map((item, index) => (

              <a
                key={index}
                href={item.href}
                onClick={() => {
                  setActive(item.name);
                  setOpen(false);
                }}
                className="relative py-2 capitalize"
              >
                {item.name}
                <span
                  className={`absolute bottom-1 border-[var(--primaryColor)] w-7 h-1 left-0 border-0 border-b-2 ${
                    active === item.name ? "opacity-100" : "opacity-0"
                  }`}
                ></span>
              </a>
            ))}
          </ul>
        </nav>
      </aside>
    </header>
  );
}
