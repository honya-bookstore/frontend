import { http, HttpResponse } from 'msw';

import book from "./data/book.json"
import category from "./data/category.json"
import cart from "./data/cart.json"

export const handlers = [
    http.get('https://api.example.com/book', () => {
        return HttpResponse.json(book, { status: 200 });
    }),
    http.get('https://api.example.com/category', () => {
        return HttpResponse.json(category, { status: 200 });
    }),
    http.get('https://api.example.com/cart', () => {
        return HttpResponse.json(cart, { status: 200 });
    }),
    http.get('https://api.example.com/book/:id', (req) => {
        const { id } = req.params;
        const bookDetail = book.find(b => b.id === id);
        if (bookDetail) {
            return HttpResponse.json(bookDetail, { status: 200 });
        } else {
            return HttpResponse.json({ message: 'Book not found' }, { status: 404 });
        }
    })
]