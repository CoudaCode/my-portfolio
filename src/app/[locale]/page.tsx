import { Contact } from "./home/_components/Contact";
import { Footer } from "./home/_components/Footer";
import { Header } from "./home/_components/Header";
import { Hero } from "./home/_components/Hero";
import { Skills } from "./home/_components/Skills";
import { Spacing } from "./home/_components/Spacing";
import { Status } from "./home/_components/StatusSection";

export default function Home() {
  return (
    <main>
      <Header />
      <Spacing size="md" />
      <Hero />
      <Spacing size="md" />
      <Status />
      <Spacing size="md" />
      <Skills />
      <Spacing size="md" />
      <Contact />
      <Spacing size="md" />
      <Footer />
    </main>
  );
}
