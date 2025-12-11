import Breadcrumb, {BreadcrumbItemType} from "@/app/(storefront)/_components/Breadcrumb/Breadcrumb";
import Dropbox from "@/components/Input Field/Dropbox";
import BookCard from "@/app/(storefront)/_components/BookCard/BookCard";
import BookPageOptions from "@/app/(storefront)/books/_components/BookPageOptions";
import {BookResponse} from "@/types/types";

export const dynamic = 'force-dynamic';

interface BookPageProps {
    searchParams: {
        [key: string]: string | string[] | undefined;
    };
}

export default async function BooksPage({ searchParams }: BookPageProps) {
    const params = await searchParams;
    const {
        page = "1",
        limit = "20",
        sort_price,
        sort_recent,
        max_price,
        min_price,
        publisher,
        search,
        year,
    } = params;

    const bookQueryParams = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
    });

    if (sort_price) bookQueryParams.append("sort_price", sort_price.toString());
    if (sort_recent) bookQueryParams.append("sort_recent", sort_recent.toString());
    if (max_price) bookQueryParams.append("max_price", max_price.toString());
    if (min_price) bookQueryParams.append("min_price", min_price.toString());
    if (publisher) bookQueryParams.append("publisher", publisher.toString());
    if (search) bookQueryParams.append("search", search.toString());
    if (year) bookQueryParams.append("year", year.toString());

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books?${bookQueryParams.toString()}`, {cache: "no-store"});
    if (!res.ok) {
        throw new Error("Failed to fetch books");
    }
    const data: BookResponse = await res.json();
    const books = data.data;

    const breadcrumbItems: BreadcrumbItemType[] = [
        { label: 'Books', href: '/products' },
        ]

    return (
        <main className={'flex flex-col items-start justify-start gap-8 pt-10 pb-20 max-w-7xl'}>
            <div className={'w-full'}>
                <Breadcrumb items={breadcrumbItems} />
            </div>
            <BookPageOptions/>
            <section className={'w-full grid xl:grid-cols-4 grid-rows-2 lg:grid-cols-3 md:grid-cols-2 gap-8'}>
                {books.map((book) => (
                    <BookCard key={book.id} book={book} showCartButton={true}/>
                ))}
            </section>
        </main>
    )
}