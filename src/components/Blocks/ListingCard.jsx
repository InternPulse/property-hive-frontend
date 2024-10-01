import deleteIcon from "@/src/assets/icons/deleteIcon.svg";
import editIcon from "@/src/assets/icons/editIcon.svg";
import eyeSlash from "@/src/assets/icons/eyeSlash.svg";
import verticalDots from "@/src/assets/icons/verticalDots.svg";
import { Button } from "@/src/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

import { useDeletePropertyMutation } from "@/src/redux/service/propertiesApi";
import { useDialogControls } from "@/tests/utils/hooks/useDialogControls";
import { toast } from "sonner";
import { Dialog, DialogContent } from "../ui/dialog";
import ConfirmDialog from "./ConfirmDialog";

const ListingCard = ({ title, location, details, price, image, id }) => {
  const deleteDialog = useDialogControls();
  const [deleteProperty] = useDeletePropertyMutation();
  const handleDelete = async (id) => {
    toast.promise(deleteProperty(id), {
      // loading: "Deleting property...",
      success: "Property deleted successfully",
      error: "Error deleting property",
      duration: 600,
    });
    deleteDialog.hide();
  };
  return (
    <div
      data-testid="property-listing-card"
      className="space-y-2 rounded-lg bg-neutrals-25 p-4"
    >
      <div className="rounded-lg">
        <img src={image} alt="" className="w-full" />
      </div>
      <div className="">
        <div className="space-y-0.5">
          <div className="flex items-center justify-between">
            <h2
              data-testid="property-listing-card-title"
              className="text-lg font-medium text-neutrals-950"
            >
              {title}
            </h2>
            <>
              <DropdownMenu>
                <DropdownMenuTrigger asChild className="">
                  <Button variant="ghost" className="h-5 w-5 text-neutrals-700">
                    <img src={verticalDots} alt="" className="h-full w-full" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  data-testid="listing-options-dropdown-menu"
                  className="w-[calc(173rem/16)] text-neutrals-950"
                >
                  <DropdownMenuItem className="hover:bg-neutrals-25">
                    <Link
                      to=""
                      className="flex items-center gap-2 font-medium capitalize lg:text-lg"
                    >
                      <img src={editIcon} alt="" className="" />
                      <span className="">edit</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-2 font-medium capitalize hover:bg-neutrals-25 lg:text-lg">
                    <img src={eyeSlash} alt="" className="" />
                    <span className="">pause</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onSelect={deleteDialog.show}
                    aria-haspopup="dialog"
                    aria-expanded={deleteDialog.visible ? "true" : "false"}
                    aria-controls="radix-:rf:"
                    data-state={deleteDialog.visible ? "open" : "closed"}
                    className="flex items-center gap-2 font-medium capitalize hover:bg-neutrals-25 lg:text-lg"
                  >
                    <img src={deleteIcon} alt="" className="" />
                    <span className="text-error-500">delete</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Dialog
                onOpenChange={deleteDialog.toggle}
                open={deleteDialog.visible}
              >
                <DialogContent>
                  <ConfirmDialog onConfirm={() => handleDelete(id)} />
                </DialogContent>
              </Dialog>
            </>
          </div>
          <p className="font-medium text-neutrals-700">{location}</p>
          <p className="text-sm font-medium text-neutrals-700">{details}</p>
          <p className="text-xl font-semibold text-primary-800">
            {new Intl.NumberFormat("en-NG", {
              style: "currency",
              currency: "NGN",
              maximumSignificantDigits: 3,
            }).format(price)}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ListingCard;
