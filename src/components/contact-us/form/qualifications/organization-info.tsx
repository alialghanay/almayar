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

const OrganizationInfo = () => {
  const { control } = useFormContext();
  const t = useTranslations(
    "FormPages.QualificationRequestForm.fields.organizationInfo"
  );
  return (
    <form className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 ">
      <h3 className="mx-4 col-span-2 border-b pb-2">{t("title")}</h3>
      <FormField
        control={control}
        name="name"
        render={({ field }) => (
          <FormItem className="mx-8 flex">
            <FormLabel className="whitespace-nowrap">{t("name")}</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="address"
        render={({ field }) => (
          <FormItem className="mx-8 flex">
            <FormLabel className="whitespace-nowrap">{t("address")}</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="phone"
        render={({ field }) => (
          <FormItem className="mx-8 flex">
            <FormLabel className="whitespace-nowrap">{t("phone")}</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="email"
        render={({ field }) => (
          <FormItem className="mx-8 flex">
            <FormLabel className="whitespace-nowrap">{t("email")}</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="location"
        render={({ field }) => (
          <FormItem className="mx-8 flex">
            <FormLabel className="whitespace-nowrap">{t("location")}</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </form>
  );
};

export default OrganizationInfo;
