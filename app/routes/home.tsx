import { Hero } from "@/components/hero";
import { createMeta } from "@/fx/createMeta";

export function meta() {
  return createMeta({
    title: "Home"
  });
}

export default function Home() {
  return (
    <main className="dark bg-stone-950">
      <Hero />
    </main>
  );
}
