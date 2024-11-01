import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "../theme-toggle";



const navItems = {
  links: [
    { href: '/', title: 'Inicio' },
    { href: '/nosotros', title: 'Nosotros' },
    { href: '/precios', title: 'Precios' },
  ],
  dropMenu: [
    {
      title: 'Soluciones',
      dropdown: [
        { href: '/landing-pages', title: 'Landing Pages' },
        { href: '/blog', title: 'Blog' },
        { href: '/corporativa', title: 'Corporativa' },
        { href: '/tienda-online', title: 'eCommerce' },
        { href: '/portafolios', title: 'Portafolios' },
      ]
    },
  ]
};

const links = navItems.links;
const dropdowns = navItems.dropMenu[0].dropdown;

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav
      className="w-full h-20 flex flex-col justify-center items-center fixed bg-white dark:bg-slate-800  z-40 lg:backdrop-blur-xl"
      aria-label="Main navigation"
    >
      <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
        <motion.div
        className=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <a href="/" aria-label="Inicio">
            <div className="flex justify-start items-center grow basis-0">
              <div className="mr-2">
                {/* Logo para modo claro, se oculta en modo oscuro */}
                <img
                  loading="eager"
                  
                  className="dark:hidden"
                  src="/logos/dark_logo.svg"
                  alt="Light Logo"
                />
                {/* Logo para modo oscuro, se oculta en modo claro */}
                <img
                  loading="eager"
                  className="hidden dark:inline size-full object-cover object-center"
                  src="/logos/light_logo.svg"
                  alt="Dark Logo"
                />
              </div>
            </div>
          </a>


        </motion.div>


        <div className="grow basis-0 justify-end flex lg:hidden">
            <ThemeToggle client:load />
          </div>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="hidden lg:flex h-full pb-2">
            {links.map(({ href, title }) => (
              <a
                className="lg:text-base text-2xl leading-6 mr-4 ml-4 2xl:mr-6 2xl:ml-6 cursor-pointer font-normal lg:font-medium hover:scale-110 dark:text-white hover:text-orange-500 transition h-full pt-2"
                href={href}
                key={title}
              >
                {title}
              </a>
            ))}

            {/* Dropdown for Desktop */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="lg:text-base text-2xl leading-6 mr-4 ml-4 2xl:mr-6 2xl:ml-6 cursor-pointer font-normal lg:font-medium hover:scale-110 dark:text-white hover:text-orange-500 transition h-full pt-2">
                Soluciones
              </button>
              {isDropdownOpen && (
                <div className="absolute bg-white shadow-md rounded mt-2 w-48">
                  {dropdowns.map(({ href, title }) => (
                    <a
                      key={href}
                      href={href}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:dark:bg-slate-800 hover:dark:text-white"
                    >
                      {title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="grow basis-0 justify-end hidden lg:flex">
            <ThemeToggle client:load />
          </div>
        </motion.div>

        <div
          className="lg:hidden flex flex-col px-2 py-3 rounded-md cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-5 h-0.5 bg-black dark:bg-white mb-1"></div>
          <div className="w-5 h-0.5 bg-black dark:bg-white mb-1"></div>
          <div className="w-5 h-0.5 bg-black dark:bg-white"></div>
        </div>

      </div>

      {/* Mobile navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col mt-16 lg:hidden absolute top-4 left-0 bg-white dark:bg-slate-800 z-50 w-full items-center gap-10 py-15 pb-10">
              {links.map(({ href, title }) => (
                <a
                  key={href}
                  className="dark:text-white lg:text-base text-2xl leading-6 mr-4 ml-4 cursor-pointer font-normal lg:font-medium hover:scale-110 transition duration-300 h-full pt-2"
                  href={href}
                  onClick={() => setIsOpen(false)}
                >
                  {title}
                </a>
              ))}

              {/* Dropdown for Mobile */}
              <div className="w-full text-center">
                <button
                  className="dark:text-white lg:text-base text-2xl leading-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition duration-300 h-full pt-2"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Soluciones
                </button>
                {isDropdownOpen && (
                  <div className="flex flex-col items-center mt-2">
                    {dropdowns.map(({ href, title }) => (
                      <a
                        key={href}
                        href={href}
                        className="dark:text-white lg:text-base text-xl leading-6 py-1 hover:text-orange-500"
                        onClick={() => setIsOpen(false)}
                      >
                        {title}
                      </a>
                    ))}
                  </div>
                )}
              </div>


            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
