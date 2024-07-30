import NavLinkProducts from "@/components/dashboard/products/NavLinkProducts";

export default function RootLayout({ children }) {
  return (
    <section className="grid gap-4 ">
      <NavLinkProducts />

      {children}
    </section>
  );
}
