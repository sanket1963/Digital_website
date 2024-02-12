import React from "react";
import ProductCard from "./ProductCard.tsx";

const Products = [
  
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
 

];

const NewArrival = () => {
  return (
    <div className="container mt-32 ">
      <div className="sm:flex justify-between items-center">
        <h2 className="text-4xl font-medium">New Arrival</h2>

      
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

export default NewArrival;
