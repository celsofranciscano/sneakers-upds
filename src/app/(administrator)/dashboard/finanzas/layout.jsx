import NavLinkFinance from "@/components/dashboard/finance/NavLinkFinance";
export default function RootLayout({ children }) {
  return (
    <section className="grid gap-4">
      <NavLinkFinance />
      {children}
    </section>
  );
}
