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

const OrganizationInfo = () => {
  const { control } = useFormContext();
  const t = useTranslations(
    "FormPages.QualificationRequestForm.fields.organizationInfo"
  );
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 ">
      <h3 className="mx-4 col-span-2 border-b pb-2">{t("title")}</h3>
      <FormField
        control={control}
        name="organizationInfo.name"
        render={({ field }) => (
          <FormItem className="mx-8 flex">
            <FormLabel className="whitespace-nowrap">{t("name")}</FormLabel>
            <FormControl>
              <Input {...field} value={field.value || ""} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="organizationInfo.address"
        render={({ field }) => (
          <FormItem className="mx-8 flex">
            <FormLabel className="whitespace-nowrap">{t("address")}</FormLabel>
            <FormControl>
              <Input {...field} value={field.value || ""} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="organizationInfo.phone"
        render={({ field }) => (
          <FormItem className="mx-8 flex">
            <FormLabel className="whitespace-nowrap">{t("phone")}</FormLabel>
            <FormControl>
              <Input {...field} value={field.value || ""} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="organizationInfo.email"
        render={({ field }) => (
          <FormItem className="mx-8 flex">
            <FormLabel className="whitespace-nowrap">{t("email")}</FormLabel>
            <FormControl>
              <Input {...field} value={field.value || ""} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="organizationInfo.location"
        render={({ field }) => (
          <FormItem className="mx-8 flex">
            <FormLabel className="whitespace-nowrap">{t("location")}</FormLabel>
            <FormControl>
              <Input {...field} value={field.value || ""} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default OrganizationInfo;
