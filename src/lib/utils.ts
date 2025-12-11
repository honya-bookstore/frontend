import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {Book} from "@/types/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getBookCover(book: Book) {
    console.log(book.media);
    const cover = book.media.find((media) => media.isCover);
    return cover ? cover.url : "images/fallbackBookImage.png"
}