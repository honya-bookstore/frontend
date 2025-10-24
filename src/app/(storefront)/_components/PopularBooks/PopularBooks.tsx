import { Book, Category } from "@/types/types";
import SectionTitle from "@/app/(storefront)/_components/SectionTitle";
import CategorySelector from "@/app/(storefront)/_components/PopularBooks/CategorySelector";

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
            <SectionTitle title={'Popular Books'} helper={'YOU\'LL LOVE THESE'}/>
            <CategorySelector categories={categories} books={books} />
        </section>
    );
}
