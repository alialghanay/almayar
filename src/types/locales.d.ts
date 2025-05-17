declare module "local" {
  type lang = "en" | "ar";
  type PageKeys =
    | "HomePage"
    | "CertificatesPage"
    | "ServicesPage"
    | "ContactUsPage"
    | "TrainingServicesPage"
    | "QualificationServicesPage";

  type Messages = {
    [P in PageKeys]: {
      [K in string]: string;
    };
  };
}
