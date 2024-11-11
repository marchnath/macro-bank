"use client";

import { motion } from "framer-motion";
import {
  MapIcon,
  Globe2Icon,
  ShieldCheckIcon,
  TimerIcon,
  TruckIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Component2() {
  const features = [
    {
      icon: <Globe2Icon className="size-6" />,
      title: "Глобальное присутствие",
      description:
        "Работаем со всеми основными международными рынками и поставщиками",
    },
    {
      icon: <ShieldCheckIcon className="size-6" />,
      title: "Безопасные платежи",
      description:
        "Защищенные транзакции и гарантия безопасности ваших средств",
    },
    {
      icon: <TimerIcon className="size-6" />,
      title: "Быстрая обработка",
      description:
        "Оперативная обработка заказов и быстрые международные переводы",
    },
    {
      icon: <TruckIcon className="size-6" />,
      title: "Доставка под ключ",
      description: "Полное сопровождение груза от закупки до доставки",
    },
    {
      icon: <MapIcon className="size-6" />,
      title: "Широкая география",
      description: "Доставка из любой точки мира в любой город России",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full bg-white">
      <div className="container px-4 py-24 mx-auto">
        {/* Features Section */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-indigo-900">
              Преимущества и особенности
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Надежный партнер для ваших международных перевозок и платежей
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div key={index} variants={item}>
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="space-y-4">
                    <div className="size-12 rounded-lg bg-indigo-100 flex items-center justify-center text-purple-900">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-purple-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* International Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-900">
              Международный сервис
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Глобальные возможности для вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/map.jpg?height=400&width=600"
                  alt="Карта международных маршрутов"
                  className="object-cover"
                  fill
                />
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-purple-900">
                Карта и валюты
              </h3>
              <p className="text-gray-600">
                Работаем со всеми основными валютами и направлениями. Наша сеть
                охватывает ключевые торговые маршруты и финансовые центры по
                всему миру.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 bg-purple-100 rounded-full text-purple-900">
                  USD
                </div>
                <div className="px-4 py-2 bg-purple-100 rounded-full text-purple-900">
                  EUR
                </div>
                <div className="px-4 py-2 bg-purple-100 rounded-full text-purple-900">
                  RUB
                </div>
                <div className="px-4 py-2 bg-purple-100 rounded-full text-purple-900">
                  CNY
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center space-y-8"
        >
          <h3 className="text-2xl font-bold text-purple-900">начать сейчас</h3>
          <Button className="bg-purple-900 hover:bg-purple-800 text-white px-8 py-6 text-lg rounded-md">
            Зарегистрироваться
          </Button>
        </motion.section>

        {/* Steps Section */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="mt-24 space-y-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-900 text-center">
            Шаги
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-200" />
            <div className="space-y-16">
              {[
                "Регистрация и верификация аккаунта",
                "Выбор услуги и расчет стоимости",
                "Оформление заказа и оплата",
                "Отслеживание и получение груза",
              ].map((step, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="relative flex items-center"
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="size-12 rounded-full bg-purple-900 text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-16 text-right" : "pl-16 ml-auto"
                    }`}
                  >
                    <p className="text-lg font-medium text-gray-900">{step}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
