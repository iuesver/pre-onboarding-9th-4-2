import { render } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { routerConfig } from "../../src/App";

describe("<NotFoundPage />", () => {
  const router = createMemoryRouter(routerConfig, {
    initialEntries: ["/notfound"],
  });
  it("heading", () => {
    const { getByRole } = render(<RouterProvider router={router} />);
    expect(getByRole("heading")).toHaveTextContent("잘못된 접근입니다.");
  });
  it("paragraph", () => {
    const { getByText } = render(<RouterProvider router={router} />);
    expect(
      getByText("웹 주소를 확인하시거나, 다시 시도해주세요.")
    ).toBeInTheDocument();
  });
  it("button", () => {
    const { getByRole } = render(<RouterProvider router={router} />);
    expect(getByRole("button")).toHaveTextContent("홈으로");
  });
});
