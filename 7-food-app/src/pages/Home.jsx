import { useContext } from "react";
import { AppContext } from "../state/Context";

import "./Home.css";
import Navbar from "../components/Navbar/Navbar";
import Card from "../components/Card/Card";
import Menu from "../components/Menu/Menu";
import CartModal from "../components/CartModal/CartModal";

const Home = () => {
  const { showCart } = useContext(AppContext);
  return (
    <div className="Home">
      {showCart && <CartModal />}
      <Navbar />
      <Card />
      <Menu />
    </div>
  );
};

export default Home;
