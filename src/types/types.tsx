export interface Book {
    id: string,
    title: string,
    description: string,
    author: string,
    price: number,
    pageCount: number,
    yearPublished: number,
    category: string[],
    publisher: string,
    weight: number,
    coverImageUrl: string,
    imageUrls: string[],
    stock: number,
    sold: number,
}

export interface Category {
    id: string,
    name: string,
    description: string,
    slug: string,
}

export interface Order {
    id: string,
    userId: string,
    bookIds: string[],
    totalPrice: number,
    address: string,
    paymentMethod: string,
    status: string,
    phoneNumber: string,
    date: string,
}

export interface Article {
    id: string,
    title: string,
    slug: string,
    content: string,
    tags: string[],
    status: string,
    thumbnailUrl: string,
    publishedAt: string,
    editedAt: string,
    authorId: string,
}

export interface User {
    id: string,
    name: string,
    username: string,
    email: string,
    createdAt: string,
    orderCount: number,
    status: string,
    role: string,
}

export interface Media {
    id: string,
    userId: string,
    fileName: string,
    url: string,
    uploadedAt: string,
}

export interface Ticket {
    id: string;
    userId: string;
    title: string;
    category: string;
    description: string;
    status: string;
    createdAt: string;
    response: string;
    resolvedAt: string;
    responderId: string;
}

export interface CartItem extends Book {
    quantity: number;
}

export interface Cart {
    items: CartItem[];

}

