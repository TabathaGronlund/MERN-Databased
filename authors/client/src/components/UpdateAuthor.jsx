
import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { Link } from "react-router-dom"

const UpdateAuthor = (props) => {
    const { id } = useParams()

    const [name, setName] = useState("")



    const navigate = useNavigate()


    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then((res) => {
                setName(res.data.name)
            })
            .catch((err) => console.log(err))
    }, [id])

    const submitHandler = (e) => {
        e.preventDefault()

        axios.patch(`http://localhost:8000/api/author/${id}`, {
            name,
        })
            .then((res) => {
                navigate("/")
            })
            .catch((err) => {
                console.log(err)
            })
    }


    return (
        <div className="form-container">
            <h1>Favortie Author</h1>
            <p>Update Your Author</p>
            <Link to={`/`}>Home</Link>
            <form onSubmit={submitHandler}>
                <div className="updateform">
                    <label>Name:</label>
                    <input onChange={(e) => setName(e.target.value)} value={name} name="name" type="text"></input>
                </div>
                <input className="submitupdate" type="submit" value="Update" />
            </form>
        </div>
    )
}


export default UpdateAuthor;
