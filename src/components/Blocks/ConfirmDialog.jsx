import bigDeleteIcon from "@/src/assets/icons/bigDeleteIcon.svg";
import PropTypes from "prop-types";
import { Button } from "../ui/button";
import { DialogClose } from "../ui/dialog";
const ConfirmDialog = ({ onConfirm }) => {
  return (
    <div className="flex flex-col items-center text-neutrals-700">
      <img src={bigDeleteIcon} alt="" className="" />
      <div className="mt-2 space-y-1 text-center">
        <h2 className="font-semibold text-error-500 lg:text-[2rem]">
          Delete Property
        </h2>
        <p className="lg:text-[calc(22rem/16)]">This action is irreversible</p>
      </div>

      <div className="mt-[calc(33rem/16)] flex w-full flex-col space-y-6 font-medium">
        <Button
          variant="ghost"
          onClick={onConfirm}
          className="bg-error-50 px-7 py-3 text-error-500 hover:text-error-hover lg:text-2xl"
        >
          Delete
        </Button>
        <DialogClose asChild>
          <Button
            variant="outline"
            className="border-neutrals-400 px-7 py-3 lg:text-2xl"
          >
            Cancel
          </Button>
        </DialogClose>
      </div>
    </div>
  );
};

ConfirmDialog.propTypes = {
  onConfirm: PropTypes.func.isRequired,
};
export default ConfirmDialog;
