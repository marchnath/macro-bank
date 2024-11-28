import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Cost = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <motion.div
        className="container px-4 md:px-6 mx-auto"
        initial={fadeIn.initial}
        whileInView={fadeIn.animate}
        transition={fadeIn.transition}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          Узнать о стоимости
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
            <div className="space-y-2">
              <Label htmlFor="name">Имя</Label>
              <Input id="name" placeholder="Ваше имя" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Ваш email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Телефон</Label>
              <Input id="phone" type="tel" placeholder="Ваш номер телефона" />
            </div>
            <Button className="w-full bg-yellow-500 py-6 hover:bg-yellow-600 text-black">
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Cost;
