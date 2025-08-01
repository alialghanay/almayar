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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useComplaintFormSubmission } from "@/hooks/use-form-submission";
import { useState } from "react";
import { CheckCircleIcon, AlertCircleIcon } from "lucide-react";

const ComplaintForm = () => {
  const t = useTranslations("FormPages.ComplaintForm");
  const [notification, setNotification] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const { isSubmitting, submitForm } = useComplaintFormSubmission();

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

  const onSubmit = async (data: ComplaintFormSchema) => {
    const result = await submitForm(data);

    if (result.success) {
      setNotification({
        type: "success",
        message: t("notifications.success"),
      });
      form.reset();
    } else {
      setNotification({
        type: "error",
        message: result.message,
      });
    }

    // Auto-hide notification after 5 seconds
    setTimeout(() => setNotification(null), 5000);
  };

  return (
    <article>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1 sm:grid-cols-2 gap-y-4"
        >
          <h2 className="mx-4 col-span-2 border-b pb-2">{t("title")}</h2>

          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="mx-8 flex flex-col">
                <FormLabel>{t("fields.type")}</FormLabel>
                <FormControl>
                  <select
                    {...field}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="consultation">
                      {t("fields.typeOptions.consultation")}
                    </option>
                    <option value="training">
                      {t("fields.typeOptions.training")}
                    </option>
                    <option value="qualification">
                      {t("fields.typeOptions.qualification")}
                    </option>
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="mx-8 flex flex-col">
                <FormLabel>{t("fields.firstName")}</FormLabel>
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
              <FormItem className="mx-8 flex flex-col">
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
            name="job"
            render={({ field }) => (
              <FormItem className="mx-8 flex flex-col">
                <FormLabel>{t("fields.job")}</FormLabel>
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
              <FormItem className="mx-8 flex flex-col">
                <FormLabel>{t("fields.email")}</FormLabel>
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
              <FormItem className="mx-8 flex flex-col">
                <FormLabel>{t("fields.phone")}</FormLabel>
                <FormControl>
                  <Input type="tel" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="complaintSubject"
            render={({ field }) => (
              <FormItem className="mx-8 flex flex-col col-span-2">
                <FormLabel>{t("fields.complaintSubject")}</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    rows={4}
                    placeholder={t("fields.complaintSubjectPlaceholder")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="col-span-2 flex justify-center mt-8">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full max-w-md px-8 py-3"
              size="lg"
            >
              {isSubmitting ? t("notifications.submitting") : t("submit.btn")}
            </Button>
          </div>

          {notification && (
            <div className="col-span-2 mx-8">
              {notification.type === "success" ? (
                <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-md">
                  <CheckCircleIcon className="h-4 w-4" />
                  <span className="text-sm">{notification.message}</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-md">
                  <AlertCircleIcon className="h-4 w-4" />
                  <span className="text-sm">{notification.message}</span>
                </div>
              )}
            </div>
          )}
        </form>
      </Form>
    </article>
  );
};

export default ComplaintForm;
