import React from "react"
import { useNavigate, useParams } from 'react-router-dom';
import "../css/BookDetails.css"



function BookDetails({ bookList }) {
    // let book = viewedBook;
    const navigate = useNavigate();

    const {id} = useParams();
    console.log(typeof id);

    let book = bookList.find((book) => book.id === parseInt(id))
    console.log(book);



    return (
        <div className="bookDetails-container">
            <button onClick={() => navigate(-1)}>Back to Browse</button>
            <div className="bookDetails">
                <p>{book.title}</p>
                <img height="400" src={book.image} />
                <div>
                    <p>Author: {book.author}</p>
                    <p>Rating: {book.rating}</p>
                    <p>Category: {book.category}</p>
                </div>
                <p>Description: {book.description}</p>

            </div>
        </div>

        // does not need navibation bar in it
    )
}


export default BookDetails