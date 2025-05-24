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

const Employees = () => {
  const t = useTranslations(
    "FormPages.QualificationRequestForm.fields.employees.fields"
  );
  const { control } = useFormContext();
  return (
    <form className="bg-card rounded-lg shadow-md grid grid-cols-1 sm:grid-cols-2 gap-y-4 pt-6 pb-4">
      <FormField
        control={control}
        name="management"
        render={({ field }) => (
          <FormItem className="mx-8 flex">
            <FormLabel>{t("management")}</FormLabel>
            <FormControl>
              <Input type="number" placeholder="0" {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="qualityDept"
        render={({ field }) => (
          <FormItem className="mx-8 flex">
            <FormLabel>{t("qualityDept")}</FormLabel>
            <FormControl>
              <Input type="number" placeholder="0" {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="workers"
        render={({ field }) => (
          <FormItem className="mx-8 flex">
            <FormLabel>{t("workers")}</FormLabel>
            <FormControl>
              <Input type="number" placeholder="0" {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="other"
        render={({ field }) => (
          <FormItem className="mx-8 flex">
            <FormLabel>{t("other")}</FormLabel>
            <FormControl>
              <Input type="number" placeholder="0" {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="branchesCount"
        render={({ field }) => (
          <FormItem className="mx-8 flex">
            <FormLabel>{t("branchesCount")}</FormLabel>
            <FormControl>
              <Input type="number" placeholder="0" {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="branchName"
        render={({ field }) => (
          <FormItem className="mx-8 flex">
            <FormLabel>{t("branchName")}</FormLabel>
            <FormControl>
              <Input placeholder="Enter branch name" {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
    </form>
  );
};

export default Employees;
