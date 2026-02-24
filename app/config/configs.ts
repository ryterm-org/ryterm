import type { JSX } from "react";

import Kutter from "@/assets/projects/kutter.png";
import Aury from "@/assets/peoples/aury.png";
import Alice from "@/assets/peoples/alice.png";
import Takasaki from "@/assets/peoples/takasaki.png";
import Gabriel from "@/assets/peoples/gabriel.png";
import Noa from "@/assets/peoples/noa.png";

import { Circle, Github, GithubSolid, Instagram, TwitterSolid, Globe, XSolid, type MynaIconsProps } from "@mynaui/icons-react";
import { SiDiscord } from 'react-icons/si';
import type { IconType } from "react-icons/lib";

type MynaUi = (props: MynaIconsProps) => JSX.Element;
type ReactIcons = IconType;

type IconButtonType = ReactIcons | MynaUi;

export interface Buttons {
    label: string;
    style: "primary" | "secondary" | "outline" | "ghost";
    url: string;
    disable?: boolean;
    icon?: IconButtonType
}

export interface Project {
    name: string;
    description: string;
    buttons: Buttons[];
    image?: string;
    deprecated?: boolean;
}

export interface People {
    name: string;
    description: string;
    buttons?: Buttons[];
    image?: string;
}

export const projects: Project[] = [
    {
        name: "Kutter (Under Development)",
        description: "Communities-based chat application",
        buttons: [
            {
                label: "Source code - API",
                style: "outline",
                url: "https://github.com/ryterm/kutter_api",
                icon: Github
            },
        ],
        deprecated: false,
        image: Kutter
    }
]

export const peoples: People[] = [
    {
        name: "Aury",
        description: "Founder and BDFL, Full-Stack developer",
        image: Aury,
        buttons: [
            {
                label: "SourceHut",
                style: "primary",
                url: "https://git.sr.ht/~aury",
                icon: Circle
            },
            {
                label: "Blog",
                style: "outline",
                url: "https://aury.ryterm.xyz/blog",
                icon: Globe
            }
        ]
    },
    {
        name: "Vitor",
        description: "Contributor, Web developer",
        image: Vitor,
        button: [
            {
                label: "Website",
                style: "primery",
                url: "https://www.h4kv.com/",
                icon: Globe
            },
            {
                label: "Github",
                style: "outline",
                url: "https:/github.com/h411v/",
                icon: GithubSolid
            }
        ]
    },
    {
        name: "Alice",
        description: "Co-founder, Back-end developer",
        image: Alice,
        buttons: [
            {
                label: "Instagram",
                style: "primary",
                url: "https://instagram.com/crowzz97",
                icon: Instagram
            },
            {
                label: "X/Twitter",
                style: "outline",
                url: "https://x.com/crowzz97",
                icon: TwitterSolid
            }
        ]
    },
    {
        name: "Gabriel",
        description: "Contributor, Back-end developer and System Architect",
        image: Gabriel,
        buttons: [
            {
                label: "X/Twitter",
                style: "primary",
                url: "https://x.com/HexxedBR",
                icon: TwitterSolid
            },
            {
                label: "Instagram",
                style: "outline",
                url: "https://instagram/lock_hgabriel",
                icon: Instagram
            }
        ]
    },
    {
        name: "Noa",
        description: "Contributor, Fullstack developer",
        image: Noa,
        buttons: [
            {
                label: "Github",
                style: "primary",
                url: "https://github.com/noadevbr",
                icon: GithubSolid
            }
        ]
    }
]
