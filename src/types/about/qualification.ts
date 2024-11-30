export interface Qualification {
    title: string;
    data: {
        company?: string;
        university?: string;
        qualification?: string;
        years?: string;
    }[];
}

export const qualificationData: Qualification[] = [
    {
        title: "Education",
        data: [
            {
                university: "UPE",
                qualification: "Bachelor's degree in Computer Engineering",
                years: "2018 - present"
            }
        ]
    },
    {
        title: "Experience",
        data: [
            {
                company: "Leve Tecnologia",
                qualification: "Full Stack Intern",
                years: "2020 - 2021"
            },
            {
                company: "Nexus Branch",
                qualification: "Freelancer",
                years: "2024 - Present"
            }
        ]
    }
];