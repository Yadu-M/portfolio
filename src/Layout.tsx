import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto flex min-h-screen max-w-4xl flex-col gap-6 p-6 px-4">
      <Header />
        <main className="flex-1 space-y-16">{children}</main>
      <Footer />
    </div>
  );
};
