import React, { useState } from "react";
import Navbar from "./Navbar";
import "../css/Home.css"
import { Link } from "react-router-dom";











function Home({popularBooks, setViewedBook}) {
    const [books, setBooks] = useState(popularBooks);

    function handleFiction() {
        let fiction = [];
        for (let i = 0; i < popularBooks.length; i++) {
            if (popularBooks[i].category === "Fiction") {
                fiction.push(popularBooks[i]);
            }
        }
        setBooks(fiction);
    }

    function handleNonFiction() {
        let nonFiction = [];
        for (let i = 0; i < popularBooks.length; i++) {
            if (popularBooks[i].category === "Non-Fiction") {
                nonFiction.push(popularBooks[i]);
            }
        }
        setBooks(nonFiction);
    }

    function handleSciFi() {
        let sciFi = [];
        for (let i = 0; i < popularBooks.length; i++) {
            if (popularBooks[i].category === "Sci-Fi") {
                sciFi.push(popularBooks[i]);
            }
        }
        setBooks(sciFi);
    }






    return (
        <div>
            <Navbar />
            <h1 className="heading">Welcome to my online library</h1>
            {/* <img src={Dune} alt="" /> */}
            <div className="buttons-div">
                <button onClick={() => setBooks(popularBooks)}>All</button>
                <button onClick={handleFiction}>Fiction</button>
                <button onClick={handleNonFiction}>Non-Fiction</button>
                <button onClick={handleSciFi}>Sci-Fi</button>
            </div>

            {/* display a list of popular books */}
            <div className="books-container">
                {
                    books.map((book) => {
                        return <div className="book" key={book.id}>
                            {/* show title, author, description rating and image */}
                            <p>{book.title}</p>
                            <img className="img" src={book.image} />
                            <Link className="link" onClick={() => setViewedBook(book)} to={`bookDetails/${book.id}`}>View Details...</Link>
                            
                        </div>
                    })
                }
            </div>
        </div>
    )
}



export default Home;