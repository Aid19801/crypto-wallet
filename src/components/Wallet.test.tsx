import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Wallet } from "./Wallet";
import userEvent from "@testing-library/user-event";

describe("Wallet", () => {
  it("should render without exploding", () => {
    const mockProps = { balance: 30 };
    const { getByText } = render(<Wallet {...mockProps} />);
    expect(getByText("Wallet balance: 30")).toBeDefined();
  });
  it("should match the snapshot", () => {
    expect(Wallet).toMatchSnapshot();
  });
  it("should show an input to deposit or withdraw from", () => {
    render(<Wallet balance={100} />);
    expect(screen.getByRole("textbox")).toBeDefined();
  });

  describe("Wallet", () => {
    const userBalance: number = 25;

    beforeEach(() => {
      render(<Wallet balance={userBalance} />);
    });
    it("should enter a new figure in the input", async () => {
      userEvent.type(screen.getByRole("textbox"), "100");
      await waitFor(() => {
        const el = screen.getByDisplayValue("100");
        expect(el).toBeTruthy();
      });
    });
  });
});
