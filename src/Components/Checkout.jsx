import React from "react";
import spider from "../Assets/Images/spider-checkout.gif";


const Checkout = () => {
  return (
    
    <div className="h-[92vh] w-full bg-checkout">
    <div className="w-full h-[92vh] backdrop-blur-[5px] backdrop-brightness-[.2] ">
      <div className="w-full flex gap-2 justify-center h-[10%] items-center text-2xl">
        <h1 className="neon">Thanks</h1>
        <h1 className="flux">for</h1>
        <h1 className="neon">Buying</h1>
      </div>
      <div className="w-full flex justify-center">
        <img src={spider} alt="gif" className="h-[30em]"/>
      </div>
    </div>
    </div>
    
  );
};

export default Checkout;
