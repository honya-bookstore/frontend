'use client'
import {useState, useEffect} from "react";
import ShortField from "@/components/Input Field/ShortField";
import LongField from "@/components/Input Field/LongField";
import Button from "@/components/Button";
import category from "@/mocks/data/category.json"
import Image from "next/image";
import Icon from "@/components/Icon";

// TODO: add pagination
export default function CategoryList() {
    const [categoryName, setCategoryName] = useState("");
    const [categorySlug, setCategorySlug] = useState("");
    const [categoryDescription, setCategoryDescription] = useState("");
    const [hasError, setHasError] = useState(false);
    const categories = category;

    useEffect(() => {
        const isNameValid = categoryName.trim().length > 0;
        const isSlugValid = categorySlug.trim().length > 0;

        setHasError(
            !isNameValid ||
            !isSlugValid
        );
    }, [categoryName, categorySlug]);

    return (
        <main className={'flex flex-col h-full gap-6'}>
            <h1 className={'font-prata text-3xl'}>Category List</h1>
            <section className={'flex items-center justify-between gap-12 h-full'}>
                <div
                    className={'flex flex-col justify-between w-2/5 h-full border-1 border-line-color rounded-[15px] px-[25px] py-[15px] '}>
                    <ShortField label={'Category Name'}
                                className={'w-full p-3'}
                                placeholder={'Enter category name'}
                                value={categoryName}
                                required={true}
                                onValueChange={(e) => setCategoryName(e.target.value)}/>
                    <ShortField label={'Category Slug'}
                                className={'w-full p-3'}
                                placeholder={'Enter category slug'}
                                value={categorySlug}
                                required={true}
                                onValueChange={(e) => setCategorySlug(e.target.value)}/>
                    <LongField label={'Description'}
                               className={'w-full p-3 h-64'}
                               charLimit={300}
                               value={categoryDescription}
                               placeholder={'Enter description'}
                               onValueChange={(e) => setCategoryDescription(e.target.value)}/>
                    <Button shape={'rect'}
                            variant={'solid'}
                            icon={'add'}
                            iconSize={25}
                            disabled={hasError}
                            className={'text-white bg-button-blue hover:bg-sky-600 w-fit h-[50px] font-plus-jakarta-sans rounded-[15px]'}>
                        Add Category
                    </Button>
                </div>
                <table className="w-full border-collapse rounded-lg overflow-hidden shadow-sm h-full">
                    <thead>
                    <tr className="bg-gray-100 text-left text-[16px] font-bold text-gray-700">
                        <th className="px-4 py-3 border-r border-gray-200 text-center">ID</th>
                        <th className="px-4 py-3 border-r border-gray-200">Name</th>
                        <th className="px-4 py-3 border-r border-gray-200">Slug</th>
                        <th className="px-4 py-3 border-r border-gray-200 text-center line-clamp-3">Description</th>
                        <th className="px-4 py-3 text-center">Actions</th>
                    </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                    {categories.map((category, index) => (
                        <tr
                            key={index}
                            className="hover:bg-gray-50 transition-colors duration-200"
                        >
                            <td className="px-4 py-3 border-gray-100 font-medium">{category.id}</td>
                            <td className="px-4 py-3 border-gray-100">{category.name}</td>
                            <td className="px-4 py-3 border-gray-100">{category.slug}</td>
                            <td className="px-4 py-3 border-gray-100">{category.description}</td>
                            <td className="px-4 py-3 text-center gap-3">
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
            </section>
        </main>
    )
}