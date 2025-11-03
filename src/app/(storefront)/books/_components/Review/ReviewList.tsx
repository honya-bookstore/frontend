import {Review} from "@/types/types";
import ReviewCard from "@/app/(storefront)/books/_components/Review/ReviewCard";

interface ReviewListProps {
    bookId: number;
}

// TODO: implement pagination, change fetch url
export default async function ReviewList({ bookId }: ReviewListProps) {
    // const res = fetch(`https://api.example.com/book/${bookId}/reviews`);
    const res = await fetch(`http://api.example.com/reviews`);
    const reviews = await res.json();
    return (
        <section className={'w-full flex flex-col gap-8 items-center mx-auto'}>
            {reviews.map((review: Review) => (
                <ReviewCard key={review.id} review={review}/>
            ))}
        </section>
    )
}
