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

const data = [
  {
    image: testImg,
    title: "Luxury Detached Duplex Active House",
    propType: "house",
    location: "Maitama, Abuja",
    details: ["4 Beds", "5 Baths", "2,500 Sq. m"],
    price: "N120,000,000",
    isActive: true,
  },
  {
    image: testImg,
    title: "Luxury Detached Duplex Active House",
    propType: "house",
    location: "Maitama, Abuja",
    details: ["4 Beds", "5 Baths", "2,500 Sq. m"],
    price: "N120,000,000",
    isActive: true,
  },
  {
    image: testImg,
    title: "Luxury Detached Duplex Disabled House",
    propType: "house",
    location: "Maitama, Abuja",
    details: ["4 Beds", "5 Baths", "2,500 Sq. m"],
    price: "N120,000,000",
    isActive: false,
  },
  {
    image: testImg,
    title: "Luxury Detached Duplex Disabled Land",
    propType: "land",
    location: "Maitama, Abuja",
    details: ["4 Beds", "5 Baths", "2,500 Sq. m"],
    price: "N120,000,000",
    isActive: false,
  },
  {
    image: testImg,
    title: "Luxury Detached Duplex Disabled Land",
    propType: "land",
    location: "Maitama, Abuja",
    details: ["4 Beds", "5 Baths", "2,500 Sq. m"],
    price: "N120,000,000",
    isActive: false,
  },
  {
    image: testImg,
    title: "Luxury Detached Duplex Disabled Commercial",
    propType: "commercial",
    location: "Maitama, Abuja",
    details: ["4 Beds", "5 Baths", "2,500 Sq. m"],
    price: "N120,000,000",
    isActive: false,
  },
  {
    image: testImg,
    title: "Luxury Detached Duplex Active Commercial",
    propType: "commercial",
    location: "Maitama, Abuja",
    details: ["4 Beds", "5 Baths", "2,500 Sq. m"],
    price: "N120,000,000",
    isActive: true,
  },

  {
    image: testImg,
    title: "Luxury Detached Duplex Active Land",
    propType: "land",
    location: "Maitama, Abuja",
    details: ["4 Beds", "5 Baths", "2,500 Sq. m"],
    price: "N120,000,000",
    isActive: true,
  },
];

// const dataArr1 = Array(3).fill(data);
// const dataArr2 = Array(2).fill({ ...data, isActive: false });
// const dataArr3 = Array(2).fill({ ...data, isActive: false, propType: "land" });
// const dataArr4 = Array(2).fill({
//   ...data,
//   isActive: false,
//   propType: "commercial",
// });

// const dataArr = [...dataArr1, ...dataArr2, ...dataArr3, ...dataArr4];

// const STATUS = {
//   active: "active",
//   disabled: "disabled",
//   all: "all",
// };

const STATUS_CONDITIONS = {
  active: true,
  disabled: false,
  all: true,
};

const PROPERTY_TYPES_CONDITIONS = {
  house: "house",
  land: "land",
  commercial: "commercial",
  all: "all",
  allProps: "all",
};

const ManageProperties = () => {
  const reducer = (state, action) => {
    console.log(action, state);

    const statusKeyFound = Object.keys(STATUS_CONDITIONS).includes(action.type);
    const propTypeKeysFound = Object.keys(PROPERTY_TYPES_CONDITIONS).includes(
      action.type,
    );
    console.log(propTypeKeysFound);

    if (statusKeyFound) {
      console.log("got here 1");
      return {
        ...state,
        status: action.type,
        data: action.data.filter((item) => {
          // if the the property type is all and the status is changed from other options to all, we will return all the properties
          if (
            ["allProps", "all"].includes(state.propertyType) &&
            action.type === "all"
          )
            return true;
          // if property type is still all but we change status, return listings that match the chosen status
          else if (
            ["allProps", "all"].includes(state.propertyType) &&
            action.type !== "all"
          )
            return item.isActive === STATUS_CONDITIONS[action.type];

          // if we change properties to all when the status is not all, return all the properties matching the status
          if (
            ["allProps", "all"].includes(action.type) &&
            state.status !== "all"
          )
            return item.propType === state.propertyType;
          // if we change properties to all when the status is not all, return all the properties matching the status
          else
            return (
              item.isActive === STATUS_CONDITIONS[action.type] &&
              item.propType === state.propertyType
            );
        }),
      };
    }

    if (propTypeKeysFound) {
      console.log("got here");
      return {
        ...state,
        propertyType: action.type,
        data: action.data.filter((item) => {
          // if the the property type is switched to all and the status is all, we will return all the properties
          if (
            ["allProps", "all"].includes(action.type) &&
            state.status === "all"
          )
            return true;
          // if we change properties and status is not all, return all the properties matching the status
          else if (
            !["allProps", "all"].includes(action.type) &&
            state.status !== "all"
          ) {
            return (
              item.propType === action.type &&
              item.isActive === STATUS_CONDITIONS[state.status]
            );
          }
          // if we select the status to be all and a property type is selected, display both disabled and enabled listings with that property type
          else if (
            !["allProps", "all"].includes(action.type) &&
            state.status === "all"
          ) {
            return item.propType === action.type;
          }
        }),
      };
    }
    // switch (action.type) {
    //   case action.type:
    //     return {
    //       ...state,
    //       propertyType: action.type,
    //       data: action.data.filter((item) => {
    //         // if the the property type is all and the status is all, we will return all the properties
    //         if (
    //           ["allProps", "all"].includes(action.type) &&
    //           state.status === "all"
    //         )
    //           return true;
    //         // if we change properties to all when the status is not all, return all the properties matching the status
    //         else if (
    //           ["allProps", "all"].includes(action.type) &&
    //           state.status !== "all"
    //         ) {
    //           return item.isActive === STATUS_CONDITIONS[state.status];
    //         }
    //         // if we select the status to be all and a property type is selected, display both disabled and enabled listings with that property type
    //         else if (state.status !== "all") {
    //           return (
    //             item.propType === action.type &&
    //             item.isActive === STATUS_CONDITIONS[state.status]
    //           );
    //         }
    //       }),
    //     };
    //   default:
    // }
  };

  const [state, dispatch] = useReducer(reducer, {
    status: "all",
    propertyType: "all",
    data: data,
  });
  const [originalData] = useState(data);
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
                  {state.status}
                  <img src={chevDown} alt="" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[calc(200rem/16)]">
                <DropdownMenuRadioGroup
                  className="font-medium text-neutrals-950 lg:text-lg"
                  value={state.status}
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
            <span className="font-medium text-neutrals-950">property type</span>
            <DropdownMenu>
              <DropdownMenuTrigger
                asChild
                className="w-[calc(200rem/16)] border-primary-500 bg-transparent p-2"
              >
                <Button
                  variant="outline"
                  className="flex items-center gap-1 capitalize text-neutrals-700"
                >
                  {state.propertyType === "allProps"
                    ? "All"
                    : state.propertyType}
                  <img src={chevDown} alt="" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[calc(200rem/16)]">
                <DropdownMenuRadioGroup
                  className="font-medium text-neutrals-950 lg:text-lg"
                  value={state.propertyType}
                  onValueChange={(value) =>
                    dispatch({
                      type: value,
                      data: originalData,
                    })
                  }
                >
                  <DropdownMenuRadioItem value="allProps">
                    All
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="house">
                    House
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="land">
                    Land
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="commercial">
                    Commercial
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
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
