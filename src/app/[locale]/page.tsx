import Banner from "@/components/home/banner";
import Journey from "@/components/home/journey";
import Partners from "@/components/home/partners";
import Services from "@/components/home/services";
import PageContiner from "@/components/ui/page-continer";

export default function HomePage() {
  return (
    <PageContiner>
      <Banner />
      <Journey />
      <Services />
      <Partners />
    </PageContiner>
  );
}
