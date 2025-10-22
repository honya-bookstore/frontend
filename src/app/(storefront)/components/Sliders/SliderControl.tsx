import { Icon } from '@iconify/react';

interface SliderControlProps {
    direction: 'left' | 'right';
    onClick: () => void;
}


export default function SliderControl({ direction, onClick }: SliderControlProps) {
    return (
        <button
            onClick={onClick}
            className={`
                bg-white bg-opacity-0 hover:bg-opacity-100 
                rounded-full p-2 shadow-md 
                ${direction === 'left' ? 'mr-2' : 'ml-2'}
            `}>
            <Icon
                icon={direction === 'left' ? 'mdi:chevron-left' : 'mdi:chevron-right'}
                width={24}
                height={24}
            />
        </button>
    )
}