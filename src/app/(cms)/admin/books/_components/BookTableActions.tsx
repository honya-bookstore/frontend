'use client';

import Icon from "@/components/Icon";

export default function BookTableActions() {
    return (
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
    );
}