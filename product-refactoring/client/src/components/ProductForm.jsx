import React, { useState } from 'react'
const ProductForm = (props) => {
    const { initialTitle, initialPrice, initialDescription } = props;

    const [title, setTitle] = useState(initialTitle)

    const [price, setPrice] = useState(initialPrice)

    const [description, setDescription] = useState(initialDescription)

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmit({})
    }
    const onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state)
        this.state({ 
            title:"",
            price:"",
            description:""
        });
    }


    return (
        
        <form className="product-form" onSubmit={onSubmitHandler}>
            <p>
                    <label>Title</label>
                    <input value={title} type="text" name="title" onChange={(e) => setTitle(e.target.value)}/>
            </p>
            <p>
                    <label>Price</label>
                    <input value={price} type="number" name="price" onChange={(e) => setPrice(e.target.value)}/>
            </p>
            <p>
                    <label>Description</label>
                    <input value={description} type="text" name="description" onChange={(e) => setDescription(e.target.value)}/>
            </p>
                <input type="submit"/>
        </form>

        
    )
    }
export default ProductForm;

