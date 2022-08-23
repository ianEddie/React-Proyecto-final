import React from "react";
import { Link } from "react-router-dom";
//

const Item = ({ tittle, img, id }) => {
  return (
    <div className="bg-black outline outline-4 rounded-xl outline-slate-200 w-1/5 p-1 text-white shadow-xl shadow-black">
      <Link to={`/item/${id}`}>
        <img src={img} className="w-full h-[90%] rounded-xl cursor"/>
      </Link>
      <Link to={`/item/${id}`}>
        <div className="h-[10%] flex items-center justify-center text-center tracking-[1px] cursor">
        <h3 className="text-sm">{tittle}</h3>
        </div>
      </Link>
    </div>
  );
};

export default Item;
