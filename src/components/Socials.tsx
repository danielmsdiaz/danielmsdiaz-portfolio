import Link from "next/link"
import path from "path"
import { RiGithubFill, RiLinkedinFill } from "react-icons/ri"
import { Review } from "./Reviews";

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

const Socials = ({ item }: { item?: Review }) => {
    return (
        <>
            {item ? (
                <div className="flex gap-x-2">
                    <Link target="_blank" href={item.github}>
                        <div className="text-foreground text-[30px] hover:text-primary dark:hover:text-darkMode transition-all">
                            <RiGithubFill />

                        </div>
                    </Link>
                    <Link target="_blank" href={item.linkedin}>
                        <div className="text-foreground text-[30px] hover:text-primary dark:hover:text-darkMode transition-all">
                            <RiLinkedinFill />
                        </div>
                    </Link>
                </div>
            ) : (
                <div className="flex gap-x-6 mx-auto xl:mx-0">
                    {icons.map((icon, index) => {
                        return <Link target="_blank" href={icon.path} key={index}>
                            <div className="text-foreground text-[30px] hover:text-primary dark:hover:text-darkMode transition-all">{icon.name}</div>
                        </Link>
                    })}
                </div >
            )}
        </>
    )
}

export default Socials