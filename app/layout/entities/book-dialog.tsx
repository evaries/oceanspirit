import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SocialContacts } from "./social-contacts";

export type BookDialogProps = {
  triggerClass?: string;
};

export const BookDialog: React.FC<BookDialogProps> = ({ triggerClass }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className={triggerClass}>
          BOOK
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Book trip</DialogTitle>
          <DialogDescription>
            For booking, please, contact us in way you like we shortly bring you
            all necessary information and details
          </DialogDescription>
          <SocialContacts className="mt-10" />
        </DialogHeader>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
