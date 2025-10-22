import { Book, Category } from "@/types/types";
import SectionTitle from "@/app/(storefront)/components/SectionTitle";
import CategorySelector from "@/app/(storefront)/components/PopularBooks/CategorySelector";

interface PopularBooksProps {
    books: Book[];
}

export default async function PopularBooks({ books }: PopularBooksProps) {
    const res = await fetch("https://api.example.com/category", {cache: "no-store"}) ;
    const categories: Category[] = await res.json();

    categories.unshift({
        id: "all",
        name: "All",
        description: "All books",
        slug: "all",
    });

    return (
        <section className="flex flex-col items-center justify-center py-12 gap-[40px]">
            <div className="flex flex-col items-center justify-center gap-[12px]">
                <div className="w-full text-center font-plus-jakarta-sans tracking-widest text-[15px] opacity-70">
                    SOME QUALITY ITEMS
                </div>
                <SectionTitle title="Popular Books" />
            </div>

            <CategorySelector categories={categories} books={books} />
        </section>
    );
}
