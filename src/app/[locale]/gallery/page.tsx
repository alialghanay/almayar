import getImages from "@/lib/utils/get-images";

export default async function GalleryPage() {
  const images = await getImages({ src: "public/partners" });

  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((img, i) => (
        <img
          key={i}
          src={`/partners/${img}`}
          alt={`img-${i}`}
          className="w-full"
          loading="lazy"
        />
      ))}
    </div>
  );
}
