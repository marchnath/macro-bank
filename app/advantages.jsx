import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const Advantages = () => {
  const features = [
    {
      title: "Глобальное присутствие",
      description:
        "Работаем со всеми основными международными рынками и поставщиками",
      gradient: "bg-gradient-to-br from-blue-50 to-indigo-100",
    },
    {
      title: "Безопасные платежи",
      description:
        "Защищенные транзакции и гарантия безопасности ваших средств",
      gradient: "bg-gradient-to-br from-purple-50 to-pink-100",
    },
    {
      title: "Быстрая обработка",
      description:
        "Оперативная обработка заказов и быстрые международные переводы",
      gradient: "bg-gradient-to-br from-green-50 to-emerald-100",
    },
    {
      title: "Доставка под ключ",
      description: "Полное сопровождение груза от закупки до доставки",
      gradient: "bg-gradient-to-br from-orange-50 to-red-100",
    },
    {
      title: "Широкая география",
      description: "Доставка из любой точки мира в любой город России",
      gradient: "bg-gradient-to-br from-cyan-50 to-blue-100",
    },
    {
      title: "Поиск поставщиков",
      description: "Поиск и подбор поставщиков товаров по всему миру",
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
      className="space-y-12 mx-auto container "
    >
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Преимущества и особенности
        </h2>
        <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
          Надежный партнер для ваших международных перевозок и платежей
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div key={index} variants={item}>
            <Card
              className={`px-6 py-10 border border-indigo-200 h-full hover:shadow-xl transition-all ${feature.gradient}`}
            >
              <div className="space-y-4">
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-black/90">{feature.description}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Advantages;
