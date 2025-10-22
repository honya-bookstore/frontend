import { http, HttpResponse } from 'msw';

import book from "./data/book.json"

export const handlers = [
    http.get('http://api.example.com/book', () => {
        return HttpResponse.json(book, { status: 200 });
    })
]