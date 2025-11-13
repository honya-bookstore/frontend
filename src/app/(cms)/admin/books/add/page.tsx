'use client';
import ShortField from "@/components/Input Field/ShortField";
import LongField from "@/components/Input Field/LongField";
import {useState, useEffect} from "react";
import Dropbox from "@/components/Input Field/Dropbox";
import Button from "@/components/Button";


export default function AddBookPage() {
    const [bookTitle, setBookTitle] = useState('');
    const [bookDescription, setBookDescription] = useState('');
    const [bookAuthor, setBookAuthor] = useState('');
    const [bookPrice, setBookPrice] = useState('');
    const [bookPages, setBookPages] = useState('');
    const [bookYear, setBookYear] = useState('');
    const [bookCategory, setBookCategory] = useState<string[]>([]);
    const [bookPublisher, setBookPublisher] = useState('');
    const [bookWeight, setBookWeight] = useState('');
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const isTitleValid = bookTitle.trim().length > 0;
        const isAuthorValid = bookAuthor.trim().length > 0;
        const isPriceValid = bookPrice.trim().length > 0;
        const isPagesValid = bookPages.trim().length > 0 && !isNaN(Number(bookPages));
        const isYearValid = bookYear.trim().length > 0 && !isNaN(Number(bookYear));
        const isCategoryValid = bookCategory.length > 0;
        const isPublisherValid = bookPublisher.trim().length > 0;

        setHasError(
            !isTitleValid ||
            !isAuthorValid ||
            !isPriceValid ||
            !isPagesValid ||
            !isYearValid ||
            !isCategoryValid ||
            !isPublisherValid
        );
    }, [bookTitle, bookAuthor, bookPrice, bookPages, bookYear, bookCategory, bookPublisher]);

    return (
        <main className={'flex flex-col gap-6'}>
            <h1 className={'font-prata text-3xl'}>Add Book</h1>
            <section
                className={'flex gap-8 rounded-[15px] w-full px-[25px] py-[15px] border-1 border-line-color justify-between'}>
                <div className={'flex flex-col justify-between w-3/5 gap-4 h-fit'}>
                    <ShortField label={'Book Title'}
                                className={'w-full p-3'}
                                placeholder={'Enter book title'}
                                value={bookTitle}
                                onValueChange={(e) => setBookTitle(e.target.value)}
                                required={true}/>
                    <LongField label={'Book Description'}
                               className={'w-full h-50 p-3'}
                               charLimit={500}
                               value={bookDescription}
                               onValueChange={(e) => setBookDescription(e.target.value)}
                               placeholder={'Enter book description'}/>
                </div>
                <div className={'flex flex-col w-2/5 justify-between gap-4'}>
                    <ShortField label={'Book Author'}
                                className={'w-full p-3'}
                                value={bookAuthor}
                                onValueChange={(e) => setBookAuthor(e.target.value)}
                                required={true}
                                placeholder={'Enter book author'}/>
                    <ShortField label={'Price'}
                                className={'w-full p-3'}
                                value={bookPrice}
                                onValueChange={(e) => setBookPrice(e.target.value)}
                                required={true}
                                placeholder={'Enter book price'}/>
                    <div className={'flex gap-10 justify-between'}>
                        <ShortField label={'Pages Count'}
                                    className={'w-full p-3'}
                                    value={bookPages}
                                    onValueChange={(e) => setBookPages(e.target.value)}
                                    required={true}
                                    error={isNaN(Number(bookPages)) ? 'Please enter a valid number' : undefined}
                                    placeholder={'Enter pages count'}/>
                        <ShortField label={'Year Published'}
                                    className={'w-full p-3'}
                                    value={bookYear}
                                    onValueChange={(e) => setBookYear(e.target.value)}
                                    required={true}
                                    error={isNaN(Number(bookYear)) ? 'Please enter a valid year' : undefined}
                                    placeholder={'Enter year published'}/>
                    </div>
                </div>
            </section>
            <section
                className={'flex gap-8 rounded-[15px] w-full px-[25px] py-[15px] border-1 border-line-color justify-between'}>
                <div className={'flex flex-col w-full gap-4'}>
                    <Dropbox
                        options={['Fiction', 'Non-Fiction', 'Science', 'History', 'Biography', 'Children', 'Fantasy', 'Mystery']}
                        label={'Category'}
                        onValueChange={(e) => {
                            const selectedCategory = e.target.value;
                            if (selectedCategory && !bookCategory.includes(selectedCategory)) {
                                setBookCategory([...bookCategory, selectedCategory]);
                            }
                        }}
                        className={'w-full p-3'}/>
                    <label className={'flex flex-col w-full'}>Added Categories</label>
                    <div className={'flex flex-wrap gap-2'}>
                        {bookCategory.length === 0 && (
                            <span className={'text-red-500 opacity-80'}>Please select a category</span>
                        )}
                        {bookCategory.map((category, index) => (
                            <div key={index}
                                 className={'bg-gray-200 text-black px-3 py-1 rounded-full flex items-center gap-2'}>
                                <span>{category}</span>
                                <button onClick={() => {
                                    setBookCategory(bookCategory.filter((cat) => cat !== category));
                                }}
                                        className={'text-red-500 hover:text-red-700'}>
                                    &times;
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <ShortField label={'Publisher'}
                            className={'w-full p-3'}
                            value={bookPublisher}
                            required={true}
                            onValueChange={(e) => setBookPublisher(e.target.value)}
                            placeholder={'Enter book publisher'}/>
                <ShortField label={'Weight'}
                            className={'w-full p-3'}
                            value={bookWeight}
                            onValueChange={(e) => setBookWeight(e.target.value)}
                            placeholder={'Enter book weight (grams)'}
                            error={isNaN(Number(bookWeight)) ? 'Please enter a valid weight' : undefined}/>
            </section>
            <section className={'flex gap-8 rounded-[15px] w-full px-[25px] py-[15px] border-1 border-line-color justify-between'}>
                <div className={'flex flex-col gap-4 w-full'}>
                    <label className={'text-[16px] text-black font-plus-jakarta-sans'}>Cover Image</label>
                    <div className={'h-60 border border-line-color rounded-[10px] flex items-center justify-center text-gray-500 w-full'}>
                        {/* TODO: Preview uploaded image here */}
                        No image selected
                    </div>
                    <button className={'border-1 cursor-pointer border-button-blue hover:bg-gray-200 text-black bg-transparent w-full h-[50px] rounded-[15px]'}>
                        Select Cover
                    </button>
                </div>
                <div className={'flex flex-col gap-4 w-full'}>
                    <label className={'text-[16px] text-black font-plus-jakarta-sans'}>Images</label>
                    <button className={'text-white bg-button-blue hover:bg-sky-600 w-full h-[50px] rounded-[15px]'}>
                        Add Images
                    </button>
                </div>
                <div className={'flex flex-col gap-4 w-full'}>
                    <label className={'text-[16px] text-black font-plus-jakarta-sans'}>Added Images</label>
                    <div className={'h-60 flex-wrap rounded-[10px] flex text-gray-500 w-full'}>
                        {/* TODO: Preview added images here */}
                        No images added
                    </div>
                </div>
            </section>
            <Button shape={'rect'}
                    variant={'solid'}
                    icon={'add'}
                    iconSize={25}
                    disabled={hasError}
                    className={'text-white bg-button-blue hover:bg-sky-600 w-fit h-[50px] font-plus-jakarta-sans rounded-[15px]'}>
                Add Book
            </Button>
        </main>
)
}