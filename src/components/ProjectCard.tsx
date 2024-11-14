import Link from "next/link"
import Image from "next/image"
import { Card, CardHeader } from "./ui/card"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { Badge } from "./ui/badge"

const ProjectCard = ({index}: {index: number}) => {
  return (
    <Card className="p-4 text-center h-[90%] flex flex-col">
      <CardHeader>
        <h2 className="text-lg font-semibold">Projeto {index + 1}</h2>
      </CardHeader>
      <div className="mt-2 flex flex-col items-center flex-grow justify-around">
        <GitHubLogoIcon className="text-gray-500 size-14 text-primary dark:text-darkMode"/>
        <p className="mt-4">Em breve!</p>
        <Badge className="mt-2 bg-primary text-white">Novidades em breve</Badge>
      </div>
    </Card>
  )
}

export default ProjectCard
