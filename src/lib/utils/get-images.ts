import fs from "fs";
import path from "path";

async function getImages({ src }: { src: string }) {
  const dir = path.join(process.cwd(), src);
  const files = fs.readdirSync(dir);
  return files.filter((file) => /\.(jpe?g|png|gif|webp)$/i.test(file));
}

export default getImages;
