function ProductCard({product,onAddToCart}){
    return (
        <div className="overflow-hidden rounded-2xl bg-white shadow-md w-50  hover:-translate-y-1">
            <img
                src={product.image}
                alt={product.name}
                className="h-56 w-56"
            />

            <div className="p-5 text-center">
                <p>{product.name}</p>
                <p>{product.price.toLocaleString()} AMD</p>
                <button 
                onClick={() => onAddToCart(product) }
                className="bg-black text-white rounded-lg px-2 my-2 cursor-pointer w-full hover:bg-gray-600">Add to Cart</button>

            </div>
        </div>
    )
}
export default ProductCard;