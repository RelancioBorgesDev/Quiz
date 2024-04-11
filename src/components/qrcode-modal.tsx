import Image from "next/image";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { QrCode, X } from "lucide-react";

export default function QrCodeModal() {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <QrCode />
      </AlertDialogTrigger>
      <AlertDialogContent className="flex items-center justify-center ">
        <AlertDialogCancel className="absolute top-2 right-2">
          <X />
        </AlertDialogCancel>
        {/* <Image src={} alt="QrCode Image" /> */}
        <QrCode size={94} />
      </AlertDialogContent>
    </AlertDialog>
  );
}
