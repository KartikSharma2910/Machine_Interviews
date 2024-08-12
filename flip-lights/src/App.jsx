import React from "react";
import { useState } from "react";

const Cell = ({ filled, onClick, isDisabled }) => {
  return (
    <button
      type="button"
      disabled={isDisabled}
      onClick={onClick}
      className={filled ? "cell cell-activated" : "cell"}
    />
  );
};

const App = () => {
  const [order, setOrder] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);

  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  const deActivateCells = () => {
    setIsDeactivating(true);
    const timer = setInterval(() => {
      setOrder((prev) => {
        const newOrder = prev.slice();
        newOrder.pop();

        if (newOrder.length === 0) {
          clearInterval(timer);
          setIsDeactivating(false);
        }
        return newOrder;
      });
    }, 300);
  };

  const activateCells = (index) => {
    const newOrder = [...order, index];
    setOrder(newOrder);

    /** Deactivate Cells */
    if (newOrder.length === config.flat(1).filter(Boolean).length)
      deActivateCells();
  };

  return (
    <div className="wrapper">
      <div className="grid">
        {config
          .flat(1)
          .map((value, index) =>
            value ? (
              <Cell
                key={index}
                filled={order.includes(index)}
                isDisabled={order.includes(index) || isDeactivating}
                onClick={() => activateCells(index)}
              />
            ) : (
              <span />
            )
          )}
      </div>
    </div>
  );
};

export default App;
