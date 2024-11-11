"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ArrowRight,
  Building2,
  Globe,
  Package,
  Plane,
  Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Component2 from "./component2";
import Component3 from "./component3";

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-2xl font-bold text-indigo-600">
                MACROBANK
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
            <div className="hidden md:flex space-x-4">
              <Button variant="ghost">Войти</Button>
              <Button className="bg-indigo-600 hover:bg-indigo-700">
                Зарегистрироваться
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        className="pt-32 pb-16 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Международные платежи и перевозки
              </motion.h1>
              <motion.p
                className="text-xl text-slate-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Надежные решения для импортеров: от носков до автомобилей.
                Безопасные платежи и доставка из любой точки мира.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8 py-6">
                  Начать сейчас
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>
            <motion.div
              className="relative h-[400px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <video
                src="/hero-video.mp4"
                width={600}
                height={400}
                className="rounded-md"
                autoPlay
                loop
                muted
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Consultation Form */}
      <section className="py-16 px-4 bg-white" id="consultation">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Получите бесплатную консультацию
            </h2>
            <p className="text-slate-600">
              Оставьте свои контактные данные, и наш специалист свяжется с вами
              в ближайшее время
            </p>
          </motion.div>
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Имя</Label>
                <Input id="name" placeholder="Введите ваше имя" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Телефон</Label>
                <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@domain.com"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="privacy" />
                <label htmlFor="privacy" className="text-sm text-slate-600">
                  Я согласен с политикой конфиденциальности
                </label>
              </div>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                Получить консультацию
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4" id="services">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Комплексные решения для вашего бизнеса: от международных платежей
              до доставки товаров
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Международные платежи",
                description: "Безопасные и быстрые платежи в любую точку мира",
                icon: Globe,
              },
              {
                title: "Морские перевозки",
                description: "Контейнерные перевозки из любого порта",
                icon: Building2,
              },
              {
                title: "Авиаперевозки",
                description: "Срочная доставка воздушным транспортом",
                icon: Plane,
              },
              {
                title: "Наземная доставка",
                description: "Автомобильные и железнодорожные перевозки",
                icon: Truck,
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="group hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="mb-6 w-12 h-12 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-slate-900">
                      {service.title}
                    </h3>
                    <p className="text-slate-600">{service.description}</p>
                    <Button
                      variant="link"
                      className="mt-4 p-0 text-indigo-600 hover:text-indigo-700"
                    >
                      Подробнее
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Component2 />
      <Component3 />
    </div>
  );
}
