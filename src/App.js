import React, { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/hero.tsx";
import Feature from "./components/Feature.tsx";
import TrendingProduct from "./components/TrendingProduct.tsx";
import { Toaster } from "react-hot-toast";
import Banner from "./components/Banner.tsx";
import NewArrival from "./components/NewArrival.tsx";
import Cart from "./components/Cart.tsx";
import { Footer } from "./components/Footer.tsx";

const App = () => {


  const [showCart, setShowCart] = useState(false)
  return (
    <div>
      <Provider store={store}>
        <Navbar setShowCart={setShowCart} />
        {showCart && <Cart setShowCart={setShowCart} />}
        <Hero />
        <Feature />
        <TrendingProduct />
        <Banner/>
        <NewArrival/>
        <Footer/>
        <Toaster
  position="bottom-center"
  reverseOrder={false}
/>
      </Provider>
    </div>
  );
};

export default App;
