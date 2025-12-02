import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (!menuRef.current) return;
      const clickedInsideMenu = menuRef.current.contains(e.target);
      const clickedOnButton = buttonRef.current && buttonRef.current.contains(e.target);
      if (!clickedInsideMenu && !clickedOnButton) {
        setOpen(false);
      }
    }
    function handleKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function handleLinkClick() {
    setOpen(false);
  }

  return (
    <nav className="w-full bg-main-blue shadow-md fixed top-0 left-0 z-50" aria-label="Main navigation">
      {/* Keep a consistent container padding so logo and hero can align */}
      <div className="container mx-auto relative flex justify-between items-center h-auto md:h-20 py-4 md:py-0 px-6 md:px-20">
        {/* logo in normal flow (no absolute) so it shares the same container padding as the hero */}
        <div className="flex items-center h-full">
          <div className="text-4xl font-extrabold flex items-center hover:cursor-pointer h-full -ml-1 sm:-ml-2 md:ml-0">
            <span className="flex items-center justify-center w-16 h-16 rounded-full bg-main-gray text-white">
              M
            </span>

            <span className="text-white -ml-3.5 leading-none">AN<span className="text-main-gray">CO</span>BE</span>
          </div>
        </div>

        {/* Desktop menu — you can keep it absolute/right-0 or use ml-auto.
            Keeping it absolute needs the container to be relative (it is).
            If you prefer the menu inside the container's padding, change to md:ml-auto instead of md:absolute */}
        <div className="hidden md:flex md:absolute md:top-0 md:right-0 md:h-full md:space-x-8 font-bold text-lg text-white items-center">
          <a href="#services" className="relative flex items-center h-full px-3 group focus:outline-none">
            <span className="relative z-10 leading-none">Serviços</span>
            <span
              aria-hidden="true"
              className="absolute left-0 bottom-0 h-[2px] w-full bg-white origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
            />
          </a>

          <a href="#cta" className="relative flex items-center h-full px-3 group focus:outline-none">
            <span className="relative z-10 leading-none">Contacto</span>
            <span
              aria-hidden="true"
              className="absolute left-0 bottom-0 h-[2px] w-full bg-white origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
            />
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button
            ref={buttonRef}
            onClick={() => setOpen((s) => !s)}
            aria-controls="mobile-menu"
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="relative z-50 flex items-center justify-center w-10 h-10 rounded-md focus:ring-2 focus:ring-white/30"
          >
            <span className="sr-only">Menu</span>
            <div className="w-6 h-5 relative">
              <span
                className={`absolute left-0 right-0 h-0.5 bg-white transform transition-all duration-300 ease-in-out origin-center ${
                  open ? "top-2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 right-0 h-0.5 bg-white transform transition-all duration-200 ease-in-out origin-center ${
                  open ? "top-2 opacity-0" : "top-2"
                }`}
              />
              <span
                className={`absolute left-0 right-0 h-0.5 bg-white transform transition-all duration-300 ease-in-out origin-center ${
                  open ? "top-2 -rotate-45" : "bottom-0"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`md:hidden absolute top-full left-0 w-full bg-main-blue shadow-md transform origin-top transition-all duration-200 ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="flex flex-col py-2">
          <a
            href="#services"
            onClick={handleLinkClick}
            className="relative flex items-center h-12 px-6 group text-white font-semibold hover:bg-white/5 focus:bg-white/5"
          >
            <span className="relative z-10">Serviços</span>
            <span
              aria-hidden="true"
              className="absolute left-0 bottom-0 h-[2px] w-full bg-white origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
            />
          </a>

          <a
            href="#cta"
            onClick={handleLinkClick}
            className="relative flex items-center h-12 px-6 group text-white font-semibold hover:bg-white/5 focus:bg-white/5"
          >
            <span className="relative z-10">Contacto</span>
            <span
              aria-hidden="true"
              className="absolute left-0 bottom-0 h-[2px] w-full bg-white origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}