// import Test from "@/src/components/Blocks/Test.jsx";
import ManageProperties, {
  dummyPropertiesData,
} from "@/src/pages/manage/ManageProperties";
import { renderWithRouter } from "@/tests/utils/renderWithRouter";
import "@testing-library/jest-dom/vitest";
import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("PropertiesFilterDropDown appearance", () => {
  it("should render when page loads", () => {
    //   Render the page that contains the component to be tested
    renderWithRouter(<ManageProperties />, { route: "/manage/properties" });

    // Get the reference to the component as an array because there is more than one element with this id
    const dropdownTriggers = screen.getAllByTestId(
      "properties-filter-dropdown-trigger",
    );

    // Check if the component is rendered
    dropdownTriggers.forEach((trigger) => {
      expect(trigger).toBeInTheDocument();
    });
  });

  it("should show the default state as the label", () => {
    renderWithRouter(<ManageProperties />, { route: "/manage/properties" });

    // Get the reference to the component
    const dropdownTriggers = screen.getAllByTestId(
      "properties-filter-dropdown-trigger",
    );

    // Check if the component is rendered
    dropdownTriggers.forEach((trigger) => {
      expect(trigger).toHaveTextContent(/all/i);
    });
  });
});

describe("PropertiesFilterDropDown behavior", () => {
  it("should show the dropdown menu when button is clicked", async () => {
    const { user, getAllByTestId } = renderWithRouter(<ManageProperties />, {
      route: "/manage/properties",
    });

    const dropdownTriggers = getAllByTestId(
      "properties-filter-dropdown-trigger",
    );

    await user.click(dropdownTriggers[0]);
    const dropdownMenus = getAllByTestId("properties-filter-dropdown-menu");

    expect(dropdownMenus[0]).toBeInTheDocument();
  });

  it("should show the value of the selected option as new button label", async () => {
    // eslint-disable-next-line no-unused-vars
    const statusTitles = ["all", "active", "disabled"];
    const propertyTitles = ["all", "house", "land", "commercial"];
    const { user, getAllByTestId } = renderWithRouter(<ManageProperties />, {
      route: "/manage/properties",
    });

    const dropdownTriggers = getAllByTestId(
      "properties-filter-dropdown-trigger",
    );

    await user.click(dropdownTriggers[1]);

    const dropdownMenu = screen.getByTestId("properties-filter-dropdown-menu");

    expect(dropdownMenu).toBeInTheDocument();
    await user.keyboard("{ArrowDown}{ArrowDown}{Enter}");
    expect(dropdownTriggers[1]).toHaveTextContent(propertyTitles[1]);
  });

  it.each([
    {
      scenerio: "all listings when status and property type is 'all'",
      data: dummyPropertiesData,
      state: {
        status: "all",
        propertyType: "all",
        data: dummyPropertiesData,
      },
    },
    {
      scenerio:
        "listings that are either active or disabled when status is not 'all' and property type is 'all'",
      data: dummyPropertiesData,
      state: {
        status: "active",
        propertyType: "all",
        data: dummyPropertiesData.filter((item) => item.isActive === true),
      },
    },
    {
      scenerio:
        "listings that are either 'houses', 'lands', or 'commercial' that are either 'active' or 'disabled' when status is not 'all' and property type is not 'all'",
      data: dummyPropertiesData,
      state: {
        status: "active",
        propertyType: "house",
        data: dummyPropertiesData.filter(
          (item) => item.propType === "house" && item.isActive === true,
        ),
      },
    },
    {
      scenerio:
        "listings that are either 'houses', 'lands', or 'commercial' when status is 'all' and property type is not 'all'",
      data: dummyPropertiesData,
      state: {
        status: "all",
        propertyType: "house",
        data: dummyPropertiesData.filter((item) => item.propType === "house"),
      },
    },
  ])("should return $scenerio", async ({ state }) => {
    const { user, getAllByTestId } = renderWithRouter(<ManageProperties />, {
      route: "/manage/properties",
    });

    const dropdownTriggers = getAllByTestId(
      "properties-filter-dropdown-trigger",
    );

    if (state.status === "active" && state.propertyType === "all") {
      await user.click(dropdownTriggers[0]);
      await user.keyboard("{ArrowDown}{ArrowDown}{Enter}");
    }

    if (state.status === "all" && state.propertyType === "house") {
      await user.click(dropdownTriggers[1]);
      await user.keyboard("{ArrowDown}{ArrowDown}{Enter}");
    }

    if (state.status === "active" && state.propertyType === "house") {
      await user.click(dropdownTriggers[0]);
      await user.keyboard("{ArrowDown}{ArrowDown}{Enter}");
      await user.click(dropdownTriggers[1]);
      await user.keyboard("{ArrowDown}{ArrowDown}{Enter}");
    }

    expect(dropdownTriggers[0]).toHaveTextContent(state.status);
    expect(dropdownTriggers[1]).toHaveTextContent(state.propertyType);

    const cardTitles = getAllByTestId("property-listing-card-title");
    if (state.status === "active" && state.propertyType === "all") {
      cardTitles.forEach((title) => {
        expect(title).not.toHaveTextContent(/disabled$/i);
      });
    } else if (state.status === "all" && state.propertyType === "house") {
      cardTitles.forEach((title) => {
        expect(title).not.toHaveTextContent(/land | commercial$/i);
      });
    } else if (state.status === "active" && state.propertyType === "house") {
      cardTitles.forEach((title) => {
        expect(title).not.toHaveTextContent(/disabled$/i);
        expect(title).not.toHaveTextContent(/land | commercial$/i);
      });
    }
  });
});

// describe("CustomDropDown", () => {});
