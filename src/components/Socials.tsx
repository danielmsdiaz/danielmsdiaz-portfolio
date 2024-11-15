import Link from "next/link"
import path from "path"
import { RiGithubFill, RiLinkedinFill } from "react-icons/ri"

const icons = [
    {
        path: "https://github.com/danielmsdiaz",
        name: <RiGithubFill />
    },
    {
        path: "https://www.linkedin.com/in/danielmsdiaz/",
        name: <RiLinkedinFill />
    }
]

const Socials = () => {
    return (
        <div className="flex gap-x-6 mx-auto xl:mx-0">
            {icons.map((icon, index) => {
                return <Link target="_blank" href={icon.path} key={index}>
                    <div className="text-foreground text-[30px] hover:text-primary dark:hover:text-darkMode transition-all">{icon.name}</div>
                </Link>
            })}
        </div>
    )
}

export default Socials