import {Book} from "@/types/types";
import Image from "next/image";

interface BookCardProps {
    book: Book;
}

export default function BookCard({book}: BookCardProps) {
    return (
        <div className={'flex flex-col items-center justify-center bg-transparent w-fit gap-4'}>
            <div className={'book-cover flex p-8 bg-[#efeee8] rounded-lg'}>
                <Image src={`/${book.coverImageUrl}`} alt={"cover"} width={250} height={250} className={'overflow-hidden h-[250px] w-auto shadow-xl'} />
            </div>
            <div className={'book-info flex flex-col items-center w-full'}>
                <span className={'font-prata text-[16px] text-center'}>
                    {book.title}
                </span>
                <span className={'font-plus-jakarta-sans text-[16px] text-center opacity-50'}>
                    {book.author}
                </span>
                <span className={'font-prata text-[21px] text-center mt-2 text-price-color tracking-wide'}>
                    $ {book.price.toFixed(2)}
                </span>
            </div>
        </div>
    )
}