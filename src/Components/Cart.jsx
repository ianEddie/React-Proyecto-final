import React, { useContext } from "react";
import { CartContext } from "./Context/CartContext";
import icon from "../Assets/Icons/trash.png";
import gif from "../Assets/Images/spider-cart.gif";
import arrow from "../Assets/Icons/back.png";
// Firebase
import {
  collection,
  doc,
  setDoc,
  serverTimestamp,
  updateDoc,
  increment,
} from "firebase/firestore";
import db from "./Utils/firebaseConfig";
import { Link } from "react-router-dom";
//

const Cart = () => {
  const test = useContext(CartContext);
  console.log(test.cartList);

  // Orders
  const createOrder = () => {
    const itemsForDB = test.cartList.map((item) => ({
      id: item.idItem,
      title: item.nameItem,
      price: item.priceItem,
      qty: item.qtyItem,
    }));

    let order = {
      buyer: {
        name: "ian Edddie",
        email: "ian@eddie.com",
        phone: "123456789",
      },
      total: test.total(),
      items: itemsForDB,
      date: serverTimestamp(),
    };

    test.cartList.forEach(async (item) => {
      const itemRef = doc(db, "comics", item.idItem);
      await updateDoc(itemRef, {
        stock: increment(-item.qtyItem),
      });
    });

    console.log(order);

    const createOrderInFirestore = async () => {
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    };

    createOrderInFirestore()
      .then((result) => console.log("Order Created"))
      .catch((err) => console.log(err));

    test.removeList();
  };

  //
  return (
    <div className="image w-full">
      <div className="w-full flex flex-wrap justify-center backdrop-blur-[3px] backdrop-brightness-[0.2]">
        <div className="w-full pl-20 pt-3">
          <Link to={"/"}>
            <img src={arrow} alt="back-icon" className="h-6 cursor" />
          </Link>
        </div>
        <section className="w-1/3 pb-3 min-h-[92vh] ">
          <div className="bg-white/30 border border-white/70 backdrop-blur-[20px] w-full text-white flex rounded-[1.5em] mb-2 pl-2">
            <div className="w-[25%] flex justify-center">comic</div>
            <div className="w-[25%] flex justify-center">Qty</div>
            <div className="w-[25%] flex justify-center">price</div>
            <div className="w-[25%] flex justify-center">subtotal</div>
          </div>
          {test.cartList.length > 0 ? (
            <section>
              <div>
                {test.cartList.length > 0 &&
                  test.cartList.map((item) => (
                    <article key={item.idItem} className="mb-2">
                      <section className="bg-black/50 w-full border-[2px] border-white/90 backdrop-brightness-50  backdrop-blur-[10px] flex justify-between py-3 pl-2 rounded-[1.5em] cursor-2 text-stone-300">
                        <div className="w-[25%] flex justify-center flex-wrap ">
                          <img
                            src={item.imgItem}
                            className="w-16 h-20 rounded-lg border shadow-lg shadow-gray-700/50"
                          />
                          <div className="w-full flex justify-center items-center text-center pt-4">
                            {item.nameItem}
                          </div>
                        </div>
                        <div className="w-[25%] flex justify-center ">
                          {" "}
                          {item.qtyItem}{" "}
                        </div>
                        <div className="w-[25%] flex justify-center">
                          {" "}
                          $ {item.priceItem}
                        </div>
                        <div className="w-[25%] flex justify-center">
                          {" "}
                          $ {test.subTotal(item.idItem)}{" "}
                        </div>
                      </section>
                      <section className="w-full flex justify-center py-1">
                        <div className=" w-full backdrop-brightness-50 backdrop-blur-[50px] flex justify-center py-1 rounded-xl border-[1px] border-white/40 shadow-lg shadow-white/20">
                          <button
                            className="shake cursor"
                            onClick={() => test.deleteItem(item.idItem)}
                          >
                            <img src={icon} alt="delete-icon" className="w-5" />
                          </button>
                        </div>
                      </section>
                    </article>
                  ))}
              </div>

              {test.cartList.length > 0 && (
                <section className="flex gap-3 justify-center p-2 backdrop-brightness-50 backdrop-blur-[15px] border border-gray-400 rounded-xl bg-white/20 shadow-sm shadow-white/30">
                  <div className="w-1/3 flex justify-center items-center">
                    <button
                      onClick={test.removeList}
                      className="button h-8 w-[80%] text-[13px] cursor"
                    >
                      Remove All
                    </button>
                  </div>
                  {test.cartList.length > 0 && (
                    <div className="w-1/3 flex justify-center items-center flex-wrap">
                      <span className="w-full flex justify-center text-lg tracking-[1px] text-black/90 underline underline-offset-4 decoration-red-700">
                        Total
                      </span>
                      <span className="w-full flex justify-center text-white underline decoration-amber-400 underline-offset-4">
                        $ {test.total()}
                      </span>
                    </div>
                  )}
                  <div className="w-1/3 flex justify-center items-center">
                    <Link to={"/checkout"}>
                      <button
                        onClick={createOrder}
                        className="button h-8 w-[60%] cursor"
                      >
                        Checkout
                      </button>
                    </Link>
                  </div>
                </section>
              )}
            </section>
          ) : (
            <div className=" marker:flex flex-wrap pt-5">
              <div className="w-full flex gap-2 justify-center">
                <h1 className="neon text-2xl">Empty</h1>
                <h1 className="flux text-2xl">Cart !</h1>
              </div>
              <div className="w-full flex justify-center">
                <img src={gif} alt="gif" className="w-1/2" />
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Cart;
