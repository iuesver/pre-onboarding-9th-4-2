import { render } from "@testing-library/react";
import App from "../src/App";

test("render App.tsx", () => {
  render(<App />);
  expect(true).toBe(true);
});
