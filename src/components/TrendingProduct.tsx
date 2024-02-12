import React from "react";
import ProductCard from "./ProductCard.tsx";

const Products = [
  {
    id: 0,
    img: "headphone-1.png",
    category: "Headphones",
    title: "Gaming Headphone",
    price: "109.00",
  },
  {
    id: 1,
    img: "mobile-1.png",
    category: "Mobile Tablets",
    title: "Galaxy Android Tablet",
    price: "3000",
  },
  {
    id: 2,
    img: "headphone-2.png",
    category: "Headphones",
    title: "Wireless Headphones",
    price: "105.00",
  },
  {
    id: 3,
    img: "headphone-3.png",
    category: "Headphones",
    title: "Wireless Headphones",
    price: "299.00",
  },
  {
      id: 4,
      img: "mobile-2.png",
      category: "Mobile Tablets",
      title: "iPhones 14 pro",
      price: "1099.00",
    },
    {
      id: 5,
      img: "ipad-1.png",
      category: "Mobile Tablets",
      title: "Aple ipad Air",
      price: "300.00",
    },
  {
    id: 6,
    img: "cpu-1.png",
    category: "CPU Heat Pipes",
    title: "Gaming Virsion",
    price: "399.00",
  },
  {
    id: 7,
    img: "cpu-2.png",
    category: "CPU Heat Pipes",
    title: "Deep Cool Air Cooler",
    price: "80.00",
  },

];

const TrendingProduct = () => {
  return (
    <div className="container mt-32 ">
      <div className="sm:flex justify-between items-center">
        <h2 className="text-4xl font-medium">Trending Products</h2>

        <div className="text-gray-500 flex gap-4 text-xl">
          <div className="text-black">New</div>
          <div>Featured</div>
          <div>Top Sellers</div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-col-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
        {Products.map((item) => (
          <ProductCard key={item.id}
            id={item.id}
            img={item.img}
            category={item.category}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default TrendingProduct;
