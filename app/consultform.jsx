// ConsultForm.jsx
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const ConsultForm = () => {
  return (
    <form className="space-y-6 mt-6">
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
      <div className="space-y-2">
        <Label htmlFor="message">Сообщение</Label>
        <textarea
          id="message"
          className="w-full min-h-[100px] px-3 py-2 border rounded-md"
          placeholder="Введите ваше сообщение"
        />
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
  );
};

export default ConsultForm;
