import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="w-full py-12 mt-16 bg-slate-800 text-slate-300"
      id="contacts"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li>Телефон: +7 (999) 123-45-67</li>
              <li>Email: info@example.ru</li>
              <li>Адрес: г. Москва, ул. Примерная, 123</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-purple-200">
                  О компании
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-200">
                  Условия работы
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-200">
                  Политика конфиденциальности
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Социальные сети</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-purple-200">
                VK
              </Link>
              <Link href="#" className="hover:text-purple-200">
                Telegram
              </Link>
              <Link href="#" className="hover:text-purple-200">
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-yellow-500 text-center">
          <p>© 2024 Все права защищены</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
