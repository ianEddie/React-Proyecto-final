import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./Context/CartContext";
import CarWidget from "./CarWidget";
import { useContext } from "react";
// Icons
import Logo from "../Assets/Icons/logo.png";
import Spiderman from "../Assets/Icons/spiderman.png"
import Venom from "../Assets/Icons/venom.png"
//

const Navbar = () => {
  const test = useContext(CartContext);

  return (
    <header className="flex justify-center w-full h-[8vh] backdrop-blur-[15px] bg-black/80 border-b-[1px] border-white/20">
      
      <div className="w-1/3 px-3 flex items-center py-1 gap-2">
        <Link to={"/category/1"}><img src={Spiderman} alt="spiderman" className="h-10 w-10 cursor"/></Link>
        <Link to={"/category/2"}><img src={Venom} alt="venom" className="h-10 w-10 cursor"/></Link>
      </div>

      <div className="w-1/3 flex justify-center p-1">
        <Link to={"/"}>
          <img src={Logo} alt="logo" className="w-16 h-full cursor"/>
        </Link>
      </div>

      <div className="w-1/3 flex justify-end items-center px-3 gap-1">
        <Link to={"/cart"}>
          <CarWidget />
        </Link>
        <div className="bg-red-600 text-white w-5 h-5 rounded-full flex justify-center items-center p-3 relative bottom-3">{test.itemsQty()}</div>
      </div>
   
    </header>
  );
};

export default Navbar;
