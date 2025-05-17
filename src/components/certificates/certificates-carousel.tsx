import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const CertificatesCarousel = ({ images }: { images?: string[] }) => {
  return (
    <Carousel dir="ltr">
      <CarouselContent>
        {images?.map((img, index) => (
          <CarouselItem
            key={index}
            className="relative w-[300px] h-[400px] md:basis-1/3"
          >
            <Image
              src={`/certificate/${img}`}
              alt={`Certificate ${index + 1}`}
              fill
              className="object-contain"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CertificatesCarousel;
