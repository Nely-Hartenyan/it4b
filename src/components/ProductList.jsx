import {products} from '../data/products'
import ProductCard from './ProductCard';

function ProductList({onAddToCart}){
    return (
        <section className='mt-2'>
            <div className='mb-5 text-center'>
                <h2 className='text-3xl font-bold text-gray-800'>Our products</h2>
                <p className='mt-2 text-gray-500'>Choose the perfect product for you</p>
            </div>
           <div className='flex gap-3 my-5  flex-wrap justify-center'>
             {
                products.map(item => (
                    <ProductCard
                        product={item}
                        key={item.id}
                        onAddToCart={onAddToCart}
                    />
                ))
             }
           </div>
        </section>
    )
}
export default ProductList