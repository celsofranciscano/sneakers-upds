import { Inter } from "next/font/google";
import "../globals.css";
import { EcommerceProvider } from "@/context/ContextEcommerce";
import SideBar from "@/components/ecommerce/common/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sneakers",
  description: "Sneakers",
};

export default function RootLayout({ children }) {
  return (
    <EcommerceProvider>
      <html lang="en">
        <body className=" bg-zinc-100">
          <SideBar />
          <main className="px-2 pt-20 md:px-8 lg:px-20 ">{children}</main>
        </body>
      </html>
    </EcommerceProvider>
  );
}
