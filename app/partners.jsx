import { motion } from "framer-motion";

const Partners = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <motion.div
        className="container px-4 md:px-6 mx-auto"
        initial={fadeIn.initial}
        whileInView={fadeIn.animate}
        transition={fadeIn.transition}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Сотрудничество</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Business Section */}
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="/bg/for_business.jpg"
              alt="Для бизнеса"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative bg-yellow-900 bg-opacity-80 text-white p-6">
              <h3 className="text-xl font-semibold mb-4">Для бизнеса</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Розничная и оптовая торговля
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Логистические компании
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  IT-компании и маркетинговые агентства
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Автосалоны и дилеры
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Застройщики
                </li>
              </ul>
            </div>
          </div>

          {/* Partners Section */}
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="/bg/partners.jpg"
              alt="Для партнеров"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative bg-slate-800 bg-opacity-80 text-white p-6">
              <h3 className="text-xl font-semibold mb-4">Для частных лиц</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                  Находящиеся за рубежом (на ПМЖ или в поездке)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                  Инвестирующие в зарубежную недвижимость и проекты
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                  Частные заказчики автомобилей
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                  Фрилансеры
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                  Риелторы
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Partners;
