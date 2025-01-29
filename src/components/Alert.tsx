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
    closeNav: () => void;
};

const Alert = ({ onClose, closeNav }: AlertProps) => {
    const [t, i18n] = useTranslation("global");

    const handleCloseBtn = () => {
        onClose();
        setTimeout(() => {
            closeNav();
        }, 200);
    }

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
                    <AlertDialogCancel onClick={handleCloseBtn}>{t("alert.button")}</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default Alert;
