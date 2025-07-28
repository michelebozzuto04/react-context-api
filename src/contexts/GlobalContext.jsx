import { createContext, useState, useEffect, useContext } from "react";

const GlobalContext = createContext()


function GlobalProvider({ children }) {


    const url = 'https://fakestoreapi.com/products';
    const [products, setProducts] = useState(null);


    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data);
            })
    }, [])


    return (
        <GlobalContext.Provider value={{
            products,
            setProducts,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

function useGlobalContext() {
    return useContext(GlobalContext)
}


export { GlobalProvider, useGlobalContext }