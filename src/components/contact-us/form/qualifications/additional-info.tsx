"use client";

import { useFormContext } from "react-hook-form";

import {
  FormControl,
  FormDescription,
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
    <form className="flex flex-col gap-4 ">
      <h3 className="mx-4 border-b pb-2">{t("title")}</h3>
      <FormField
        control={control}
        name="productInfo"
        render={({ field }) => (
          <FormItem className="mx-8 flex">
            <FormLabel>{t("productInfo")}</FormLabel>
            <FormControl>
              <Textarea {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="upload"
        render={({ field }) => (
          <FormItem className="mx-8 flex">
            <FormLabel>{t("upload")}</FormLabel>
            <FormControl>
              <Input type="file" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </form>
  );
};

export default AdditionalInfo;
