import Icon from "@/components/Icon";
import ShippingInformation from "@/app/(storefront)/checkout/_components/ShippingInformation";
import Link from "next/link";
import Button from "@/components/Button";
import OrderSummary from "@/app/(storefront)/checkout/_components/OrderSummary";

export default function CheckoutPageLayout({ children } : { children: React.ReactNode }) {
    return (
        <main className={'flex flex-col items-center justify-start gap-8 py-20 w-2/3'}>
            <header className={'flex flex-col gap-4 w-full'}>
                <span className={'font-prata text-[28px] w-full'}>
                Checkout
            </span>
                <div className={'flex w-full items-center font-prata text-[20px] gap-2'}>
                    <div
                        className={'text-center flex items-center justify-center aspect-square rounded-full bg-black text-white w-10 align-middle'}>
                        1
                    </div>
                    Shipping
                    <Icon name={"right-arrow"} className={'h-6 w-6'}/>
                    <div
                        className={'text-center flex items-center justify-center aspect-square rounded-full bg-black text-white w-10 align-middle'}>
                        2
                    </div>
                    Payment
                </div>
            </header>
            <div className={'flex items-start justify-between w-full gap-10'}>
                { children }
                <OrderSummary/>
            </div>
        </main>
    )
}