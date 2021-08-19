import React, { useState, MouseEvent } from "react";
import { connect } from "react-redux";
import { deposit } from "../actions/balance";

interface WalletProps {
  balance: number | null;
  deposit: (arg0: number) => void;
}

type ReduxState = {
  balance: {
    balance: number;
  };
};

type EventObject = {
  target: {
    value: string;
  };
};
export function Wallet({ balance, deposit }: WalletProps) {
  const [inputAmount, setInputAmount] = useState<number | null>(null);

  const updateBalance = (event: EventObject) => {
    const num = JSON.parse(event.target.value);
    setInputAmount(num);
  };

  const handleDeposit = (event: MouseEvent) => {
    if (inputAmount) {
      deposit(inputAmount);
    }
    setInputAmount(null);
  };

  return (
    <div>
      <h3>Wallet balance: {balance}</h3>
      <br />
      <input
        type="text"
        value={inputAmount || ""}
        name="amount"
        data-testid="test-amount"
        onChange={updateBalance}
      />
      <button className="btn-deposit" onClick={handleDeposit}>
        Deposit
      </button>
    </div>
  );
}

const mapStateToProps = (state: ReduxState) => ({
  balance: state.balance.balance,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    deposit: (n: number) => dispatch(deposit(n)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
