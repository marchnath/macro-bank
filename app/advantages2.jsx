import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const Advantages2 = () => {
  const features = [
    {
      title: "Глобальное присутствие",
      description:
        "Работаем со всеми основными международными рынками и поставщиками",
      image: "/ad/global.png",
      gradient: "bg-gradient-to-br from-blue-50 to-indigo-100",
    },
    {
      title: "Безопасные платежи",
      description:
        "Защищенные транзакции и гарантия безопасности ваших средств",
      image: "/ad/security2.png",
      gradient: "bg-gradient-to-br from-purple-50 to-pink-100",
    },
    {
      title: "Быстрая обработка",
      description:
        "Оперативная обработка заказов и быстрые международные переводы",
      image: "/ad/time.png",
      gradient: "bg-gradient-to-br from-green-50 to-emerald-100",
    },
    {
      title: "Доставка под ключ",
      description: "Полное сопровождение груза от закупки до доставки",
      image: "/ad/track.png",
      gradient: "bg-gradient-to-br from-orange-50 to-red-100",
    },
    {
      title: "Широкая география",
      description: "Доставка из любой точки мира в любой город России",
      image: "/hero1.jpg",
      gradient: "bg-gradient-to-br from-cyan-50 to-blue-100",
    },
    {
      title: "Поиск поставщиков",
      description: "Поиск и подбор поставщиков товаров по всему миру",
      image: "/ad/supplier.png",
      gradient: "bg-gradient-to-br from-violet-50 to-purple-100",
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
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
      className="space-y-12 mt-10 sm:mt-20 mx-auto container px-4 "
      id="advantages"
    >
      <div className="space-y-4">
        <p className=" max-w-[700px] text-slate-800 font-bold text-2xl -mb-6 sm:-mb-3    md:text-3xl">
          Мы предлагаем следующие преимущества и особенности:
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div key={index} variants={item}>
            <Card
              className={`px-6 py-10 h-full hover:shadow-xl rounded-none transition-all`}
            >
              <div className="space-y-4">
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={600}
                  height={400}
                  className=" object-cover w-full aspect-[3/2]"
                />
                <p className="text-black/90">{feature.description}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Advantages2;
