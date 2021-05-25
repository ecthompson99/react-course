import { useState, useEffect, createContext } from "react";

export const AppContext = createContext();

const items = [
  {
    name: "Sushi",
    description: "Finest fish and veggies",
    price: "22.99",
  },
  {
    name: "Schnitzel",
    description: "A german specialty!",
    price: "16.50",
  },
  {
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: "12.99",
  },
  {
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: "18.99",
  },
];

export const AppContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [itemCount, setItemCount] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [amount, setAmount] = useState({
    Sushi: 0,
    Schnitzel: 0,
    "Barbecue Burger": 0,
    "Green Bowl": 0,
  });

  const onAddItem = ({ item, amount }) => {
    if (amount >= 0) {
      setCartItems((prevList) => {
        return {
          ...prevList,
          [item.name]: {
            name: item.name,
            price: item.price,
            amount: amount[item.name],
          },
        };
      });
      setAmount((prevState) => {
        return { ...prevState, [item.name]: amount };
      });
    }
  };

  const amountHandler = (e, name) => {
    const value = e.target.value;
    setAmount((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  useEffect(() => {
    const count = Object.values(amount).reduce((p, n) => p + n, 0);
    setItemCount(count);
  }, [cartItems]);

  const toggleCartDisplay = () => {
    setShowCart((prevState) => !prevState);
  };

  return (
    <AppContext.Provider
      value={{
        menuItems: items,
        cartItems: cartItems,
        showCart: showCart,
        itemCount: itemCount,
        amount: amount,
        amountHandler: amountHandler,
        onAddItem: onAddItem,
        toggleCartDisplay: toggleCartDisplay,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
