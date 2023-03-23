import { render, fireEvent } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { routerConfig } from "../../src/App";
import MainPage from "../../src/pages/MainPage";
const router = createMemoryRouter(routerConfig, {
  initialEntries: [""],
});
describe("text input", () => {
  it("text input on the screen", () => {
    const utils = render(<RouterProvider router={router} />);
    expect(utils.getByTestId("text-input")).toBeInTheDocument();
  });
  it("text input value changed", () => {
    const utils = render(<RouterProvider router={router} />);
    const input = utils.getByTestId("text-input") as HTMLInputElement;
    fireEvent.change(utils.getByTestId("text-input"), {
      target: { value: "e" },
    });
    expect(input.value).toEqual("e");
  });
});
