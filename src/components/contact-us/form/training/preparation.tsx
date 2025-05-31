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

const Preparation = () => {
  const { control } = useFormContext();
  const t = useTranslations("FormPages.TrainingNeedsForm.fields.preparation");
  return (
    <form className="flex flex-col gap-4">
      <h3 className="mb-4">{t("title")}</h3>
      <FormField
        control={control}
        name="organizationName"
        render={({ field }) => (
          <FormItem className="mx-8 flex">
            <FormLabel>{t("organizationName")}</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="notes"
        render={({ field }) => (
          <FormItem className="mx-8 flex">
            <FormLabel>{t("notes")}</FormLabel>
            <FormControl>
              <Textarea {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </form>
  );
};

export default Preparation;
