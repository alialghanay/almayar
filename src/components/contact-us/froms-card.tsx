"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ReactNode } from "react";
import { Button } from "../ui/button";

interface FromsCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  btnLabel: string;
  btnAction: () => void;
}

const FromsCard = ({
  icon,
  title,
  btnLabel,
  description,
  btnAction,
}: FromsCardProps) => {
  return (
    <Card className="max-w-[300px] bg-blue-900 text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle>{icon}</CardTitle>
        <CardDescription className="text-lg sm:text-xl md:text-2xl font-bold text-white">
          {title}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-base sm:text-lg md:text-xl text-white text-center py-8">
        {description}
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button variant="outline" onClick={btnAction} className="text-black">
          {btnLabel}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FromsCard;
