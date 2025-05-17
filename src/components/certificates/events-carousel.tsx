import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";
import DotPagination from "../ui/dot-pagination";
const EventsCarousel = ({ images }: { images?: string[] }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(images?.length || 0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div
      dir="ltr"
      className="flex flex-col items-center justify-center gap-2 mdgap-4 sm:gap-8"
    >
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {images?.map((img, index) => (
            <CarouselItem
              key={index}
              className="relative w-[300px] h-[400px] md:w-[400px] md:h-[600px] lg:w-[500px] lg:h-[700px] xl:w-[600px] xl:h-[800px]"
            >
              <Image
                src={`/event/${img}`}
                alt={`Event ${index + 1}`}
                fill
                className="object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <DotPagination
        count={count}
        currentPage={current}
        setCurrentPage={() => null}
      />
    </div>
  );
};

export default EventsCarousel;
