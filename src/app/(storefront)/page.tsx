import {Book} from "@/types/types";
import BestSellingSlider from "@/app/(storefront)/components/Sliders/BestSellingSlider";
import {Suspense} from "react";

export default async function landingPage() {
    // fetch books
    const res = await fetch("http://api.example.com/book");
    const books: Book[] = await res.json();
    const bestSellingBooks = books.sort((a, b) => b.sold - a.sold).slice(0, 4);
    return (
        <main className={'w-screen'}>
            <Suspense fallback={<p>Loading...</p>}>
                <BestSellingSlider books={bestSellingBooks} />
            </Suspense>
        </main>
    );
}