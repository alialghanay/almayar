import { useForm } from "react-hook-form";
import {
  ComplaintFormSchema,
  complaintFormSchema,
} from "@/lib/validators/complaint-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
const ComplaintForm = () => {
  const t = useTranslations("FormPages.ComplaintForm");
  const form = useForm<ComplaintFormSchema>({
    resolver: zodResolver(complaintFormSchema),
    defaultValues: {
      formType: "Complaint Form",
      type: "consultation",
      firstName: "",
      lastName: "",
      job: "",
      email: "",
      phone: "",
      complaintSubject: "",
    },
  });
  return (
    <article>
      <Form {...form}>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-y-4">
          <h2 className="mx-4 col-span-2 border-b pb-2">{t("title")}</h2>
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="mx-8 flex">
                <FormLabel>{t("fields.lastName")}</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="mx-8 flex">
                <FormLabel>{t("firstName.label")}</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="mx-8 flex">
                <FormLabel>{t("lastName.label")}</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="job"
            render={({ field }) => (
              <FormItem className="mx-8 flex">
                <FormLabel>{t("job.label")}</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mx-8 flex">
                <FormLabel>{t("email.label")}</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem
                className="mx
-8 flex"
              >
                <FormLabel>{t("phone.label")}</FormLabel>
                <FormControl>
                  <Input type="tel" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </article>
  );
};

export default ComplaintForm;
