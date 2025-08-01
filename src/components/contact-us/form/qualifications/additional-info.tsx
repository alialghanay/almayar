"use client";

import { useFormContext } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { Textarea } from "@/components/ui/textarea";

const AdditionalInfo = () => {
  const t = useTranslations(
    "FormPages.QualificationRequestForm.fields.additionalInfo"
  );
  const { control } = useFormContext();
  return (
    <div className="bg-card rounded-lg shadow-md pt-6 pb-4">
      <div className="flex flex-col gap-4">
        <h3 className="mx-4 text-xl font-semibold border-b pb-2">{t("title")}</h3>
      <FormField
        control={control}
        name="additionalInfo.productInfo"
        render={({ field }) => (
          <FormItem className="mx-6 flex flex-col">
            <FormLabel>{t("productInfo")}</FormLabel>
            <FormControl>
              <Textarea {...field} value={field.value || ""} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="additionalInfo.upload"
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        render={({ field: { onChange, value, ...field } }) => (
          <FormItem className="mx-6 flex flex-col">
            <FormLabel>{t("upload")}</FormLabel>
            <FormControl>
              <Input
                type="file"
                {...field}
                onChange={(e) => onChange(e.target.files?.[0] || null)}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      </div>
    </div>
  );
};

export default AdditionalInfo;
