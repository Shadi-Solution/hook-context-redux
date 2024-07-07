import { Trash, Heart } from "lucide-react";

import { useSelector } from "react-redux";
import { cartSelector } from "../../slices/CartSlice";

function Cart() {
  console.log("Im cart component");
  const { cartItems } = useSelector(cartSelector);

  return (
    <div className="mx-auto flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2">
      <h2 className="text-3xl font-bold">Your cart</h2>
      <ul className="flex flex-col divide-y divide-gray-200">
        {cartItems.map((cartItem) => (
          <li
            key={cartItem.key}
            className="flex flex-col py-6 sm:flex-row sm:justify-between"
          >
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
                src={cartItem.imgUrl}
                alt={cartItem.name}
              />
              <div className="flex w-full flex-col justify-between pb-4">
                <div className="flex w-full justify-between space-x-2 pb-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                      {cartItem.name}
                    </h3>
                    <p className="text-sm">{cartItem.color}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">{cartItem.price}</p>
                  </div>
                </div>
                <div className="flex divide-x text-sm">
                  <button
                    type="button"
                    className="flex items-center space-x-2 px-2 py-1 pl-0"
                  >
                    <Trash size={16} />
                    <span>Remove</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center space-x-2 px-2 py-1"
                  >
                    <Heart size={16} />
                    <span>Add to favorites</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
