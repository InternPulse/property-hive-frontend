import testImg from "@/src/assets/images/testPropImg.png";
import addIcon from '@/src/assets/icons/add-circle.png'
import ListingCard from "@/src/components/Blocks/ListingCard";
import { PropertiesFilterDropDown } from "@/src/components/Blocks/PropertiesFilterDropDown";
import { useGetAllPropertiesQuery } from "@/src/redux/service/propertiesApi";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

export const dummyPropertiesData = [
  {
    image: testImg,
    title: "Luxury Detached Duplex Active House",
    property_type: "house",
    location: "Maitama, Abuja",
    details: ["4 Beds", "5 Baths", "2,500 Sq. m"],
    price: "N120,000,000",
    is_sold: true,
  },
  {
    image: testImg,
    title: "Luxury Detached Duplex Disabled House",
    property_type: "house",
    location: "Maitama, Abuja",
    details: ["4 Beds", "5 Baths", "2,500 Sq. m"],
    price: "N120,000,000",
    is_sold: false,
  },
  {
    image: testImg,
    title: "Luxury Detached Duplex Disabled Land",
    property_type: "land",
    location: "Maitama, Abuja",
    details: ["4 Beds", "5 Baths", "2,500 Sq. m"],
    price: "N120,000,000",
    is_sold: false,
  },
  {
    image: testImg,
    title: "Luxury Detached Duplex Active Land",
    property_type: "land",
    location: "Maitama, Abuja",
    details: ["4 Beds", "5 Baths", "2,500 Sq. m"],
    price: "N120,000,000",
    is_sold: true,
  },
  {
    image: testImg,
    title: "Luxury Detached Duplex Disabled Commercial",
    property_type: "apartment",
    location: "Maitama, Abuja",
    details: ["4 Beds", "5 Baths", "2,500 Sq. m"],
    price: "N120,000,000",
    is_sold: false,
  },
  {
    image: testImg,
    title: "Luxury Detached Duplex Active Commercial",
    property_type: "apartment",
    location: "Maitama, Abuja",
    details: ["4 Beds", "5 Baths", "2,500 Sq. m"],
    price: "N120,000,000",
    is_sold: true,
  },
];

const STATUS_CONDITIONS = {
  all: true,
  active: true,
  disabled: false,
};

const PROPERTY_TYPES_CONDITIONS = {
  all: "all",
  house: "house",
  land: "land",
  commercial: "commercial",
  allProps: "all",
};

const ManageProperties = () => {
  const { data, isLoading, isFetching, isError, error } =
    useGetAllPropertiesQuery();
  const [statusFilter, setStatusFilter] = useState("all");
  const [propertyTypeFilter, setPropertyTypeFilter] = useState("all");

  const [originalData, setOriginalData] = useState([]);

  const filteredData = useMemo(() => {
    return originalData?.filter((item) => {
      let matchStatus = true;
      let matchPropertyType = true;
      if (
        ["allProps", "all"].includes(propertyTypeFilter) &&
        statusFilter === "all"
      ) {
        return matchStatus && matchPropertyType;
      } else if (
        ["allProps", "all"].includes(propertyTypeFilter) &&
        statusFilter !== "all"
      )
        return (matchStatus = item.is_sold === STATUS_CONDITIONS[statusFilter]);
      else if (
        !["allProps", "all"].includes(propertyTypeFilter) &&
        statusFilter === "all"
      )
        return (matchPropertyType =
          item.property_type.toLowerCase() === propertyTypeFilter);
      else if (
        !["allProps", "all"].includes(propertyTypeFilter) &&
        statusFilter !== "all"
      )
        return (
          (matchStatus = item.is_sold === STATUS_CONDITIONS[statusFilter]) &&
          (matchPropertyType =
            item.property_type.toLowerCase() === propertyTypeFilter)
        );

      return matchStatus && matchPropertyType;
    });
  }, [propertyTypeFilter, statusFilter, originalData]);

  useEffect(() => {
    if (data) {
      setOriginalData(data.properties);
    }
  }, [data]);

  if ((isFetching && originalData.length === 0) || isLoading)
    return <p>Loading...</p>;
  if (isError) return <p>{error}!</p>;

  return (
    <main className="h-full bg-neutrals-50 lg:px-10 lg:pt-[calc(50rem/16)] xl:px-10">
      <section className="mb-[calc(30rem/16)] flex items-end justify-between">
        <div className="flex items-center gap-4 capitalize">
          <div className="space-y-1">
            <span className="font-medium text-neutrals-950">status</span>
            <PropertiesFilterDropDown
              titles={Object.keys(STATUS_CONDITIONS).map((item) => `${item}S`)}
              state={statusFilter}
              dispatch={setStatusFilter}
            />
          </div>
          <div className="space-y-1">
            <span className="font-medium text-neutrals-950">property type</span>
            <PropertiesFilterDropDown
              titles={Object.keys(PROPERTY_TYPES_CONDITIONS)
                .filter((item) => item !== "allProps")
                .map((item) => `${item}P`)}
              state={propertyTypeFilter}
              dispatch={setPropertyTypeFilter}
            />
          </div>
        </div>
        <Link
          to="/manage-properties/add-property"
          className="flex items-center gap-2 rounded-lg bg-primary-500 px-4 py-2 font-medium capitalize text-primary-25 lg:text-base"
        >
          <img src="" alt="" className="" />
          <span className="">add property</span>

        </Link>
      </section>
      <section className="grid gap-x-3 gap-y-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {filteredData?.length === 0 ? (
          <p>No properties found!</p>
        ) : (
          filteredData?.map((item, index) => (
            <ListingCard
              key={index}
              isSold={item.is_sold}
              details={`${item.number_of_bedrooms} beds | ${item.number_of_bathrooms} baths | ${item.squaremeters} sq. m`}
              image={testImg}
              location={`${item.city}, ${item.state}`}
              price={item.price}
              title={item.name}
              id={item.id}
            />
          ))
        )}
      </section>
    </main>
  );
};

export default ManageProperties;
