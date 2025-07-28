import './ProductList.css'
import '../../index.css'
import { IoStar } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { OrbitProgress } from 'react-loading-indicators'
import ProductCard from '../ProductCard/ProductCard'

export default function ProductList({ products }) {
    return (
        <div className="container">
            {products !== null ?
                <div className="product-grid">{
                    products.map((product) => {
                        return (
                            <ProductCard key={product.id} product={product} />
                        )
                    })}
                </div> :
                <div style={{ marginTop: 100 }}>
                    <OrbitProgress variant="split-disc" color="#27DEFF" size="medium" text="" textColor="" />
                </div>
            }
        </div>
    )
}