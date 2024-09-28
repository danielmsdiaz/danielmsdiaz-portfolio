import DevImg from "./DevImg"
import Image from "next/image"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase } from "lucide-react"

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Daniel Diaz"
  },
  {
    icon: <MailIcon size={20} />,
    text: "dmachadosdiaz@gmail.com"
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Recife - PE"
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+55 (81) 98686-1345"
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Computer Engineering Student"
  },
  {
    icon: <Calendar size={20} />,
    text: "Born in 20 jan, 1999"
  },
  {
    icon: <Calendar size={20} />,
    text: "Born in 20 jan, 1999"
  },
];

const qualificationData = [
  {
    title: "Education",
    data: [
      {
        university: "Universidade de Pernambuco",
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
      }
    ]
  }
]

const skillData = [
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
        category: "Front-end",
        skills: ["React.js", "Next.js", "Tailwind CSS"]
      }
    ]
  }
]

const About = () => {
  return (
    <div>About</div>
  )
}

export default About