import chevDown from "@/src/assets/icons/chevronDown.svg";
import testImg from "@/src/assets/images/testPropImg.png";
import ListingCard from "@/src/components/Blocks/ListingCard";
import { Button } from "@/src/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { useReducer, useState } from "react";
import { Link } from "react-router-dom";

const data = {
  image: testImg,
  title: "Luxury Detached Duplex",
  location: "Maitama, Abuja",
  details: ["4 Beds", "5 Baths", "2,500 Sq. m"],
  price: "N120,000,000",
  isActive: true,
};

const dataArr1 = Array(5).fill(data);
const dataArr2 = Array(5).fill({ ...data, isActive: false });

const dataArr = [...dataArr1, ...dataArr2];

const ManageProperties = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "active":
        return {
          type: "active",
          data: action.data.filter((item) => item.isActive === true),
        };
      case "disabled":
        return {
          type: "disabled",
          data: action.data.filter((item) => item.isActive === false),
        };
      case "all":
        return {
          type: "all",
          data: action.data,
        };
      default:
        throw Error("Unknown action: " + action.type);
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    type: "all",
    data: dataArr,
  });
  const [originalData] = useState(dataArr);
  console.log(state);
  return (
    <main className="h-full bg-neutrals-50 lg:px-10 lg:pt-[calc(50rem/16)] xl:px-10">
      <section className="mb-[calc(30rem/16)] flex items-end justify-between">
        <div className="flex items-center gap-4 capitalize">
          <div className="flex flex-col gap-1 space-y-1">
            <span className="font-medium text-neutrals-950">status</span>
            <DropdownMenu>
              <DropdownMenuTrigger
                asChild
                className="w-[calc(200rem/16)] border-primary-500 bg-transparent p-2"
              >
                <Button
                  variant="outline"
                  className="flex items-center gap-1 capitalize text-neutrals-700"
                >
                  {state.type}
                  <img src={chevDown} alt="" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[calc(200rem/16)]">
                <DropdownMenuRadioGroup
                  value={state.type}
                  onValueChange={(value) =>
                    dispatch({
                      type: value,
                      data: originalData,
                    })
                  }
                >
                  <DropdownMenuRadioItem value="all">All</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="active">
                    Active
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="disabled">
                    Disabled
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="space-y-1">
            <span className="font-medium text-neutrals-950">status</span>
          </div>
        </div>
        <Link
          to="/manage-properties/add"
          className="flex items-center gap-2 rounded-lg bg-primary-500 px-4 py-2 font-medium capitalize text-primary-25 lg:text-base"
        >
          <img src="" alt="" className="" />
          <span className="">add property</span>
        </Link>
      </section>
      <section className="grid gap-x-3 gap-y-6 md:grid-cols-2 xl:grid-cols-3">
        {state.data.map((item, index) => (
          <ListingCard key={index} {...item} />
        ))}
      </section>
    </main>
  );
};

export default ManageProperties;
