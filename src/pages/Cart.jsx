import { Link } from "react-router";
import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {

   const {cartCount,cart,totalPrice} = useContext(CartContext)
 
  if (cartCount === 0) {
    return (
      <section className="mx-auto max-w-4xl p-8 text-center">
        <h1 className="text-3xl font-bold">
          Your Cart is Empty
        </h1>

        <p className="mt-3 text-gray-500">
          You haven't added any products yet.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
        >
          Continue Shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-5xl p-8">
      <h1 className="text-3xl font-bold">
        Shopping Cart
      </h1>

      <div className="mt-6 space-y-4 flex">
        {cart.map((product) => (
         <ProductCard product={product}/>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between border-t pt-6">
        <span className="text-xl font-semibold">
          Total:
        </span>

        <span className="text-2xl font-bold">
          ${totalPrice}
        </span>
      </div>
    </section>
  );
}

export default Cart;