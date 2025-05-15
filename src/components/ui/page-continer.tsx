import Footer from "./footer";
import Header from "./header";

const PageContiner = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-screen min-h-screen">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default PageContiner;
