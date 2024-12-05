import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const heroImages = [{ url: "/hero2.png" }, { url: "/hero4.jpg" }];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      className="pt-28 sm:pt-32 pb-16 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Международные платежи и перевозки
            </motion.h1>
            <motion.p
              className="md:text-xl sm:text-lg text-slate-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Надежные решения для импортеров: от носков до автомобилей.
              Безопасные платежи и доставка из любой точки мира.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-lg px-6 py-4 sm:px-8 sm:py-6 text-black">
                Начать сейчас
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
          <div className="relative h-[400px]">
            {heroImages.map((image, index) => (
              <div
                key={index}
                className="absolute top-0 left-0 w-full h-full transition-opacity duration-300"
                style={{ opacity: index === currentIndex ? 1 : 0 }}
              >
                <img
                  src={image.url}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            ))}

            {/* Navigation dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {heroImages.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    currentIndex === index ? "bg-yellow-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
