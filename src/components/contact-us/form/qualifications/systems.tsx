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

import { Checkbox } from "@/components/ui/checkbox";
import { systems } from "@/lib/validators/qualifications-schema";
import { useTranslations } from "next-intl";

const Systems = () => {
  const { control } = useFormContext();
  const title = "FormPages.QualificationRequestForm.fields.systems";
  const options = "FormPages.QualificationRequestForm.fields.systems.options";
  const t = useTranslations(options);
  const tTitle = useTranslations(title);
  return (
    <form className="grid grid-cols-1 sm:grid-cols-4 gap-y-4 ">
      <h3 className="mx-4 col-span-4 border-b pb-2">{tTitle("title")}</h3>
      {systems.map((system) => (
        <FormField
          key={system}
          control={control}
          name="systems"
          render={({ field }) => (
            <FormItem className="mx-8 flex items-center">
              <FormControl>
                <Checkbox
                  checked={field.value?.includes(system)}
                  onCheckedChange={(checked) => {
                    return checked
                      ? field.onChange([...field.value, system])
                      : field.onChange(
                          field.value?.filter(
                            (value: string) => value !== system
                          )
                        );
                  }}
                />
              </FormControl>
              <FormLabel>{t(system)}</FormLabel>

              <FormMessage />
            </FormItem>
          )}
        />
      ))}
    </form>
  );
};

export default Systems;
