import Overview from "@/components/overview"
import Skill from "@/components/skill";
import Project from "@/components/project";
import Footer from "@/components/footer";

import ScrollSpy from "@/components/scroll-spy";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollSpy />
      <Overview />
      <Skill />
      <Project />
      <Footer />
    </main>
  );
}
