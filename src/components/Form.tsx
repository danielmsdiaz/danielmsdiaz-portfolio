import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { User, MailIcon, ArrowRightIcon, MessagesSquare } from "lucide-react"

const Form = () => {
    return (
        <form className="mb-[36px]">
            <div className="flex flex-col gap-y-4">
                <div className="relative flex items-center">
                    <Input type="name" id="name" placeholder="Name" />
                    <User className="absolute right-6" size={20} />
                </div>
                <div className="relative flex items-center">
                    <Input type="email" id="email" placeholder="email" />
                    <MailIcon className="absolute right-6" size={20} />
                </div>
                <div className="relative flex items-center">
                    <Textarea id="name" placeholder="t" />
                    <User className="absolute right-6" size={20} />
                </div>
                <Button className="flex items-center rounded-full mx-auto w-1/2 xl:w-1/4 py-2">Let's talk</Button>
            </div>
        </form>
    )
}

export default Form