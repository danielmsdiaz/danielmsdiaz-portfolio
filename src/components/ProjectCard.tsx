import Link from "next/link"
import Image from "next/image"
import { Card, CardHeader } from "./ui/card"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { Badge } from "./ui/badge"
import { Project } from "./Projects"

//photo view
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ProjectCard = ({ index, item }: { index: number, item: Project }) => {
  return (
    <Card className="max-w-[500px] h-[520px] sm:h-[500px] mx-auto rounded-xl">
      <CardHeader className="h-[45%] bg-primary/30 dark:bg-darkMode/30">
        <div className="flex flex-wrap uppercase gap-x-1">
          {item.stack.map((item, index) => {
            return (
              <Badge key={index} className="mt-2 bg-primary text-white cursor-default">{item}</Badge>
            )
          })}
        </div>
        <PhotoProvider>
          <div className="relative w-full h-[150px] flex items-center justify-center">
            <PhotoView key={index} src={item.imgPath}>
              <Image className="absolute bottom-0 shadow-2xl rounded-xl hover:scale-110 cursor-pointer transition-all" src={item.imgPath} alt="" width={250} height={250} priority />
            </PhotoView>
          </div>
        </PhotoProvider>
      </CardHeader>
      <div className="max-h-fit px-8 py-6 text-center flex flex-col gap-y-3 sm:gap-y-10">
        {/* <div className="flex gap-x-1 uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {item.stack.map((item, index) => {
            return (
              <Badge key={index} className="mt-2 bg-primary text-white cursor-default">{item}</Badge>
            )
          })}
        </div> */}
        <h4 className="h4">{item.name}</h4>
        <p className="text-muted-foreground text-lg">{item.description}</p>
        <div className="flex justify-center sm:justify-start mb-3">
          <Badge
            className={`${(item.status === "COMPLETED" || item.status === "COMPLETO")
              ? "bg-green-500 hover:bg-green-500"
              : (item.status === "NOT_COMPLETED" || item.status === "INCOMPLETO")
                ? "bg-red-500 hover:bg-red-500"
                : "bg-yellow-500 hover:bg-yellow-500"
              } cursor-default`}
          >
            {item.status.replace("_", " ")}
          </Badge>
        </div>
      </div>
    </Card>
  )
}

export default ProjectCard
