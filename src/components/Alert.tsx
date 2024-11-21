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

//translations
import { useTranslation } from "react-i18next"

type AlertProps = {
    onClose: () => void;
};

const Alert = ({ onClose }: AlertProps) => {
    const [t, i18n] = useTranslation("global");

    return (
        <AlertDialog open onOpenChange={onClose}>
            <AlertDialogContent className="w-full max-w-sm sm:max-w-lg rounded-lg">
                <AlertDialogHeader>
                    <AlertDialogTitle>{t("alert.title")}</AlertDialogTitle>
                    <AlertDialogDescription>
                    {t("alert.content")}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={onClose}>{t("alert.button")}</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default Alert;
