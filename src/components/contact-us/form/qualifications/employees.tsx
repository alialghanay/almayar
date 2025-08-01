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

const Employees = () => {
  const t = useTranslations(
    "FormPages.QualificationRequestForm.fields.employees.fields"
  );
  const tTitle = useTranslations(
    "FormPages.QualificationRequestForm.fields.employees"
  );
  const tDescription = useTranslations(
    "FormPages.QualificationRequestForm.fields.employees"
  );
  const { control } = useFormContext();
  return (
    <div className="bg-card rounded-lg shadow-md pt-6 pb-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4">
        <h3 className="mx-4 col-span-4 text-xl font-semibold">
          {tTitle("title")}
        </h3>
        <p className="mx-4 col-span-4 border-b pb-2 text-sm text-gray-600">
          {tDescription("description")}
        </p>
        <FormField
          control={control}
          name="employees.management"
          render={({ field }) => (
            <FormItem className="mx-6 flex flex-col">
              <FormLabel>{t("management")}</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="0"
                  {...field}
                  value={field.value || 0}
                  onChange={(e) =>
                    field.onChange(parseInt(e.target.value) || 0)
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="employees.qualityDept"
          render={({ field }) => (
            <FormItem className="mx-6 flex flex-col">
              <FormLabel>{t("qualityDept")}</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="0"
                  {...field}
                  value={field.value || 0}
                  onChange={(e) =>
                    field.onChange(parseInt(e.target.value) || 0)
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="employees.workers"
          render={({ field }) => (
            <FormItem className="mx-6 flex flex-col">
              <FormLabel>{t("workers")}</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="0"
                  {...field}
                  value={field.value || 0}
                  onChange={(e) =>
                    field.onChange(parseInt(e.target.value) || 0)
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="employees.other"
          render={({ field }) => (
            <FormItem className="mx-6 flex flex-col">
              <FormLabel>{t("other")}</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="0"
                  {...field}
                  value={field.value || 0}
                  onChange={(e) =>
                    field.onChange(parseInt(e.target.value) || 0)
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="employees.branchesCount"
          render={({ field }) => (
            <FormItem className="mx-6 flex flex-col">
              <FormLabel>{t("branchesCount")}</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="0"
                  {...field}
                  value={field.value || 0}
                  onChange={(e) =>
                    field.onChange(parseInt(e.target.value) || 0)
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="employees.branchName"
          render={({ field }) => (
            <FormItem className="mx-6 flex flex-col">
              <FormLabel>{t("branchName")}</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter branch name"
                  {...field}
                  value={field.value || ""}
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

export default Employees;
