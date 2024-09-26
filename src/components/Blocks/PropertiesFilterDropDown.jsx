import chevDown from "@/src/assets/icons/chevronDown.svg";
import { Button } from "@/src/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";

export const PropertiesFilterDropDown = ({ titles, data, state, dispatch }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="w-[calc(200rem/16)] border-primary-500 bg-transparent p-2"
      >
        <Button
          data-testid="properties-filter-dropdown-trigger"
          variant="outline"
          className="flex items-center gap-1 capitalize text-neutrals-700"
        >
          {state === "allProps" ? "All" : state}
          <img src={chevDown} alt="" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        data-testid="properties-filter-dropdown-menu"
        className="w-[calc(200rem/16)]"
      >
        <DropdownMenuRadioGroup
          className="font-medium text-neutrals-950 lg:text-lg"
          value={state}
          onValueChange={(value) =>
            dispatch({
              type: value,
              data,
            })
          }
        >
          {titles.map((title) => (
            <DropdownMenuRadioItem key={title} value={title}>
              {" "}
              <div className="h-[18px] w-[18px] rounded-full border border-primary-500" />
              <span className="capitalize">{title}</span>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
