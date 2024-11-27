"use client"

import { useTranslation } from 'react-i18next';
import Hellow from "./Hellow"

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
    icon: <GraduationCap size={20} />,
    text: "Computer Engineering Student"
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+55 (81) 98686-1345"
  },
  {
    icon: <Calendar size={20} />,
    text: "Born in 20 jan, 1999"
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Recife - PE"
  }
];

interface Qualification {
  title: string;
  data: {
    company?: string;
    university?: string;
    qualification?: string;
    years?: string;
  }[];
}

interface Skill {
  title: string;
  data: {
    category?: string;
    skills?: string[];
    imgPath?: string;
  }[];
}

const qualificationData: Qualification[] = [
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

const skillData: Skill[] = [
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

const About = () => {
  const { t, i18n } = useTranslation("global");

  const getData = (arr: Qualification[] | Skill[], title: string): Qualification | Skill | undefined => {
    return arr.find((obj) => obj.title === title);
  }

  return (
    <section className="xl:h-[860px] pb-12 mt-20">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          {t("aboutMe.title")}
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <Hellow />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">{t("aboutMe.sections.personalInfo")}</TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="qualification">{t("aboutMe.sections.qualification")}</TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">{t("aboutMe.sections.skills")}</TabsTrigger>
              </TabsList>
              <div className="text-lg mt-24 xl:mt-8 p-2 xl:p-0">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">{t("aboutMe.h1")}</h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">{t("aboutMe.description")}</p>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                          <div className="text-primary dark:text-darkMode">
                            {item.icon}
                          </div>
                          <div>
                            {item.text.includes("Born") ? t("aboutMe.personalDetails.birthDate") : item.text}
                          </div>
                        </div>
                      })}
                    </div>
                    <div>
                      <div className="flex flex-col gap-y-2">
                        <div className="text-primary dark:text-darkMode">{t("aboutMe.personalDetails.languagesTitle")}</div>
                        <div className="border-b border-border"></div>
                        <div>{t("aboutMe.personalDetails.languages")}</div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualification">
                  <div className="">
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      {t("aboutMe.qualification.myJourney")}
                    </h3>
                    <div className="flex flex-col justify-between md:grid md:grid-cols-2 gap-y-8">
                      <div>
                        <div className="flex items-center gap-x-2">
                          <div className="text-primary dark:text-darkMode">
                            <Briefcase />
                          </div>
                          <div className="font-semibold text-primary dark:text-darkMode">
                            {t("aboutMe.qualification.experience")}
                          </div>
                        </div>
                        <div className="mt-4 flex flex-col gap-y-8">
                          {getData(qualificationData, "Experience")?.data?.map((item, index) => {
                            const { company, qualification, years } = item;
                            return (
                              <div className="flex gap-x-2" key={index}>
                                <div className="h-[1px] bg-border relative ml-2 pt-1">
                                  <div className="h-[10px] w-[10px] rounded-full bg-primary dark:bg-darkMode"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-lg leading-none mb-2">{company}</div>
                                  <div className="text-sm">{qualification.includes("Intern") ? t("aboutMe.qualification.intern") : qualification}</div>
                                  <div className="text-sm">{years}</div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-x-2">
                          <div className="text-primary dark:text-darkMode">
                            <GraduationCap />
                          </div>
                          <div className="font-semibold text-primary dark:text-darkMode">
                            {t("aboutMe.qualification.education")}
                          </div>
                        </div>
                        <div className="mt-4 flex flex-col gap-y-8">
                          {getData(qualificationData, "Education")?.data?.map((item, index) => {
                            const { university, qualification, years } = item;
                            return (
                              <div className="flex gap-x-2" key={index}>
                                <div className="h-[1px] bg-border relative ml-2 pt-1">
                                  <div className="h-[10px] w-[10px] rounded-full bg-primary dark:bg-darkMode"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-lg leading-none mb-2">{university}</div>
                                  <div className="text-sm">{qualification.includes("degree") ? t("aboutMe.qualification.degree") : qualification}</div>
                                  <div className="text-sm">{years}</div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="flex flex-col gap-y-5">
                    <h3 className="h3 mb-4 text-center xl:text-left">{t("aboutMe.skills.tools")}</h3>
                    <section className="flex flex-col">
                      <h4 className="text-center sm:text-left">{t("aboutMe.sections.skills")}</h4>
                      <div className="border-b w-full border-border dark:border-darkMode mb-4 mt-1"></div>
                      <div>
                        {getData(skillData, "skills")?.data?.map((item, index) => {
                          const { category, skills } = item;
                          let finalCat = category

                          switch (finalCat) {
                            case 'Databases':
                              finalCat = t("aboutMe.skills.databases")
                              break;
                            case 'Testing':
                              finalCat = t("aboutMe.skills.testing")
                              break;
                            case 'Miscellaneous':
                              finalCat = t("aboutMe.skills.miscellaneous")
                              break;
                          }

                          return (
                            <div className="flex gap-x-2" key={index}>
                              <div className="h-[1px] bg-border relative ml-2 pt-1">
                                <div className="h-[8px] w-[8px] rounded-full bg-primary dark:bg-darkMode"></div>
                              </div>
                              <div>
                                <div className="font-semibold text-lg leading-none mb-1 text-primary dark:text-darkMode">{finalCat}</div>
                                <div className="text-sm mb-5">
                                  <div className="flex flex-col sm:flex-row sm:gap-x-3">
                                    {skills.map((item, index) => {
                                      return (
                                        <div className="flex gap-x-1">
                                          <div className="h-[1px] bg-border relative ml-2 pt-2">
                                            <div className="h-[5px] w-[5px] rounded-full bg-primary dark:bg-darkMode"></div>
                                          </div>
                                          <div key={index}>
                                            {item}
                                          </div>
                                        </div>
                                      )
                                    })}
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </section>
                    <section>
                      <h4 className="flex flex-col items-center xl:items-start">{t("aboutMe.skills.tools")}</h4>
                      <div className="border-b w-full border-border dark:border-darkMode mb-4 mt-1"></div>
                      <div className="flex justify-between">
                        {getData(skillData, "tools")?.data?.map((item, index) => {
                          return (
                            <div key={index}>
                              <img className="hover:scale-110 transition-all cursor-pointer" src={item.imgPath} alt="icon" width={48} height={48} />
                            </div>
                          );
                        })}
                      </div>
                    </section>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
