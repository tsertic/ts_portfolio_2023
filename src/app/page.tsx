import { HeroIntro } from "@/components/pageSections/homepage";
import { ReadMoreCta } from "@/components/pageSections/homepage/ReadMoreCta";

export default function Home() {
  return (
    <main className="container-wide page-padding">
      <section>
        <HeroIntro />
        <ReadMoreCta />
      </section>
    </main>
  );
}
