import Contacts from "@/components/contact-us/contacts";
import ContactsForm from "@/components/contact-us/contacts-forms";
import FormContianer from "@/components/contact-us/form/form-container";
import PageContiner from "@/components/ui/page-continer";

export default function FormPage() {
  return (
    <PageContiner>
      <section className="bg-[#F6F6F6]">
        <FormContianer />
      </section>
    </PageContiner>
  );
}
