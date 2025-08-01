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
    <div className="bg-card rounded-lg shadow-md pt-6 pb-4">
      <div className="flex flex-col gap-4">
        <h3 className="mx-4 text-xl font-semibold border-b pb-2">
          {t("title")}
        </h3>
        <FormField
          control={control}
          name="preparation.organizationName"
          render={({ field }) => (
            <FormItem className="mx-6 flex flex-col">
              <FormLabel>{t("organizationName")}</FormLabel>
              <FormControl>
                <Input {...field} value={field.value || ""} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="preparation.notes"
          render={({ field }) => (
            <FormItem className="mx-6 flex flex-col">
              <FormLabel>{t("notes")}</FormLabel>
              <FormControl>
                <Textarea {...field} value={field.value || ""} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default Preparation;
