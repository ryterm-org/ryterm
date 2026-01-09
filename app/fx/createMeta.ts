export function createMeta({ title, description }: { title: string, description?: string }) {
    return [
        { title: `${title} | Ryterm Org.` },
        { name: "description", content: description ?? "The Ryterm Org a organization of open-source projects!" },
        { property: "og:title", content: `${title} | Ryterm Org.` },
        { name: "theme-color", content: "#fff" },
    ]
}