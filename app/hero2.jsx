"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineEmail } from "react-icons/md";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ConsultForm from "./consultform";

import OverlapCard from "./overlapCard";

const heroContent = [
  {
    image: "/hero22.jpg?height=600&width=1200",
    title: "Международные Перевозки",
    subtitle:
      "Надежные решения для импортеров: от носков до автомобилей. Безопасные платежи и доставка из любой точки мира.",
    list: ["Авиа", "Морской", "Авто", "Ж/д"],
  },
  {
    image: "/payments33.jpg?height=600&width=1200",
    title: "Международные Платежи",
    subtitle:
      "    Работаем со всеми основными валютами и направлениями. Наша сеть охватывает ключевые торговые маршруты и финансовые центры по всему миру.",
    list: ["USD", "EUR", "RUB", "CNY"],
  },
];

export default function Hero2() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroContent.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen ">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="fixed rounded-none md:text-lg -right-12  md:-right-8 top-1/3 z-40 text-black -translate-y-1/2 -rotate-90 bg-yellow-500 hover:bg-indigo-600 hover:text-white">
            Связаться
            <MdOutlineEmail className="font-bold" />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full sm:max-w-xl">
          <SheetHeader>
            <SheetTitle className="text-2xl font-bold text-center">
              Получите бесплатную консультацию
            </SheetTitle>
          </SheetHeader>
          <ConsultForm />
        </SheetContent>
      </Sheet>

      {/* Hero Section */}
      <div className="relative h-[840px] md:h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 h-[600px]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${heroContent[currentIndex].image})`,
              }}
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 flex h-full flex-col justify-center px-6 sm:px-12 lg:px-24">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-4 text-4xl font-bold text-white sm:text-4xl md:text-5xl  lg:text-6xl"
              >
                {heroContent[currentIndex].title}
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="max-w-2xl text-lg text-white/90 sm:text-lg md:text-xl"
              >
                {heroContent[currentIndex].subtitle}
                <div className="flex flex-wrap justify-start gap-4 mt-4">
                  {heroContent[currentIndex].list.map((item, index) => (
                    <div
                      key={index}
                      className="px-3  bg-yellow-500/10 backdrop-blur-sm  text-white border border-white/20"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>
        <OverlapCard />
      </div>

      {/* Quote Options */}
    </div>
  );
}
