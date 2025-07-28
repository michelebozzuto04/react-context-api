import { useEffect, useState } from "react"
import ProductList from "../components/ProductList/ProductList";
import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../contexts/GlobalContext";

export default function ProductsPage() {

    const { products } = useGlobalContext()

    return (
        <>
            <div className="jumbotron-secondary">
                <div>
                    <h1>ALL PRODUCTS</h1>
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                <ProductList products={products} />
            </div>
        </>
    )
}