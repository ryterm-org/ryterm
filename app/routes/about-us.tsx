import { Peoples } from "@/components/peoples";
import { createMeta } from "@/fx/createMeta";

export function meta() {
    return createMeta({
        title: "About Us"
    });
}

export default function AboutUS() {
    return (
        <main>
            <section className="mb-20 text-center mt-12">
                <h1 className="text-4xl font-semibold tracking-tight">
                    Who we are
                </h1>

                <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
                    We are not a company. We are a community.
                    <br />
                    United by free and open source software.
                    <br />
                    Real. Honest. Ours.
                </p>
            </section>

            <Peoples />
        </main>
    )
}