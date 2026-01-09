import { ProjectsCards } from "@/components/projects"
import { createMeta } from "@/fx/createMeta";

export function meta() {
    return createMeta({
        title: "Projects"
    });
}

export default function Projects() {
    return (
        <main>
            <ProjectsCards />
        </main>
    )
}