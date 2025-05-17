import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CertificatesCarousel = ({ images }: { images?: string[] }) => {
  return (
    <Carousel>
      <CarouselContent>
        {images?.map((img, index) => (
          <CarouselItem
            key={index}
            className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px] 2xl:w-[800px]"
          >
            <img
              src={`/certificate/${img}`}
              alt={`Certificate ${index + 1}`}
              className="object-cover w-full h-full"
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
