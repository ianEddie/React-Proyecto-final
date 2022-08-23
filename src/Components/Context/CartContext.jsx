import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item, qty) => {
    let found = cartList.find((product) => product.idItem === item.id);
    if (found === undefined) {
      setCartList([
        ...cartList,
        {
          idItem: item.id,
          imgItem: item.img,
          nameItem: item.name,
          priceItem: item.price,
          qtyItem: qty,
        },
      ]);
    } else {
      found.qtyItem += qty;
    }
  };
  
  //* Item QTY
  const itemsQty = () => {
    let qtys = cartList.map((item) => item.qtyItem);
    return qtys.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
  };

  //* Remove List
  const removeList = () => {
    setCartList([]);
  };

  //* Remove Product
  const deleteItem = (id) => {
    let result = cartList.filter((item) => item.idItem != id);
    setCartList(result);
  };
  //* subTotal
  const subTotal = (idItem) => {
    let index = cartList.map((item) => item.idItem).indexOf(idItem);
    return cartList[index].priceItem * cartList[index].qtyItem;
  };
  //* Total
  const total = () => {
    let totalPerItem = cartList.map((item) => subTotal(item.idItem));
    return totalPerItem.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        removeList,
        deleteItem,
        subTotal,
        total,
        itemsQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
