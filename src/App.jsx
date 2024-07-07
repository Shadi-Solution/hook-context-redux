import { useState } from "react";

import { Plus, Minus } from "lucide-react";

import { Cart, ProductList } from "./components";
import "./App.css";

function App() {
  console.log("I am boss and app component");
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-center text-3xl">
        lets learn useCallback and useMemo
      </h1>
      <div>
        <p className="text-xl font-bold">Count: {count} </p>

        <button
          type="button"
          className="rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={() => setCount(count - 1)}
        >
          <Minus className="h-4 w-4" />
        </button>
        <button
          type="button"
          className="rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={() => setCount(count + 1)}
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
      <h2 className="font-bold text-3xl pt-3">All Products</h2>
      <div className="flex">
        <ProductList />
        <Cart />
      </div>
    </>
  );
}

export default App;
