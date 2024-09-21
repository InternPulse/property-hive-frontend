// import Test from "@/src/components/Blocks/Test.jsx";
import ManageProperties, {
  dummyPropertiesData,
} from "@/src/pages/manage/ManageProperties";
import { renderWithRouter } from "@/tests/utils/renderWithRouter";
import "@testing-library/jest-dom/vitest";
import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("CustomDropDown appearance", () => {
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

describe("CustomDropDown behavior", () => {
  it("should show the dropdown menu when button is clicked", async () => {
    const { user } = renderWithRouter(<ManageProperties />, {
      route: "/manage/properties",
    });

    const dropdownTriggers = screen.getAllByTestId(
      "properties-filter-dropdown-trigger",
    );

    await user.click(dropdownTriggers[0]);
    const dropdownMenus = screen.getAllByTestId(
      "properties-filter-dropdown-menu",
    );

    expect(dropdownMenus[0]).toBeInTheDocument();
  });
});
