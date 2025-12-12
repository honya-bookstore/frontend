import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {BookMedia} from "@/types/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getBookCover(media: BookMedia[]) {
    const cover = media.find((med) => med.isCover);
    return cover ? cover.url : "images/fallbackBookImage.png"
}