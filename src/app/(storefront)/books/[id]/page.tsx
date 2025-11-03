import Breadcrumb from "@/app/(storefront)/_components/Breadcrumb/Breadcrumb";
import BookDetailSection from "@/app/(storefront)/books/_components/BookDetailSection";
import {Book} from "@/types/types";
import BookDescriptionSection from "@/app/(storefront)/books/_components/BookDescriptionSection";
import BookReviewSection from "@/app/(storefront)/books/_components/BookReviewSection";

export default async function BookDetailPage({ params }: { params : { id: number } }) {
    const { id } = await params;
    const res = await fetch(`http://api.example.com/book/${id}`);
    const book: Book = await res.json();

    return (
        <main className={'py-10 w-full flex flex-col gap-10 items-center'}>
            <div className={'mx-auto w-4/5'}>
                <Breadcrumb/>
            </div>
            <BookDetailSection book={book}/>
            <BookDescriptionSection description={book.description}/>
            <BookReviewSection bookId={book.id}/>
        </main>
    );
}