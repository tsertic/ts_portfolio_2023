import { HeroIntro } from "@/components/pageSections/homepage";
import { ReadMoreCta } from "@/components/pageSections/homepage/ReadMoreCta";

export default function Home() {
  return (
    <main className="container-wide page-top-padding">
      <section className="  mb-[80px]">
        <HeroIntro />
        <ReadMoreCta />
      </section>
    </main>
  );
}
