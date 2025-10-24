import Header from "@/app/(storefront)/_components/Header/Header";
import Footer from "@/app/(storefront)/_components/Footer/Footer";
import {CartContextProvider} from "@/app/(storefront)/_context/CartContext";

export default function StorefrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <CartContextProvider>
          <div className="flex flex-col min-h-screen mx-auto w-full">
              <div className="flex-grow">
                  <Header/>
                  {children}
              </div>
              <Footer/>
          </div>
      </CartContextProvider>
  );
}