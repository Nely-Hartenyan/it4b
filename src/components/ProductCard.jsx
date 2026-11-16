import { Link, useLocation } from "react-router";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({product}){
    const location = useLocation();
    const {removeFromCart,addToCart} = useContext(CartContext)

    const isCartPage = location.pathname === '/cart'
    
    return (
        <div className="overflow-hidden rounded-2xl bg-white shadow-md w-50  hover:-translate-y-1">
            <img
                src={product.image}
                alt={product.name}
                className="h-56 w-56"
            />

            <div className="p-5 text-center">
                <p>{product.name}</p>
                <p className="mb-5">{product.price.toLocaleString()} AMD</p>
                 <Link
            to={`/products/${product.id}`}
            className="rounded-lg border mt-4 px-4 py-2 text-sm hover:bg-gray-100"
          >
            View Details
          </Link>
          {isCartPage ? (
            <button 
                onClick={() => removeFromCart(product) }
                className="bg-black text-white mt-4 rounded-lg px-2 my-2 cursor-pointer w-full hover:bg-gray-600">   
            Remove</button>

          ) : (
                <button 
                onClick={() => addToCart(product) }
                className="bg-black text-white mt-4 rounded-lg px-2 my-2 cursor-pointer w-full hover:bg-gray-600">
                    Add to Cart</button>
)}
            </div>
        </div>
    )
}
export default ProductCard;