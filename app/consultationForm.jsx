import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
const ConsultationForm = () => {
  return (
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
            Оставьте свои контактные данные, и наш специалист свяжется с вами в
            ближайшее время
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
              <Input id="email" type="email" placeholder="example@domain.com" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="privacy" />
              <label htmlFor="privacy" className="text-sm text-slate-600">
                Я согласен с политикой конфиденциальности
              </label>
            </div>
            <Button className="w-full py-6 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              Получить консультацию
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultationForm;
