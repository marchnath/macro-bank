import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const FAQ = () => {
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
        <h2 className="text-3xl font-bold text-center mb-12 ">
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
              Сроки зависят от маршрута и типа доставки. Обычно это занимает от
              7 до 45 дней.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </section>
  );
};

export default FAQ;
