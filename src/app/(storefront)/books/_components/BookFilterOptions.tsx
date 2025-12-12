'use client'

import {useState} from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

export default function BookFilterOptions() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [minPrice, setMinPrice] = useState<number | null>(() =>
        searchParams.get("min_price")
            ? Number(searchParams.get("min_price"))
            : null,
    );
    const [maxPrice, setMaxPrice] = useState<number | null>(() =>
        searchParams.get("max_price")
            ? Number(searchParams.get("max_price"))
            : null,
    );
    const [rating, setRating] = useState<number | null>(() =>
        searchParams.get("rating") ? Number(searchParams.get("rating")) : null,
    );

    const [publisher, setPublisher] = useState<string | null>(() =>
        searchParams.get("publisher") ? String(searchParams.get("publisher")) : null,
    );

    const [yearPublished, setYearPublished] = useState<number | null>(() =>
        searchParams.get("year") ? Number(searchParams.get("year")) : null,
    );
    return (
        <div></div>
    )
}