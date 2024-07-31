
import "../../globals.css";
import SideBar from "@/components/dashboard/common/SideBar";
import { EcommerceProvider } from "@/context/ContextEcommerce";
// import Validate from "@/components/dashboard/common/Validate";


export const metadata = {
  title: "Sneakers",
  description: "Sneakers",
};

export default function RootLayout({ children }) {
  return (
    <EcommerceProvider>
      <html lang="en">
        <body className="bg-zinc-100 dark:bg-zinc-950 text-zinc-400 ">
          <SideBar />
          {/* <Validate/> */}
          <main className=" pt-20 px-4  md:pr-8 md:pl-64  ">{children}</main>
        </body>
      </html>
    </EcommerceProvider>
  );
}
