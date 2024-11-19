import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogClose,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"


const Modal = ({ handleCloseModal }: { handleCloseModal: () => void }) => {
    return (
        <Dialog open onOpenChange={handleCloseModal}>
            <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                    <DialogTitle>Create your review</DialogTitle>
                    <DialogDescription>
                        What you want to say about me?
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-y-4">
                    <div className="grid grid-cols-2 justify-items-stretch gap-y-2">
                        <div className="flex items-center gap-x-4">
                            <Label htmlFor="name" className="text-left">
                                Name
                            </Label>
                            <Input
                                id="name"
                                placeholder="Your name"
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="github" className="text-right">
                                GitHub
                            </Label>
                            <Input
                                id="github"
                                placeholder="Your github"
                                className="col-span-3"
                            />
                        </div>
                        <div className="flex items-center gap-x-6">
                            <Label htmlFor="role" className="text-left">
                                Role
                            </Label>
                            <Input
                                id="role"
                                placeholder="Your role"
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="linkedin" className="text-right">
                                Linkedin
                            </Label>
                            <Input
                                id="linkedin"
                                placeholder="Your linkedin"
                                className="col-span-3"
                            />
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="review" className="text-right">
                            Review
                        </Label>
                        <Textarea
                            id="review"
                            placeholder="What do you think about me?"
                            className="col-span-3 mt-2"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button onClick={() => { alert("sda") }} type="submit">Save changes</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default Modal