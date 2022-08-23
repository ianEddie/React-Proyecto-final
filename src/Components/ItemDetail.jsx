import React, { useContext, useState } from "react";
import { CartContext } from "./Context/CartContext";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import loader from "../Assets/Icons/loader.png";
//

const ItemDetail = ({ item }) => {
  const [itemCount, setItemCount] = useState(0);
  const test = useContext(CartContext);

  const onAdd = (qty) => {
    setItemCount(qty);
    test.addToCart(item, qty);
  };
  return (
    <div className="bgimg w-full">
      {item.img ? (
        <section
          key={item.id}
          className="flex justify-center py-10 gap-3 h-[92vh] backdrop-blur-[2px] backdrop-brightness-[.5]"
        >
          <img
            src={item.img}
            className="w-1/4 rounded-sm border border-white/20 shadow-xl shadow-black"
          />
          <div className="backdrop-blur-[10px] bg-black/[85%] rounded-xl border border-white/20 w-1/2 flex flex-wrap">
            <div className="w-full flex justify-between p-3">
              <h1 className="text-xl text-white underline decoration-red-700  underline-offset-4">
                {item.name}
              </h1>
              <span className="bg-red-600 text-white rounded-full w-8 h-8 p-5 flex justify-center items-center">
                ${item.price}
              </span>
            </div>
            <div className="flex w-full">
              <article className="w-1/2 flex justify-center text-center flex-wrap items-center">
                <h3 className="w-full text-xl text-white underline underline-offset-4 decoration-red-800">
                  Published
                </h3>
                <h3 className="w-full text-sm text-white/90">
                  {item.published}
                </h3>
              </article>
              <article className="w-1/2 flex flex-wrap justify-center text-center items-center">
                <h3 className="w-full text-xl text-white underline underline-offset-4 decoration-red-800">
                  Writter
                </h3>
                <h3 className="w-full text-sm text-white/90">{item.writter}</h3>
              </article>
            </div>
            <article className="flex w-full py-5 ">
              <div className="w-1/2 flex justify-center items-center text-center flex-wrap">
                <h3 className="w-full text-lg text-white underline underline-offset-4 decoration-red-800">
                  Artist
                </h3>
                <h3 className="w-full text-sm text-white/90">{item.artist}</h3>
              </div>
              <div className="w-1/2 flex justify-center items-center text-center flex-wrap">
                <h3 className="w-full text-lg text-white underline underline-offset-4 decoration-red-800">
                  Cover Artist
                </h3>
                <h3 className="text-sm text-white/90">{item.coverArtist}</h3>
              </div>
            </article>
            <article className="w-full px-3 text-white/90 py-3 flex">
              {item.description}
            </article>
            {itemCount === 0 ? (
              <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
            ) : (
              <div className="flex justify-center w-full">
                <Link to={"/cart"}>
                  <button className="text-white bg neon text-xl tracking-[1px] cursor">
                    Cart
                  </button>
                </Link>
              </div>
            )}
          </div>
        </section>
      ) : (
        <div className="w-full h-[92vh] flex justify-center items-center backdrop-blur-sm backdrop-brightness-[.4]">
          <img src={loader} alt="loading" className="rotate h-16" />
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
