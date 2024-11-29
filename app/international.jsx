import Image from "next/image";
import { motion } from "framer-motion";

const International = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-24 relative h-screen flex items-center max-h-[760px] mx-auto container"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/bg/back44.jpg?height=1080&width=1920"
          alt="Карта международных маршрутов"
          className="object-cover rounded-lg border "
          fill
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 rounded-lg " />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 py-12">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            Международный сервис
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
            Глобальные возможности для вашего бизнеса
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <h3 className="text-2xl font-bold text-white text-center">
            Карта и валюты
          </h3>
          <p className="text-gray-200 text-center">
            Работаем со всеми основными валютами и направлениями. Наша сеть
            охватывает ключевые торговые маршруты и финансовые центры по всему
            миру.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-4 py-2 bg-yellow-500/10 backdrop-blur-sm rounded-full text-white border border-white/20">
              USD
            </div>
            <div className="px-4 py-2 bg-yellow-500/10 backdrop-blur-sm rounded-full text-white border border-white/20">
              EUR
            </div>
            <div className="px-4 py-2 bg-yellow-500/10 backdrop-blur-sm rounded-full text-white border border-white/20">
              RUB
            </div>
            <div className="px-4 py-2 bg-yellow-500/10 backdrop-blur-sm rounded-full text-white border border-white/20">
              CNY
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default International;
