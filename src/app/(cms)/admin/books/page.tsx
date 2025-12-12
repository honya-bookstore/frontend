'use client';
import {useState} from "react";
import ShortField from "@/components/Input Field/ShortField";
import Icon from "@/components/Icon";
import book from "@/mocks/data/book.json"
import Image from "next/image";
import {getBookCover} from "@/lib/utils";

export default function BookList() {
    const [searchTerm, setSearchTerm] = useState('');
    const books = book;
    const handleSearch = () => {
        // TODO: Implement search functionality
    }

    return (
        <main className={'flex flex-col h-full gap-6'}>
            <div className={'flex justify-between items-center'}>
                <h1 className={'font-prata text-3xl'}>Book List</h1>
                <div className={'flex'}>
                    <ShortField className={'w-80 h-[40px] p-3'}
                                placeholder={'Search...'}
                                value={searchTerm}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') handleSearch();
                                }}
                                onValueChange={(e) => setSearchTerm(e.target.value)}/>
                    <button onClick={handleSearch}
                            className={'ml-2 border-1 border-line-color hover:bg-gray-200 px-2.5 rounded-lg flex items-center justify-center'}>
                        <Icon name={'search'} size={30} className={'text-black'}/>
                    </button>
                </div>
            </div>
            <table className="w-full border-collapse rounded-lg overflow-hidden shadow-sm">
                <thead>
                <tr className="bg-gray-100 text-left text-[16px] font-bold text-gray-700">
                    <th className="px-4 py-3 border-r border-gray-200">Cover Page</th>
                    <th className="px-4 py-3 border-r border-gray-200">Title</th>
                    <th className="px-4 py-3 border-r border-gray-200">Author</th>
                    <th className="px-4 py-3 border-r border-gray-200 text-center">Price</th>
                    <th className="px-4 py-3 border-r border-gray-200 text-center">Pages</th>
                    <th className="px-4 py-3 border-r border-gray-200">Category</th>
                    <th className="px-4 py-3 border-r border-gray-200">Publisher</th>
                    <th className="px-4 py-3 border-r border-gray-200 text-center">Stock</th>
                    <th className="px-4 py-3 border-r border-gray-200 text-center">Sold</th>
                    <th className="px-4 py-3 text-center">Actions</th>
                </tr>
                </thead>

                <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                {books.map((book, index) => (
                    <tr
                        key={index}
                        className="hover:bg-gray-50 transition-colors duration-200"
                    >
                        <td className="px-4 py-3 border-gray-100">
                            <Image src={getBookCover(book.media)} alt={book.title} width={100} height={130} className="w-auto h-24 object-cover rounded-md shadow-sm"/>
                        </td>
                        <td className="px-4 py-3 border-gray-100 font-medium">{book.title}</td>
                        <td className="px-4 py-3 border-gray-100">{book.author}</td>
                        <td className="px-4 py-3 border-gray-100 text-center">{book.price}</td>
                        <td className="px-4 py-3 border-gray-100 text-center">{book.pageCount}</td>
                        <td className="px-4 py-3 border-gray-100">{book.category}</td>
                        <td className="px-4 py-3 border-gray-100">{book.publisher}</td>
                        <td className="px-4 py-3 border-gray-100 text-center">{book.stock}</td>
                        <td className="px-4 py-3 border-gray-100 text-center">{book.sold}</td>
                        <td className="px-4 py-3 text-center gap-3">
                            <button className="text-black hover:text-blue-400">
                                <Icon name={'add'} size={25}/>
                            </button>
                            <button className="text-gray-600 hover:text-blue-400 ml-3">
                                <Icon name={'edit'} size={25}/>
                            </button>
                            <button className="text-red-500 hover:text-red-700 ml-3">
                                <Icon name={'trash'} size={25}/>
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

        </main>
    )
}