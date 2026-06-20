import PageBanner from "../components/layout/PageBanner";
import ContactForm from "../components/Contactpage/ContactForm";
import OurOffices from "../components/Contactpage/OurOffices";

export default function ContactUs() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <PageBanner 
        title="Contact Us" 
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Contact Us" }
        ]} 
      />
      
      <ContactForm />
      <OurOffices />
    </main>
  );
}
