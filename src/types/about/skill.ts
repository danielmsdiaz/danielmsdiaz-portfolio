export interface Skill {
    title: string;
    data: {
        category?: string;
        skills?: string[];
        imgPath?: string;
    }[];
}

export const skillData: Skill[] = [
    {
        title: "skills",
        data: [
            {
                category: "Front-end",
                skills: ["React.js", "Next.js", "Tailwind CSS"]
            },
            {
                category: "Back-end",
                skills: ["Node.js (Express.js)", "PHP (CodeIgniter)", "Java (Spring Boot)"]
            },
            {
                category: "Databases",
                skills: ["MySQL", "PostgreSQL", "MongoDB"]
            },
            {
                category: "Testing",
                skills: ["Jest"]
            },
            {
                category: "Miscellaneous",
                skills: ["TypeScript", "Scrum"]
            }
        ]
    },
    {
        title: "tools",
        data: [
            {
                imgPath: '/about/vscode3.svg',
            },
            {
                imgPath: '/about/js3.svg',
            },
            {
                imgPath: '/about/node3.svg',
            },
            {
                imgPath: '/about/php3.svg',
            },
            {
                imgPath: '/about/java3.svg',
            },
            {
                imgPath: '/about/react3.svg',
            },
            {
                imgPath: '/about/tailwind3.svg',
            },
            {
                imgPath: '/about/postgres.svg',
            },
        ]
    }
]