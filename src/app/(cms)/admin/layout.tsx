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
            <div className="flex h-screen w-screen bg-background">
                <NavigationBar/>
                <div className={'flex flex-col h-full justify-between w-full'}>
                    <CMSHeader/>
                    <main className="m-6 mt-4 flex-1 flex flex-col gap-4">
                        <Breadcrumb/>
                        <div className={'flex-1 overflow-y-auto bg-white rounded-lg shadow-md p-6 '}>
                            {children}
                        </div>
                    </main>
                    <CMSFooter/>
                </div>
            </div>
        </UIProvider>
    );
}