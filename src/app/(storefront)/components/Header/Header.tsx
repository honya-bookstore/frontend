import Image from "next/image";


export default function Header() {
    return (
        <header className={'min-w-screen flex flex-col items-start'}>
            <Image src={'/logo.svg'} alt="Storefront Logo" width={121} height={32} />

            <h1>Welcome to My Storefront</h1>
        </header>
    );
}