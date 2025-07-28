import { Link } from 'react-router-dom'
import './ProductCard.css'
import { IoStar } from 'react-icons/io5'

function ProductCard({ product }) {
    return (
        <Link key={product.id} to={`/products/${product.id}`}>
            <div className='product-card'>
                <img src={product.image} />
                <span className='product-category'>{product.category}</span>
                <div className='product-rating-container'>
                    <IoStar color='#ffc400' />
                    <span>{product.rating.rate}</span>
                </div>
                <span className='product-title'>{product.title}</span>
                <span className='product-price'>{'$' + product.price}</span>
            </div>
        </Link>
    )
}

export default ProductCard