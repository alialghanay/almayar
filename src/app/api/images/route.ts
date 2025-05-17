import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const dirPath = searchParams.get("path");
  console.log(dirPath);
  if (!dirPath) {
    return NextResponse.json(
      { error: "Path parameter is required" },
      { status: 400 }
    );
  }

  const dir = path.join(process.cwd(), dirPath);
  console.log(dir);
  if (!fs.existsSync(dir) || !fs.lstatSync(dir).isDirectory()) {
    return NextResponse.json(
      { error: "Invalid directory path" },
      { status: 400 }
    );
  }

  const files = fs.readdirSync(dir);
  const images = files.filter((file) => /\.(jpe?g|png|gif|webp)$/i.test(file));
  return NextResponse.json(images);
}
