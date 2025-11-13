import NavigationBar from "@/app/(cms)/_components/NavigationBar";
import CMSHeader from "@/app/(cms)/_components/Header";
import {UIProvider} from "@/app/(cms)/_context/UIContext";
import CMSFooter from "@/app/(cms)/_components/Footer";
import Breadcrumb from "@/app/(storefront)/_components/Breadcrumb/Breadcrumb";

export default function CMSLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <UIProvider>
            <div className="flex h-screen w-screen overflow-hidden bg-background">
                <NavigationBar/>
                <div className={'flex flex-col justify-between w-full h-full'}>
                    <CMSHeader/>
                    <div className={'mt-4 ml-6'}>
                        <Breadcrumb/>
                    </div>
                    <main className="m-6 mt-4 flex-1 flex flex-col gap-4 overflow-y-auto">
                        <div className={'overflow-y-scroll bg-white rounded-lg shadow-md p-6 min-h-full'}>
                            {children}
                        </div>
                    </main>
                    <CMSFooter/>
                </div>
            </div>
        </UIProvider>
    );
}