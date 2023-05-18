import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductForm from './ProductForm'
import ProductList from './ProductList'

const Main = () => {
    const [productList, setProductList] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res => {
                setProductList(res.data)
            })
            .catch((err)=>console.log(err))
    }, [])
    const removeFromDom = productId => {
        axios.delete("http://localhost:8000/api/product/" + productId)
        .then((res)=>{
            console.log(res)
            console.log(res.data)
            setProductList(productList.filter(product=> product._id !== productId))
        })
        .catch((err)=>console.log(err))
        
    }
   const createProduct = productParam => {
        axios.post('http://localhost:8000/api/product', productParam)
            .then(res => {
                console.log(res);
                console.log(res.data)
                setProductList([...productList, res.data])
            })
            .catch((err)=>console.log(err))
    }
    return (
        <div>
            <ProductForm onSubmit={createProduct} prouctName=""/>
            <hr />
            <ProductList ProductList={productList} removeFromDom={removeFromDom} />
        </div>
    )
}
export default Main

