"use client";

import { useState } from "react";
import { Book, Category } from "@/types/types";
import BookRow from "@/app/(storefront)/_components/BookRow/BookRow";

interface CategorySelectorProps {
    categories: Category[];
    books: Book[];
}

export default function CategorySelector({ categories, books }: CategorySelectorProps) {
    const [selected, setSelected] = useState("all");

    let filteredBooks =
        selected === "all"
            ? books
            : books.filter((b) =>
                b.category.some(
                    (c) => c.toLowerCase() === categories.find((cat) => cat.id === selected)?.name.toLowerCase()
                )
            );
    filteredBooks = filteredBooks.sort((a, b) => b.sold - a.sold).slice(0, 8);

    return (
        <div className="flex flex-col items-center w-full gap-8">
            <div className="flex flex-wrap justify-center gap-3">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setSelected(cat.id)}
                        className={`px-4 py-2 text-sm rounded-full border transition-colors duration-200 cursor-pointer ${
                            selected === cat.id
                                ? "bg-black text-white border-black"
                                : "border-gray-300 hover:bg-gray-100"
                        }`}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>

            {filteredBooks.length > 0 ? (<BookRow books={filteredBooks.slice(0,4)}/>) : <div>No books found in this category.</div>}
            {filteredBooks.length > 4 && (<BookRow books={filteredBooks.slice(4,8)}/>)}

        </div>
    );
}
