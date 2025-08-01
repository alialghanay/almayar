"use client";

import { useFormContext } from "react-hook-form";

import {
  FormControl,
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
    <div className="bg-card rounded-lg shadow-md pt-6 pb-4">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-y-4">
        <h3 className="mx-4 col-span-4 text-xl font-semibold border-b pb-2">
          {tTitle("title")}
        </h3>
        {systems.map((system) => (
          <FormField
            key={system}
            control={control}
            name="systems"
            render={({ field }) => (
              <FormItem className="mx-8 flex flex-col">
                <div className="flex items-center space-x-2">
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
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default Systems;
