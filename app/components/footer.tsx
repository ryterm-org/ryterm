import { Button } from "@/components/ui/button"

export function Footer() {
    return (
        <footer className="w-full flex justify-center items-center">
            <div className="m-2 flex w-full max-w-7xl flex-col-reverse items-center justify-evenly gap-4 rounded-xl border border-neutral-300 p-4 dark:border-neutral-700 sm:flex-row">
                <div className="flex flex-col items-center justify-center text-center">
                    <h5 className="text-sm text-muted-foreground">
                        Made with love by{" "}
                        <Button
                            asChild
                            variant="link"
                            className="px-1"
                        >
                            <a
                                href="https://github.com/noadevbr"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Noa
                            </a>
                        </Button>
                        !
                    </h5>
                </div>

                <nav className="flex flex-col items-center gap-1">
                    <Button asChild variant="ghost" size="sm">
                        <a href="/">Home</a>
                    </Button>

                    <Button asChild variant="ghost" size="sm">
                        <a href="/projects">Projects</a>
                    </Button>

                    <Button asChild variant="ghost" size="sm">
                        <a href="/about">Who we are</a>
                    </Button>

                    <Button
                        asChild
                        variant="ghost"
                        size="sm"
                    >
                        <a
                            href="https://github.com/Ryterm"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </Button>

                    <Button
                        asChild
                        variant="ghost"
                        size="sm"
                    >
                        <a
                            href="https://www.patreon.com/15004923/join"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Support us
                        </a>
                    </Button>
                </nav>
            </div>
        </footer>
    )
}
