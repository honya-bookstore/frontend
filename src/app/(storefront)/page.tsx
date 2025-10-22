import {Book} from "@/types/types";
import Slider from "@/app/(storefront)/components/Sliders/Slider";
import {Suspense} from "react";
import Icon from "@/components/Icon";
import SectionTitle from "@/app/(storefront)/components/SectionTitle";
import FeaturedBooks from "@/app/(storefront)/components/FeaturedBooks/FeaturedBooks";
import BestSellingBook from "@/app/(storefront)/components/BestSellingBook/BestSellingBook";
import PopularBooks from "@/app/(storefront)/components/PopularBooks/PopularBooks";

export default async function landingPage() {
    // fetch books
    const res = await fetch("https://api.example.com/book");
    const books: Book[] = await res.json();
    const bestSellingBooks = books.sort((a, b) => b.sold - a.sold).slice(0, 4);
    return (
        <main className={'flex flex-col w-screen'}>
            <Suspense fallback={<div>Loading...</div>}>
                <section className={'py-14'}>
                    <Slider books={bestSellingBooks}/>
                </section>
            </Suspense>
            <section className={'flex flex-col items-center justify-center mt-36 py-12 bg-background-darker w-full gap-10'}>
                    <SectionTitle title={'Why shop with us?'}/>
                    <div
                        className={'flex justify-center w-full gap-40 font-plus-jakarta-sans uppercase font-bold tracking-wide text-[#94928b] text-[20px]'}>
                        <div className={'flex flex-col items-center justify-center gap-4'}>
                            <Icon name={"timer"} size={50} color={'#94928b'}></Icon>
                            <span>Latest Books</span>
                        </div>
                        <div className={'flex flex-col items-center justify-center gap-4'}>
                            <Icon name={"delivery"} size={50} color={'#94928b'}></Icon>
                            <span>FAST DELIVERY</span>
                        </div>
                        <div className={'flex flex-col items-center justify-center gap-4'}>
                            <Icon name={"handshake"} size={50} color={'#94928b'}></Icon>
                            <span>TRUSTED SITES</span>
                        </div>
                    </div>
            </section>
            <FeaturedBooks books={books}/>
            <BestSellingBook book={books[0]}/>
            <PopularBooks books={books}/>
        </main>
    );
}