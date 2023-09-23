import { NoiseBgPattern } from "@/components/esthetics/NoiseBgPattern";
import { HeroIntro } from "@/components/pageSections/homepage";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container-wide">
        <section>
          <HeroIntro />
        </section>
      </div>
    </main>
  );
}
