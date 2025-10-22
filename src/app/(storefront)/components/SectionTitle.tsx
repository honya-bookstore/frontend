interface SectionTitleProps{
    title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
    return (
        <div className={'flex items-center w-fit justify-between gap-4'}>
            <div className={'w-128 border-1 border-line-color'}></div>
            <span className={'text-[40px] font-prata'}>{title}</span>
            <div className={'w-128 border-1 border-line-color'}></div>
        </div>
    )
}