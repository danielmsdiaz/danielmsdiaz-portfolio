import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { CheckCircle2, CircleX } from "lucide-react"
import { Review } from "@/types/reviews";

const ReviewTable = ({ listReviews, setReviews }: { listReviews: Review[], setReviews: React.Dispatch<React.SetStateAction<Review[]>> }) => {

    const handleCheckBtn = async (item: Review) => {
        await fetch("/api/reviews", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(item)
        });

        filterList(item);
    }

    const handleDeleteBtn = async (item: Review) => {
        await fetch("/api/reviews", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(item)
        });

        filterList(item);
    }

    const filterList = (item: Review) => {
        setReviews((prevReviews: any) =>
            prevReviews.filter((review: Review) => review.id !== item.id)
        );
    }

    return (
        <Table className="">
            <TableCaption>Suas avaliações</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead className="">Review</TableHead>
                    <TableHead className="">Yes/No</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {listReviews.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{item.id}</TableCell>
                        <TableCell className="w-full">{item.review}</TableCell>
                        <TableCell>
                            <div className="flex flex-row gap-x-2">
                                <CheckCircle2 onClick={() => { handleCheckBtn(item) }} className="text-green-500 cursor-pointer hover:text-green-300" />
                                <CircleX onClick={() => { handleDeleteBtn(item) }} className="text-red-500 cursor-pointer hover:text-red-300" />
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default ReviewTable