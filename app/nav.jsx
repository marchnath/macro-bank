import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const Nav = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-2">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className="text-2xl flex items-center font-bold gap-x-2"
            >
              <Image src="/logo.png" width={50} height={50} alt="logo" />
              GlobalCashWay
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link
                href="#services"
                className="text-slate-600 hover:text-indigo-600 transition-colors"
              >
                Услуги
              </Link>
              <Link
                href="#about"
                className="text-slate-600 hover:text-indigo-600 transition-colors"
              >
                О Нас
              </Link>
              <Link
                href="#consultation"
                className="text-slate-600 hover:text-indigo-600 transition-colors"
              >
                Консультация
              </Link>
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
              className="bg-yellow-500 hover:bg-yellow-600 text-black py-6"
            >
              Зарегистрироваться
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
