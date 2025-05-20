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
    <Card>
      <CardHeader>
        <CardTitle>{icon}</CardTitle>
        <CardDescription>{title}</CardDescription>
      </CardHeader>
      <CardContent>{description}</CardContent>
      <CardFooter>
        <Button variant="outline" onClick={btnAction}>
          {btnLabel}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FromsCard;
