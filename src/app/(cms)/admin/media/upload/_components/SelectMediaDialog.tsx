'use client';

import {useState} from "react";

interface SelectMediaDialogProps {
    onClose: () => void;
    isOpen: boolean;
}

export default function SelectMediaDialog({ onClose, isOpen }: SelectMediaDialogProps) {
    const [activeTab, setActiveTab] = useState<'select' | 'upload'>('select');

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className="absolute inset-0 bg-gray-900 opacity-75"
                onClick={onClose}
            ></div>

            <div className="relative w-14/15 h-14/15 rounded-[20px] py-[30px] px-[40px] bg-white flex flex-col gap-4">
                <h1 className={'text-3xl font-prata'}>Select Media</h1>
                <div className={'flex gap-6'}>
                    <button className={`${activeTab === 'select' ? 'text-white bg-button-blue' : 'text-black bg-transparent hover:bg-gray-100 border-line-color border-1 cursor-pointer'} px-6 py-2.5 rounded-[15px] font-plus-jakarta-sans text-[18px]`}
                            onClick={() => setActiveTab('select')}>
                        Select Media
                    </button>
                    <button className={`${activeTab === 'upload' ? 'text-white bg-button-blue' : 'text-black bg-transparent hover:bg-gray-100 border-line-color border-1 cursor-pointer'} px-6 py-2.5 rounded-[15px] font-plus-jakarta-sans text-[18px]`}
                            onClick={() => setActiveTab('upload')}>
                        Upload Media
                    </button>
                </div>
            </div>
        </div>
    );
}

function SelectMediaTab() {
    return (
        <div className="flex flex-col h-full">

        </div>
    );
}

function UploadMediaTab() {
    return (
        <div className="flex flex-col h-full">

        </div>
    );
}