import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'


const DisplayAll = (props) => {

    const [authorList, setAuthorList] = useState([])
    const navigate = useNavigate()


    useEffect(() => {
        axios.get("http://localhost:8000/api/author")
            .then((res) => {
                setAuthorList(res.data)
            })
            .catch((err) =>
                console.log(err)
            )
    }, [])


    const deleteFilter = (idAuthor) => {

        axios.delete(`http://localhost:8000/api/author/${idAuthor}`)
            .then((res) => {
                console.log(res.data)
                const newList = authorList.filter((author, index) => author._id !== idAuthor)
                setAuthorList(newList)
            })
            .catch((err) => {
                console.log(err)
            })
    }



    return (
        <div>
            <h1>Favortie Author</h1>
            <p>We have Quotes by:</p>
            <Link to={`/author`}>Add an Author</Link>
            <table className="center-table">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                {
                authorList
                .map((author, index) => (
                    <tr key={index}>
                        <td to={`/author/${author._id}`}>
                            {author.name}
                        </td>
                        <td><input className="submitdelete" type="submit" value="Delete Author" onClick={() => deleteFilter(author._id)} />

                        <input className="submitedit" type="submit" value="Edit Author" onClick={() => navigate(`/author/edit/${author._id}`)} />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default DisplayAll
