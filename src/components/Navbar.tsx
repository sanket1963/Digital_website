import React, {useState} from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineUser, AiOutlineShoppingCart  } from "react-icons/ai";
import {useAppSelector} from '../redux/hooks.ts'



const Navbar = ({ setShowCart }: any) => {
  const products = useAppSelector((state) => state.productsReducer);
  const cartCount = useAppSelector((state) => state.cartReducer.length);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  const handleSearch = () => {
    const results = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };
  return (
    <div className="pt-4 bg-white top-0 sticky">
      <div className="container">
        <div className="flex justify-between items-center">
        <div className="flex items-center">
            <img className="h-11 w-11 mr-6" src="/gadgets.png" alt="electronics icons" />
            <h1 className="text-3xl font-bold">Digital World</h1>
          </div>
          <div className="lg:flex hidden w-full max-w-[500px]">
            <input className="border-2 border-yellow-500 px-6 py-2 w-full" type="text" placeholder="Search for Products..." />
            <div className="bg-yellow-500 text-white text-[26px] grid place-items-center px-4">
            <BsSearch />
            </div>
          </div>
          <div className="flex gap-4 md:gap-8 items-center">
            <div className="md:flex gap-4 hidden">
              <div className="rounded-full border-4 p-1 border-gray-300 text-gray-500 text-[32px] h-[50px] grid place-items-center">
              <AiOutlineUser />
              </div>
              <div>
                <p className="text-gray-500">Hello, Sing in</p>
                <p className="font-medium">Your Account</p>
              </div>

            </div>
          <div className="text-gray-500 text-[32px] relative" onClick={() => setShowCart(true)}>
          <AiOutlineShoppingCart />

        <div className="absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center">{cartCount}</div>
          </div>
          </div>
        </div>
        <div className=" border-b border-gray-200 pt-4"/>
        </div>
    </div>
  );
};

export default Navbar;
