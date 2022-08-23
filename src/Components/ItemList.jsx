import React from "react";
import Item from "./Item";
import loader from "../Assets/Icons/loader.png";

const ItemList = ({ item }) => {
  return (
    <div className="flex flex-wrap gap-5 justify-center py-5 backdrop-brightness-[.4] w-full">
      {item.length > 0 ? (
        item.map((i) => (
          <Item
            key={i.id}
            tittle={i.name}
            artist={i.artist}
            img={i.img}
            writter={i.writter}
            published={i.published}
            id={i.id}
          />
        ))
      ) : (
        <div className="w-full h-[86.1vh] flex justify-center items-center">
          <img src={loader} alt="loading" className="rotate h-16" />
        </div>
      )}
    </div>
  );
};

export default ItemList;
