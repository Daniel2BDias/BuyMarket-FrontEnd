import { Fragment, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import CheckOut from "../pages/CheckOut";
import Main from "../pages/Store";
import { CartContext } from "../contexts/carrinho";
import SellProduct from "../pages/Store/SellProduct";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />;
};

const RoutesApp = () => {

  const [cart, setCart] = useState();
  
  return (
    <CartContext.Provider value={{cart, setCart}}>
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/home" element={<Private Item={Home} />} />
          <Route path="/" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="*" element={<Signin />} />
          <Route exact path ="/check-out" element={<CheckOut />} />
          <Route path="/main" element={<Main />}/>
          <Route path="/cadastro-produto" element={<SellProduct />}></Route>
        </Routes>
      </Fragment>
    </BrowserRouter>
    </CartContext.Provider>
  );
};

export default RoutesApp;
