import NavLinkShipments from "@/components/dashboard/shipments/NavLinkShipments";
export default function RootLayout({ children }) {
  return (
    <section className="grid gap-4">

      <NavLinkShipments />
   
      {children}
    </section>
  );
}
