import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

interface SubmitButtonProps {
  isSubmitting: boolean;
}

const SubmitButton = ({ isSubmitting }: SubmitButtonProps) => {
  const t = useTranslations("FormPages.QualificationRequestForm");

  return (
    <div className="flex justify-center mt-8">
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full max-w-md px-8 py-3"
        size="lg"
      >
        {isSubmitting ? t("notifications.submitting") : t("submit.btn")}
      </Button>
    </div>
  );
};

export default SubmitButton;
