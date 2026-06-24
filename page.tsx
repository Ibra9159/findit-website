import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import {
  HowItWorks,
  ExampleRequests,
  Features,
  Categories,
  WhyFindit,
  About,
  Founder,
  BetaCTA,
  Contact,
  BuiltInJordan,
  Footer,
} from "@/components/Sections";

export default function Page() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <HowItWorks />
      <ExampleRequests />
      <Features />
      <Categories />
      <WhyFindit />
      <About />
      <Founder />
      <BetaCTA />
      <Contact />
      <BuiltInJordan />
      <Footer />
    </main>
  );
}
