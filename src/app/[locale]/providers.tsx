import { NextIntlClientProvider } from "next-intl";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <NextIntlClientProvider>{children}</NextIntlClientProvider>;
};

export default Providers;
