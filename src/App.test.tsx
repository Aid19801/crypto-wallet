import React from "react";
import { render } from "@testing-library/react";
import { App } from "./App";

jest.mock("./components/Wallet", () => {
  return "mock-wallet";
});

describe("App", () => {
  it("should render without exploding", () => {
    const { getByText } = render(<App />);
    expect(getByText("Loot Check")).toBeDefined();
  });
});
