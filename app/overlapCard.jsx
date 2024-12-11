import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import {
  LuPlane,
  LuShip,
  LuBusFront,
  LuMenu,
  LuCalculator,
  LuWaypoints,
  LuNewspaper,
  LuMapPin,
  LuSearch,
} from "react-icons/lu";

const SearchInput = ({ placeholder }) => (
  <div className="flex w-full items-center gap-2 ">
    <input
      type="text"
      placeholder={placeholder}
      className="w-full border-b border-indigo-600 p-2 outline-none"
    />
    <Button
      variant="ghost"
      className="text-white bg-indigo-600 rounded-none px-6 hover:bg-indigo-700"
    >
      <LuSearch className="h-5 w-5" />
    </Button>
  </div>
);

const OverlapCard = () => {
  const [activeTab, setActiveTab] = useState("calculate");

  const getContent = () => {
    switch (activeTab) {
      case "calculate":
        return (
          <div className="flex flex-wrap gap-4">
            <Button
              variant="outline"
              className="flex-1 rounded-none border-indigo-600 text-indigo-600 hover:bg-indigo-50"
            >
              <LuMenu /> Все виды транспорта
            </Button>
            <Button
              variant="outline"
              className="flex-1 rounded-none border-indigo-600 text-indigo-600 hover:bg-indigo-50"
            >
              <LuPlane /> Авиаперевозки
            </Button>
            <Button
              variant="outline"
              className="flex-1 rounded-none border-indigo-600 text-indigo-600 hover:bg-indigo-50"
            >
              <LuShip /> Морские перевозки
            </Button>
            <Button
              variant="outline"
              className="flex-1 rounded-none border-indigo-600 text-indigo-600 hover:bg-indigo-50"
            >
              <LuBusFront /> Автоперевозки
            </Button>
          </div>
        );
      case "track":
        return <SearchInput placeholder="Поиск по номеру отслеживания" />;
      case "services":
        return <SearchInput placeholder="Введите поисковый запрос" />;
      case "locations":
        return <SearchInput placeholder="Введите местоположение или страну" />;
      default:
        return null;
    }
  };

  return (
    <Card className="absolute bottom-0 sm:bottom-28 z-30 rounded-none max-w-5xl mx-auto left-0 right-0 bg-white p-6">
      <div className="mb-4 grid grid-cols-2 md:grid-cols-4 gap-8 border-b pb-4">
        <button
          className={`flex items-center border-r px-4 py-1 text-indigo-800 font-bold hover:text-indigo-700 ${
            activeTab === "calculate"
              ? "border-b-2 border-b-yellow-400 border-r-white"
              : ""
          }`}
          onClick={() => setActiveTab("calculate")}
        >
          <LuCalculator /> Рассчитать
        </button>
        <button
          className={`flex items-center border-r px-4 py-1 text-indigo-800 font-bold hover:text-indigo-700 ${
            activeTab === "track"
              ? "border-b-2 border-b-yellow-400 border-r-white"
              : ""
          }`}
          onClick={() => setActiveTab("track")}
        >
          <LuWaypoints /> Отследить
        </button>
        <button
          className={`flex items-center border-r px-4 py-1 text-indigo-800 font-bold hover:text-indigo-700 ${
            activeTab === "services"
              ? "border-b-2 border-b-yellow-400 border-r-white"
              : ""
          }`}
          onClick={() => setActiveTab("services")}
        >
          <LuNewspaper /> Услуги
        </button>
        <button
          className={`flex items-center px-4 py-1 text-indigo-800 font-bold hover:text-indigo-700 ${
            activeTab === "locations" ? "border-b-2 border-b-yellow-400" : ""
          }`}
          onClick={() => setActiveTab("locations")}
        >
          <LuMapPin /> Локации
        </button>
      </div>
      {getContent()}
    </Card>
  );
};

export default OverlapCard;
