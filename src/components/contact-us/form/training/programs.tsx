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
import { locationOptions } from "@/lib/validators/training-schema";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Plus, Trash } from "lucide-react";

const Programs = ({
  index,
  addProgram,
  removeProgram,
}: {
  index: number;
  addProgram: () => void;
  removeProgram: () => void;
}) => {
  const t = useTranslations("FormPages.TrainingNeedsForm.fields");
  const { control } = useFormContext();
  return (
    <div className="flex gap-4">
      <FormField
        control={control}
        name={`programs.${index}.name`}
        render={({ field }) => (
          <FormItem className="mx-8 flex">
            <FormLabel>{t("programName")}</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`programs.${index}.preferredTime`}
        render={({ field }) => (
          <FormItem className="mx-8 flex">
            <FormLabel>{t("preferredTime")}</FormLabel>
            <FormControl>
              <Input {...field} type="time" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`programs.${index}.location`}
        render={({ field }) => (
          <FormItem className="mx-8 flex">
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex space-x-1"
              >
                {locationOptions.map((option) => (
                  <FormItem
                    key={option}
                    className="flex items-center space-x-2"
                  >
                    <FormLabel htmlFor={option} className="text-sm">
                      {t(`location.${option}`)}
                    </FormLabel>
                    <RadioGroupItem value={option} id={option} />
                  </FormItem>
                ))}
              </RadioGroup>
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
          addProgram();
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
            removeProgram();
          }}
        >
          <Trash className="size-4" />
        </Button>
      )}
    </div>
  );
};

export default Programs;
