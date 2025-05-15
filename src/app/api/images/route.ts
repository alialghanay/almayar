import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  const dir = path.join(process.cwd(), "public/partners");
  const files = fs.readdirSync(dir);
  const images = files.filter((file) => /\.(jpe?g|png|gif|webp)$/i.test(file));
  return NextResponse.json(images);
}
