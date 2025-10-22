import { http, HttpResponse } from 'msw';

import book from "./data/book.json"
import category from "./data/category.json"

export const handlers = [
    http.get('https://api.example.com/book', () => {
        return HttpResponse.json(book, { status: 200 });
    }),
    http.get('https://api.example.com/category', () => {
        return HttpResponse.json(category, { status: 200 });
    })
]