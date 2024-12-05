import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
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
        className="mt-24 space-y-12 max-w-2xl px-2 mx-auto"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
          Шаги
        </h2>
        <div className="relative">
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-yellow-500"
            style={{
              height: "calc(100% - 48px)",
              top: "24px",
            }}
          />
          <div className="space-y-16 ">
            {[
              {
                step: 1,
                text: "Оформите заявку на сайте любым удобным способом или позвоните нам",
                icon: "/steps/application.png",
              },
              {
                step: 2,
                text: "По запросу предоставьте необходимые нашему менеджеру данные и документы для расчета стоимости услуги",
                icon: "/steps/weight.png",
              },
              {
                step: 3,
                text: "Выберите оптимальное для вас решение по срокам и стоимости",
                icon: "/steps/airport.png",
              },
              {
                step: 4,
                text: "Подпишите договор и заявку на перевозку",
                icon: "/steps/signature.png",
              },
              {
                step: 5,
                text: "Получите товар в заявленные сроки",
                icon: "/steps/supplier.png",
              },
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
                {index % 2 === 0 ? (
                  <>
                    <div className="w-1/2 pr-8 sm:pr-16 text-right">
                      <p className="text-sm sm:text-base md:text-lg font-medium text-gray-900">
                        {stepData.text}
                      </p>
                    </div>
                    <div className="w-1/2 pl-16">
                      <Image
                        src={stepData.icon}
                        width={50}
                        height={50}
                        className="sm:w-[100px] sm:h-[100px]"
                        alt={`Step ${stepData.step}`}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-1/2 sm:pl-16  md:pl-36">
                      <Image
                        src={stepData.icon}
                        width={50}
                        height={50}
                        className="sm:w-[100px] sm:h-[100px] ml-10"
                        alt={`Step ${stepData.step}`}
                      />
                    </div>
                    <div className="w-1/2 pl-8 sm:pl-16 text-left">
                      <p className="text-sm sm:text-base md:text-lg font-medium text-gray-900">
                        {stepData.text}
                      </p>
                    </div>
                  </>
                )}
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
