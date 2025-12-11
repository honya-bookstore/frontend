'use client';
import {useState} from "react";
import ShortField from "@/components/Input Field/ShortField";
import Icon from "@/components/Icon";
import book from "@/mocks/data/book.json"
import Image from "next/image";
import Button from "@/components/Button";

// TODO: Add sort, pagination and media data
export default function BookList() {
    const [searchTerm, setSearchTerm] = useState('');
    const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
    const books = book;
    const handleSearch = () => {
        // TODO: Implement search functionality
    }
    return (
        <main className={'flex flex-col h-full gap-6'}>
            <div className={'flex justify-between items-center py-2'}>
                <h1 className={'font-prata text-3xl'}>Media Library</h1>
                <div className={'flex h-full'}>
                    <button onClick={() => setViewMode('list')}
                            className={`mr-2 border-1 hover:bg-gray-200 px-2.5 rounded-lg flex items-center justify-center ${viewMode === 'list' ? 'border-button-blue' : 'border-line-color cursor-pointer'}`}>
                        <Icon name={'list'} size={30} className={'text-gray-600'}/>
                    </button>
                    <button onClick={() => setViewMode('grid')}
                            className={`mr-2 border-1 hover:bg-gray-200 px-2.5 rounded-lg flex items-center justify-center ${viewMode === 'grid' ? 'border-button-blue' : 'border-line-color cursor-pointer'}`}>
                        <Icon name={'grid'} size={30} className={'text-gray-600'}/>
                    </button>
                    <ShortField className={'w-80 h-[40px] p-3'}
                                placeholder={'Search...'}
                                value={searchTerm}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') handleSearch();
                                }}
                                onValueChange={(e) => setSearchTerm(e.target.value)}/>
                    <button onClick={handleSearch}
                            className={'ml-2 border-1 border-line-color hover:bg-gray-200 px-2.5 rounded-lg flex items-center justify-center cursor-pointer'}>
                        <Icon name={'search'} size={30} className={'text-black'}/>
                    </button>
                </div>
            </div>
            <table className="w-full border-collapse rounded-lg overflow-hidden shadow-sm">
                <thead>
                <tr className="bg-gray-100 text-left text-[16px] font-bold text-gray-700">
                    <th className="px-4 py-3 border-r border-gray-200">Thumbnail</th>
                    <th className="px-4 py-3 border-r border-gray-200">Name</th>
                    <th className="px-4 py-3 border-r border-gray-200">Date Uploaded</th>
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
                            <Image src={getBookCover(book)} alt={book.title} width={100} height={130} className="w-auto h-24 object-cover rounded-md shadow-sm"/>
                        </td>
                        <td className="px-4 py-3 border-gray-100 font-medium">{book.title}</td>
                        <td className="px-4 py-3 border-gray-100">{book.author}</td>
                        <td className="px-4 py-3 text-center">
                            <div className={'flex flex-col gap-2 items-center justify-center'}>
                                <Button icon={'trash'} iconSize={30} iconPosition={'left'} variant={'outline'} className={'py-2 bg-[#ff0000] text-white hover:bg-red-700 rounded-lg'}>
                                    Delete
                                </Button>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

        </main>
    )
}