import Header from "@/app/(storefront)/_components/Header/Header";
import Footer from "@/app/(storefront)/_components/Footer/Footer";
import {CartContextProvider} from "@/app/(storefront)/_context/CartContext";
import { Toaster } from "sonner";

export default function StorefrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <CartContextProvider>
          <div className="flex flex-col min-h-screen mx-auto w-full">
              <Toaster position="bottom-right" richColors />
              <div className="flex-grow">
                  <Header/>
                  <div className={'flex flex-col items-center'}>
                        {children}
                  </div>
              </div>
              <Footer/>
          </div>
      </CartContextProvider>
  );
}