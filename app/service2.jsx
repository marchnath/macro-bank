import Image from "next/image";
import { servicesData } from "./data/service";

export default function Service2() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-12 md:space-y-24">
        {servicesData.map((service, index) => (
          <div
            key={service.id}
            className={`grid gap-8 items-center ${
              index % 2 === 0
                ? "md:grid-cols-[2fr,3fr]"
                : "md:grid-cols-[3fr,2fr]"
            }`}
          >
            <div
              className={`${
                index % 2 === 0 ? "md:order-1" : "md:order-2"
              } order-1`}
            >
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                className="object-cover w-full aspect-[3/2]"
              />
            </div>
            <div
              className={`${
                index % 2 === 0 ? "md:order-2" : "md:order-1"
              } order-2 space-y-4`}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary">
                {service.title}
              </h2>
              <p className="text-muted-foreground text-lg">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
