import { useState } from "react"
import { Button } from "@/components/ui/button";
import { Menu, Github } from "@mynaui/icons-react"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"

export function Navbar() {
    const [open, setOpen] = useState(false)

    const links = [
        { label: "Home", href: "/" },
        { label: "Projects", href: "/projects" },
        { label: "About", href: "/about" },
        { label: "Community", href: "/community" },
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">

                <div className="flex h-8 w-24 items-center justify-center rounded-md border border-border text-sm font-semibold">
                    Ryterm
                </div>


                <nav className="hidden items-center gap-6 text-sm md:flex">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <Button
                        asChild
                        variant="ghost"
                        size="icon"
                        className="hidden md:inline-flex"
                    >
                        <a
                            href="https://github.com/Ryterm"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <Github className="size-5" />
                        </a>
                    </Button>

                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden"
                                aria-label="Open menu"
                            >
                                <Menu className="size-5" />
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="right" className="w-72">
                            <nav className="flex flex-col gap-6 mt-10">
                                {links.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className="text-lg font-medium pl-5 text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                ))}

                                <a
                                    href="https://github.com/Ryterm"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 flex items-center gap-2 pl-5 text-muted-foreground hover:text-foreground"
                                    onClick={() => setOpen(false)}
                                >
                                    <Github className="size-5" />
                                    GitHub
                                </a>
                            </nav>
                        </SheetContent>
                    </Sheet>

                </div>
            </div>
        </header>
    )
}
