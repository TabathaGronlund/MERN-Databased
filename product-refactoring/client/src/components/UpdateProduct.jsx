import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ProductForm from './ProductForm'

const UpdateProduct = (
    s) => {
    const { id } = useParams()

    const [title, setTitle] = useState({})

    const [price, setPrice] = useState({})

    const [description, setDescription] = useState({})

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data)
                setPrice (res.data)
                setDescription(res.data)
                ;
            })
    }, [])
    const updateProduct = productParam => {
        axios.put('http://localhost:8000/api/product/' + id, 
        productParam)
            .then(res => console.log(res))
    }
    return (
        <div>
            {
            loaded && <ProductForm onSubmit={UpdateProduct} productTitle={title} productPrice={price}
            productDescription={description}
            />
           
            }
        </div>
    )
}
export default UpdateProduct

