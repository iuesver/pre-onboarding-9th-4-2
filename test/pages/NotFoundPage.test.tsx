import { render } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { routerConfig } from "../../src/App";

const router = createMemoryRouter(routerConfig, {
  initialEntries: ["/notfound"],
});

describe("<NotFoundPage />", () => {
  const utils = render(<RouterProvider router={router} />);
  it("heading", () => {
    expect(utils.getByRole("heading")).toHaveTextContent("잘못된 접근입니다.");
  });
  it("paragraph", () => {
    expect(
      utils.getByText("웹 주소를 확인하시거나, 다시 시도해주세요.")
    ).toBeInTheDocument();
  });
  it("button", () => {
    expect(utils.getByRole("button")).toHaveTextContent("홈으로");
  });
});
