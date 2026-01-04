import path from "path";
import fs from "fs/promises";

export interface UploadImageResult {
  fileName: string;
  filePath: string;
  publicUrl: string;
}

/**
 * Ensure upload directory exists
 */
export async function ensureUploadDir(dirPath: string): Promise<void> {
  await fs.mkdir(dirPath, { recursive: true });
}

/**
 * Save a single image file
 */
export async function saveImage(
  file: File,
  uploadDir: string,
  prefix: string = ""
): Promise<UploadImageResult> {
  const timestamp = Date.now();
  const fileName = prefix
    ? `${timestamp}-${prefix}-${file.name}`
    : `${timestamp}-${file.name}`;
  const filePath = path.join(uploadDir, fileName);

  const arrayBuffer = await file.arrayBuffer();
  await fs.writeFile(filePath, Buffer.from(arrayBuffer));

  const publicUrl = `/uploads/movies/${fileName}`;

  return {
    fileName,
    filePath,
    publicUrl,
  };
}

/**
 * Save multiple image files
 */
export async function saveImages(
  files: File[],
  uploadDir: string,
  prefix: string = ""
): Promise<UploadImageResult[]> {
  return Promise.all(
    files.map((file, index) => {
      const imagePrefix = prefix ? `${prefix}-${index}` : `${index}`;
      return saveImage(file, uploadDir, imagePrefix);
    })
  );
}

/**
 * Get the standard upload directory for movies
 */
export function getMovieUploadDir(): string {
  return path.join(process.cwd(), "public", "uploads", "movies");
}
