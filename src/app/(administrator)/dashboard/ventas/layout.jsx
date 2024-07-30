import NavLinkSales from "@/components/dashboard/sales/NavLinkSales";
export default function RootLayout({ children }) {
  return (
    <section className="grid gap-4">
     <NavLinkSales/>
      {children}
    </section>
  );
}
