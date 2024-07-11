import PersonalInformation from "@/components/ecommerce/profile/PersonalInformation";

export default function RootLayout({ children }) {
  return <section>
    <PersonalInformation/>
    
    {children}</section>;
}
