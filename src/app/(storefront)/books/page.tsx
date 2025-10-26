'use client'

import Breadcrumb from "@/app/(storefront)/_components/Breadcrumb/Breadcrumb";
import Dropbox from "@/components/Input Field/Dropbox";
import { useState } from "react";
import BookCard from "@/app/(storefront)/_components/BookCard/BookCard";
import book from "@/mocks/data/book.json"

// TODO: implement search params, sorting functionality, pagination, and filtering
export default function BooksPage() {
    const books = book;
    const [sortOption, setSortOption] = useState('Newest');
    return (
        <main className={'flex flex-col items-start justify-start gap-8 pt-10 pb-20 w-2/3'}>
            <div className={'w-full'}>
                <Breadcrumb/>
            </div>
            <div className={'flex gap-10'}>
                <span className={'font-prata text-[35px] items-center'}>Books</span>
                <Dropbox options={['Relevance', 'Newest', 'Price: Low to High', 'Price: High to Low']}
                         defaultValue={'Newest'}
                         onValueChange={(e) => setSortOption(e.target.value)}
                         className={'w-60 h-full my-1 px-2'}/>
            </div>
            <section className={'w-full grid xl:grid-cols-4 grid-rows-2 lg:grid-cols-3 md:grid-cols-2 gap-8'}>
                {books.map((book) => (
                    <BookCard key={book.id} book={book} showCartButton={true}/>
                ))}
            </section>
        </main>
    )
}