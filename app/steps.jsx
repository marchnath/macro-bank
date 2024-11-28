import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
const Steps = () => {
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
    <div>
      {" "}
      {/* Steps Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        className="mt-24 space-y-12 max-w-2xl mx-auto"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl  text-center">
          Шаги
        </h2>
        <div className="relative">
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-yellow-500"
            style={{
              height: "calc(100% - 48px)", // 48px accounts for the circle height (size-12 = 3rem = 48px)
              top: "24px", // Centers the line by moving it down half the circle height
            }}
          />
          <div className="space-y-16 ">
            {[
              {
                step: 1,
                text: "Оформите заявку на сайте любым удобным способом или позвоните нам",
              },
              {
                step: 2,
                text: "По запросу предоставьте необходимые нашему менеджеру данные и документы для расчета стоимости услуги",
              },
              {
                step: 3,
                text: "Выберите оптимальное для вас решение по срокам и стоимости",
              },
              { step: 4, text: "Подпишите договор и заявку на перевозку" },
              { step: 5, text: "Получите товар в заявленные сроки" },
            ].map((stepData, index) => (
              <motion.div
                key={index}
                variants={item}
                className="relative flex items-center"
              >
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <div className="size-12 rounded-full bg-slate-700 text-white flex items-center justify-center font-bold">
                    {stepData.step}
                  </div>
                </div>
                <div
                  className={` w-1/2 ${
                    index % 2 === 0 ? "pr-16 text-right" : "pl-16 ml-auto"
                  }`}
                >
                  <p className="text-lg font-medium  text-gray-900">
                    {stepData.text}
                  </p>
                </div>
              </motion.div>
            ))}
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
        <h3 className="text-3xl font-bold text-slate-900">
          Оформите заявку на сайте
        </h3>
        <p>любым удобным способом или позвоните нам</p>
        <Button className="bg-yellow-500 text-black hover:bg-yellow-700  px-8 py-6 text-lg rounded-md">
          Зарегистрироваться
        </Button>
      </motion.section>
    </div>
  );
};

export default Steps;
