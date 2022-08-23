import React from "react";
import { useEffect, useState } from "react";
//

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(initial);
  }, []);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };
  return (
    <div className="w-full flex px-3 gap-3 clase">
      <div className="w-1/5 flex p-1 justify-center border border-gray-200/80 h-1/3 rounded-2xl bg-white/10 ">
        <button
          onClick={decrement}
          className="bg-red-700 w-1/3 rounded-full flex justify-center items-center text-xl hover:bg-amber-300 hover:text-red-900 transition-all duration-300"
        >
          -
        </button>
        <div className="w-1/3 flex justify-center items-center text-white">
          {count}
        </div>
        <button
          onClick={increment}
          className="bg-red-700 rounded-full w-1/3 flex justify-center items-center  text-xl hover:bg-amber-300 hover:text-red-90 transition-all duration-300"
        >
          +
        </button>
      </div>
      {stock >= 1 ? (
        <button
          onClick={() => onAdd(count)}
          className="text-white border border-gray-200/80 bg-white/10 text-sm w-24 h-1/3 rounded-full flex justify-center items-center hover:bg-amber-300 hover:text-red-900 hover:text-lg transition-all duration-300"
        >
          Add to Cart
        </button>
      ) : (
        <div className="w-4/5 flex gap-2 px-5">
      <h1 className="neon text-lg">no</h1>
      <h1 className="flux text-lg">stock !</h1>
        </div>
      )}
    </div>
  );
};

export default ItemCount;
