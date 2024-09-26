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
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { useState } from "react";
import { Dialog, DialogContent } from "../ui/dialog";

export const useShowHide = (defaultVisible = false) => {
  const [visible, setVisible] = useState(defaultVisible);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  const toggle = (nextVisible) => {
    if (typeof nextVisible !== "undefined") {
      setVisible(nextVisible);
    } else {
      setVisible((previousVisible) => !previousVisible);
    }
  };

  return { hide, show, toggle, visible };
};

const ListingCard = ({ title, location, details, price, image }) => {
  const deleteDialog = useShowHide();
  const modDetails = details.join(" | ");
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
                  <DropdownMenuItem className="">
                    <Link
                      to=""
                      className="flex items-center gap-2 font-medium capitalize lg:text-lg"
                    >
                      <img src={editIcon} alt="" className="" />
                      <span className="">edit</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-2 font-medium capitalize lg:text-lg">
                    <img src={eyeSlash} alt="" className="" />
                    <span className="">pause</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onSelect={deleteDialog.show}
                    aria-haspopup="dialog"
                    aria-expanded={deleteDialog.visible ? "true" : "false"}
                    aria-controls="radix-:rf:"
                    data-state={deleteDialog.visible ? "open" : "closed"}
                    className="flex items-center gap-2 font-medium capitalize text-error-500 lg:text-lg"
                  >
                    <img src={deleteIcon} alt="" className="" />
                    <span className="">delete</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Dialog
                onOpenChange={deleteDialog.toggle}
                open={deleteDialog.visible}
              >
                <DialogContent>
                  hello world
                  {/* <ConfirmDialog
                    onSubmit={handleDelete}
                    title="Are you sure to delete this post?"
                  /> */}
                </DialogContent>
              </Dialog>
            </>
          </div>
          <p className="font-medium text-neutrals-700">{location}</p>
          <p className="text-sm font-medium text-neutrals-700">{modDetails}</p>
          <p className="text-xl font-semibold text-primary-800">{price}</p>
        </div>
      </div>
    </div>
  );
};
ListingCard.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  details: PropTypes.array.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default ListingCard;
