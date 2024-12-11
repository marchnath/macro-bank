import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full  bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 ">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-xl sm:text-2xl flex items-center font-bold gap-x-1 sm:gap-x-2"
          >
            <Image
              src="/logo.png"
              width={50}
              height={50}
              alt="logo"
              className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px]"
            />
            GlobalCashWay
          </Link>
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-6">
              <Link
                href="#services"
                className="text-slate-600 hover:text-indigo-600 transition-colors"
              >
                Услуги
              </Link>
              <Link
                href="#advantages"
                className="text-slate-600 hover:text-indigo-600 transition-colors"
              >
                Преимущества
              </Link>
              {/* <Link
                href="#consultation"
                className="text-slate-600 hover:text-indigo-600 transition-colors"
              >
                Консультация
              </Link> */}
              <Link
                href="#contacts"
                className="text-slate-600 hover:text-indigo-600 transition-colors"
              >
                Контакты
              </Link>
            </div>
          </div>
          <div className="hidden md:flex space-x-4 md:items-center">
            <Button variant="ghost">Войти</Button>
            <Button
              size="lg"
              className="bg-yellow-500  rounded-none hover:bg-indigo-600 hover:text-white text-black py-2"
            >
              Зарегистрироваться
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[4rem] bg-opacity-95  -right-2 w-[250px]  bg-slate-100 shadow-lg  border md:hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              <Link
                href="#services"
                className="text-slate-600 hover:text-indigo-600 transition-colors"
                onClick={toggleMenu}
              >
                Услуги
              </Link>
              <Link
                href="#advantages"
                className="text-slate-600 hover:text-indigo-600 transition-colors"
                onClick={toggleMenu}
              >
                Преимущества
              </Link>
              {/* <Link
                href="#consultation"
                className="text-slate-600 hover:text-indigo-600 transition-colors"
                onClick={toggleMenu}
              >
                Консультация
              </Link> */}
              <Link
                href="#contacts"
                className="text-slate-600 hover:text-indigo-600 transition-colors"
                onClick={toggleMenu}
              >
                Контакты
              </Link>
              {/* <hr className="border-slate-200 pt-16" /> */}
              <div className="pt-32 ">
                <Button variant="ghost" className="w-full" onClick={toggleMenu}>
                  Войти
                </Button>
                <Button
                  size="lg"
                  className="w-full bg-yellow-500 rounded-none hover:bg-yellow-600 text-black"
                  onClick={toggleMenu}
                >
                  Зарегистрироваться
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
