import { motion } from "framer-motion";

import {
  ArrowRight,
  Building2,
  Globe,
  Package,
  Plane,
  Truck,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Services = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };
  return (
    <section className="py-16 px-4" id="services">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Наши Услуги
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            комплексные решения по товарной и финансовой логистике
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Международные платежи",
              description: "Безопасные и быстрые платежи в любую точку мира",
              icon: "/services/payment.png",
            },
            {
              title: "Морские перевозки",
              description: "Контейнерные перевозки из любого порта",
              icon: "/services/ship.png",
            },
            {
              title: "Авиаперевозки",
              description: "Срочная доставка воздушным транспортом",
              icon: "/services/airplane.png",
            },
            {
              title: "Наземная доставка",
              description: "Автомобильные и железнодорожные перевозки",
              icon: "/services/truck.png",
            },
            {
              title: "Подбор поставщиков",
              description:
                "Помощь в подборе поставщиков за границей по оптимальным ценам",
              icon: "/services/supplier.png",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 md:flex md:items-center">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-slate-900">
                      {service.title}
                    </h3>
                    <p className="text-slate-600">{service.description}</p>
                    <Button
                      variant="link"
                      className="mt-4 p-0 text-indigo-600 hover:text-indigo-700"
                    >
                      Подробнее
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="mb-6 w-48 h-36 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-white transition-colors duration-300">
                    {/* <service.icon className="w-6 h-6" /> */}
                    <Image
                      src={service.icon}
                      width={100}
                      height={100}
                      alt={service.title}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
