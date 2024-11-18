import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";

type AlertProps = {
    onClose: () => void;
};

const Alert = ({ onClose }: AlertProps) => {
    return (
        <AlertDialog open onOpenChange={onClose}>
            <AlertDialogContent className="w-full max-w-sm sm:max-w-lg rounded-lg">
                <AlertDialogHeader>
                    <AlertDialogTitle>Coming Soon!</AlertDialogTitle>
                    <AlertDialogDescription>
                        I'm working hard to make this section available soon. Stay tuned for updates!
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={onClose}>Got it!</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default Alert;
