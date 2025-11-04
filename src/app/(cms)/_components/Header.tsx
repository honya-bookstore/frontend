'use client';
import Icon from "@/components/Icon";
import {useUI} from "@/app/(cms)/_context/UIContext";

//TODO: Add functionality to the icons (collapse sidebar, logout)
export default function CMSHeader() {
    const { setNavCollapsed } = useUI();

    return (
        <header className="w-full h-[100px] bg-white flex items-center px-6 py-4 shadow-xs justify-between">
            <div onClick={() => setNavCollapsed(prev => !prev)} className="cursor-pointer">
                <Icon name={'collapse-left'} size={30}/>
            </div>
            <div className="flex items-center justify-center gap-8">
                <div className={'w-[50px] h-[50px] rounded-full bg-cover bg-center'}
                     style={{backgroundImage: `url('/images/avatarPlaceholder.png')`}}/>
                <Icon name={'logout'} size={30} className="cursor-pointer"/>
            </div>
        </header>
    );
}