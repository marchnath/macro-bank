"use client";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Vault, CreditCard, Wallet, Building2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Component3() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="w-full">
      {/* Payment Methods Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-50">
        <motion.div
          className="container px-4 md:px-6 mx-auto"
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          transition={fadeIn.transition}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-900">
            Способы оплаты
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
              <Vault className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold">Банковский перевод</h3>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
              <CreditCard className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold">Кредитная карта</h3>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
              <Wallet className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold">Электронный кошелек</h3>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
              <Building2 className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold">Криптовалюта</h3>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Calculator Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <motion.div
          className="container px-4 md:px-6 mx-auto"
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          transition={fadeIn.transition}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-900">
            Калькулятор стоимости
          </h2>
          <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <div className="grid gap-6">
              <div className="space-y-2">
                <Label htmlFor="weight">Вес груза (кг)</Label>
                <Input id="weight" placeholder="Введите вес" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="volume">Объем груза (м³)</Label>
                <Input id="volume" placeholder="Введите объем" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="from">Откуда</Label>
                <Input id="from" placeholder="Город отправления" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="to">Куда</Label>
                <Input id="to" placeholder="Город назначения" />
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Registration CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-900 text-white">
        <motion.div
          className="container px-4 md:px-6 text-center mx-auto"
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          transition={fadeIn.transition}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">Начать сейчас</h2>
          <p className="text-lg mb-8 text-purple-100">
            Присоединяйтесь к тысячам довольных клиентов
          </p>
          <Button className="bg-white text-purple-900 hover:bg-purple-100">
            Зарегистрироваться
          </Button>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <motion.div
          className="container px-4 md:px-6 mx-auto"
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          transition={fadeIn.transition}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-900">
            Ответы на часто вопросы
          </h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Как рассчитывается стоимость доставки?
              </AccordionTrigger>
              <AccordionContent>
                Стоимость доставки зависит от веса, объема груза и расстояния
                между пунктами отправления и назначения.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Какие документы необходимы для отправки груза?
              </AccordionTrigger>
              <AccordionContent>
                Необходимы паспорт, инвойс и упаковочный лист. Для определенных
                товаров могут потребоваться дополнительные документы.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Как отследить местоположение груза?
              </AccordionTrigger>
              <AccordionContent>
                Вы можете отследить груз через личный кабинет на нашем сайте или
                связаться с менеджером.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Какие сроки доставки?</AccordionTrigger>
              <AccordionContent>
                Сроки зависят от маршрута и типа доставки. Обычно это занимает
                от 7 до 45 дней.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </section>

      {/* Reviews Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-50">
        <motion.div
          className="container px-4 md:px-6 mx-auto"
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          transition={fadeIn.transition}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-900">
            Отзывы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-200 mr-4" />
                  <div>
                    <h3 className="font-semibold">Клиент {i}</h3>
                    <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                  </div>
                </div>
                <p className="text-gray-600">
                  &quot;Отличный сервис! Быстрая доставка и профессиональное
                  обслуживание. Рекомендую всем, кто ищет надежного партнера для
                  международных перевозок.&quot;
                </p>
              </Card>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Collaboration Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <motion.div
          className="container px-4 md:px-6 mx-auto"
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          transition={fadeIn.transition}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-900">
            Сотрудничество
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Для бизнеса</h3>
              <ul className="space-y-2">
                <li>Специальные тарифы</li>
                <li>Персональный менеджер</li>
                <li>Приоритетное обслуживание</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Для частных лиц</h3>
              <ul className="space-y-2">
                <li>Гибкие условия</li>
                <li>Онлайн поддержка</li>
                <li>Удобные способы оплаты</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Для партнеров</h3>
              <ul className="space-y-2">
                <li>Партнерская программа</li>
                <li>Маркетинговая поддержка</li>
                <li>Совместное развитие</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 bg-purple-900 text-white" id="contacts">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2">
                <li>Телефон: +7 (999) 123-45-67</li>
                <li>Email: info@example.ru</li>
                <li>Адрес: г. Москва, ул. Примерная, 123</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Информация</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-purple-200">
                    О компании
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-200">
                    Условия работы
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-200">
                    Политика конфиденциальности
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Социальные сети</h3>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-purple-200">
                  VK
                </Link>
                <Link href="#" className="hover:text-purple-200">
                  Telegram
                </Link>
                <Link href="#" className="hover:text-purple-200">
                  WhatsApp
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-purple-800 text-center">
            <p>© 2024 Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
