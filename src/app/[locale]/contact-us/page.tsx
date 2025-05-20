import Contacts from "@/components/contact-us/contacts";
import ContactsForm from "@/components/contact-us/contacts-forms";
import PageContiner from "@/components/ui/page-continer";

export default function ContactUsPage() {
  return (
    <PageContiner>
      <Contacts />
      <ContactsForm />
    </PageContiner>
  );
}
