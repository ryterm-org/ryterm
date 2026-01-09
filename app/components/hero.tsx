import { LightRays } from "./ui/light-rays"
import { Button } from "@/components/ui/button"
import { Archive, GithubSolid } from "@mynaui/icons-react";

export function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
            <LightRays
                count={6}
                speed={18}
                blur={56}
                color="rgba(255, 255, 255, 0.18)"
                length="85vh"
            />

            <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
                <h1 className="text-6xl font-semibold tracking-tight md:text-8xl poppins-semibold">
                    <span className="bg-linear-to-r from-white/90 to-white/50 bg-clip-text text-transparent">
                        Ryterm
                    </span>
                </h1>


                <p className="mt-6 text-muted-foreground md:text-lg">
                    No ads, no dark patterns. Just the roots of free and open source software.
                </p>

                <div className="mt-8 flex justify-center gap-9">
                    <Button size="lg" className="cursor-pointer" onClick={() => {
                        window.location.href = "/projects"
                    }}>
                        <Archive className="size-5" />
                        Projects
                    </Button>
                    <Button size="lg" variant="outline" className="cursor-pointer" onClick={() => {
                        window.location.href = "https://github.com/Ryterm"
                    }}>
                        <GithubSolid className="size-5" />
                        Github
                    </Button>
                </div>
            </div>
        </section>
    )
}
