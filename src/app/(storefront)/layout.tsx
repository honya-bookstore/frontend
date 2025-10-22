import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function StorefrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen mx-auto w-screen">
        <div className="flex-grow">
            <Header/>
            <main className="">{children}</main>
        </div>
        <Footer/>
    </div>
  );
}