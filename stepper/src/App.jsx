import React from "react";
import Stepper from "./components/stepper";

const CHECKOUT_STEPS = [
  {
    name: "Customer Info",
    Component: () => <div>Provide Your Contact Details</div>,
  },
  {
    name: "Shipping Info",
    Component: () => <div>Provide Your Shipping Address</div>,
  },
  {
    name: "Payment",
    Component: () => <div>Complete Payment for your order</div>,
  },
  {
    name: "Delivered",
    Component: () => <div>Your Order has been delivered</div>,
  },
];

const App = () => {
  return (
    <div>
      <Stepper stepsConfig={CHECKOUT_STEPS} />
    </div>
  );
};

export default App;
