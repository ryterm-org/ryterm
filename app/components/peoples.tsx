import {
    Card,
    CardContent,
    CardFooter,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { peoples } from "@/config/configs"

export function Peoples() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-24">
            <div className="mb-14 text-center">
                <h2 className="text-3xl font-semibold">Peoples</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                    Humans behind the code.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {peoples.map((person) => (
                    <Card
                        key={person.name}
                        className="flex h-full flex-col items-center text-center"
                    >
                        <div className="flex h-36 items-center justify-center pt-6">
                            {person.image && (
                                <img
                                    src={person.image}
                                    alt={person.name}
                                    className="h-28 w-28 rounded-full object-cover"
                                />
                            )}
                        </div>

                        <CardContent className="flex flex-1 flex-col items-center">
                            <CardTitle className="text-lg">
                                {person.name}
                            </CardTitle>

                            <p className="mt-2 min-h-[44px] text-sm text-muted-foreground">
                                {person.description}
                            </p>
                        </CardContent>

                        <CardFooter className="mt-auto flex flex-wrap justify-center gap-2 pb-6">
                            {person.buttons?.map((btn) => {
                                const Icon = btn.icon

                                return (
                                    <Button
                                        key={btn.label}
                                        asChild
                                        size="sm"
                                        variant={
                                            btn.style === "primary"
                                                ? "default"
                                                : btn.style
                                        }
                                        disabled={btn.disable}
                                    >
                                        <a
                                            href={btn.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2"
                                        >
                                            {Icon && (
                                                <Icon className="h-4 w-4" />
                                            )}
                                            {btn.label}
                                        </a>
                                    </Button>
                                )
                            })}
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    )
}
