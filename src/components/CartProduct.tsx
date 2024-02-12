import React from 'react'
import { useAppDispatch } from "../redux/hooks.ts";
import { RxCross1 } from "react-icons/rx";
import { removeFromCart } from "../redux/features/cartSlice.ts";

interface propsType {
  id: number;
  img: string;
  title: string;
  Price: string;
  quantity: number;
}

const CartProduct: React.FC<propsType> = ({
  id,
  img,
  title,
  Price,
  quantity,
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-between item-center">
      <div className="flex items-center gap-4">
        <img className="h-[80px]" src={img} alt={title} />
        <div className="space-y-2">
          <h3 className="font-medium">{title}</h3>
          <p className="text-gray-600 text-[14px]">
            {quantity} x $ {Price}.00
          </p>
        </div>
      </div>
      <RxCross1
        className="cursor-pointer"
        onClick={() => dispatch(removeFromCart(id))}
      />
    </div>
  );
};

export default CartProduct;
