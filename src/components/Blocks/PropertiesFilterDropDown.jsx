import chevDown from "@/src/assets/icons/chevronDown.svg";
import { Button } from "@/src/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { useSearchParams } from "react-router-dom";

const STATUS_CONDITIONS = ["active", "disabled"];

// const PROPERTY_TYPES_CONDITIONS = ["house", "land", "commercial"];
export const PropertiesFilterDropDown = ({ titles, state, dispatch }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // const slicedValue =
  const handleValueChange = (value) => {
    const modValue = `${value.slice(0, -1)}${STATUS_CONDITIONS.includes(value.slice(0, -1)) ? "S" : "P"}`;
    const slicedValue = value.slice(0, -1);
    const currentParams = Object.fromEntries([...searchParams]);

    if (modValue.endsWith("S") || value.endsWith("S")) {
      console.log("got here for status");
      setSearchParams({
        ...currentParams,
        status: slicedValue === "all" ? "all" : slicedValue,
      });
    } else if (modValue.endsWith("P") || value.endsWith("P")) {
      console.log("got here for property type");
      setSearchParams({
        ...currentParams,
        propertyType: slicedValue === "all" ? "all" : slicedValue,
      });
    }

    // Dispatch the action to update the state
    dispatch(value === "allProps" ? "all" : value);
  };
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
          {state === "all"
            ? "All"
            : state.endsWith("S")
              ? state.slice(0, -1)
              : state.slice(0, -1)}
          <img src={chevDown} alt="" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        data-testid="properties-filter-dropdown-menu"
        className="w-[calc(200rem/16)]"
      >
        <DropdownMenuRadioGroup
          className="font-medium text-neutrals-950 lg:text-lg"
          value={`${state}`}
          onValueChange={handleValueChange}
        >
          {titles.map((title) => (
            <DropdownMenuRadioItem key={title} value={title}>
              {/* === "all" ? title : title.slice(0, -1) */}{" "}
              <div className="h-[18px] w-[18px] rounded-full border border-primary-500" />
              <span className="capitalize">{title.slice(0, -1)}</span>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
