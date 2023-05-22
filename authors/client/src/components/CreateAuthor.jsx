import React, { useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'


const CreateAuthor = (props) => {

    const [name, setName] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/author", {
        name,
        })
            .then((res) => {
                setName("")
            })
            .catch((err) => {
                console.log(err)
            })
    }


    return (
        <div>
            <h1>Favorite Author</h1>
            <p>Who is your favorite Author?</p>
            <Link to={`/`}>Home</Link>

            <form className="author-form" onSubmit={submitHandler}>
                <div className="author-title">
                    <label>Name:</label>
                    <input value={name} type="text" name="name" onChange={(e) => setName(e.target.value)}/>
                </div>
                <input className="sumbit-author" type="submit" value="Create"/>
            </form>
        </div>
    )
}

export default CreateAuthor

