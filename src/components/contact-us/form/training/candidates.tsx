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
import { Button } from "@/components/ui/button";
import { Plus, Trash } from "lucide-react";

const Candidates = ({
  index,
  addCandidates,
  removeCandidates,
}: {
  index: number;
  addCandidates: () => void;
  removeCandidates: () => void;
}) => {
  const t = useTranslations("FormPages.TrainingNeedsForm.fields");
  const { control } = useFormContext();
  return (
    <div className="flex gap-4 ">
      <FormField
        control={control}
        name={`candidates.${index}.name`}
        render={({ field }) => (
          <FormItem className="mx-8 flex">
            <FormLabel>{t("name")}</FormLabel>
            <FormControl>
              <Input {...field} value={field.value || ""} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`candidates.${index}.department`}
        render={({ field }) => (
          <FormItem className="mx-8 flex">
            <FormLabel>{t("department")}</FormLabel>
            <FormControl>
              <Input {...field} value={field.value || ""} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`candidates.${index}.program`}
        render={({ field }) => (
          <FormItem className="mx-8 flex">
            <FormLabel>{t("program")}</FormLabel>
            <FormControl>
              <Input {...field} value={field.value || ""} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button
        size="icon"
        variant="default"
        onClick={(e) => {
          e.preventDefault();
          addCandidates();
        }}
      >
        <Plus className="size-4" />
      </Button>
      {index > 0 && (
        <Button
          size="icon"
          variant="destructive"
          onClick={(e) => {
            e.preventDefault();
            removeCandidates();
          }}
        >
          <Trash className="size-4" />
        </Button>
      )}
    </div>
  );
};

export default Candidates;
