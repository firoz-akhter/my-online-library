import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../css/Home.css"
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";




function BrowseBooks({ setViewedBook }) {
    const bookList = useSelector((store) => store.book.items)

    const [books, setBooks] = useState(bookList);


    const { category } = useParams()

    const navigate = useNavigate();

    useEffect(() => {
        if (category === undefined) {
            // console.log("this is undefined....")
            return;
        }
        if (category === "fiction") {
            let fiction = books.filter((book) => book.category === "Fiction");
            setBooks(fiction);
            // console.log("showing fiction books")
        }
        else if (category === "non-fiction") {
            let nonFiction = books.filter((book) => book.category === "Non-Fiction");
            setBooks(nonFiction);
            // console.log("showing non fiction books")
        }
        else if (category === "sci-fi") {
            let sciFi = books.filter((book) => book.category === "Sci-Fi");
            setBooks(sciFi)
            // console.log("showing sciFi")
        }

    }, [])

    function handleAll() {
        setBooks(bookList)
        navigate("/browseBooks")
    }

    function handleFiction() {
        let fiction = [];
        for (let i = 0; i < bookList.length; i++) {
            if (bookList[i].category === "Fiction") {
                fiction.push(bookList[i]);
            }
        }
        setBooks(fiction);
        let fic = "fiction";
        navigate(`/browseBooks/${fic}`);
    }

    function handleNonFiction() {
        let nonFiction = [];
        for (let i = 0; i < bookList.length; i++) {
            if (bookList[i].category === "Non-Fiction") {
                nonFiction.push(bookList[i]);
            }
        }
        setBooks(nonFiction);
        let nonFic = "non-fiction";
        navigate(`/browseBooks/${nonFic}`)
    }

    function handleSciFi() {
        let sciFi = [];
        for (let i = 0; i < bookList.length; i++) {
            if (bookList[i].category === "Sci-Fi") {
                sciFi.push(bookList[i]);
            }
        }
        setBooks(sciFi);
        let sci = "Sci-Fi";
        navigate(`/browseBooks/${sci}`)

    }

    function handleChange(e) {
        let query = e.target.value;
        if (query === "") {
            setBooks(bookList);
        }

        const lowerCaseQuery = query.toLowerCase();

        let newList = bookList.filter(
            (book) =>
                book.title.toLowerCase().includes(lowerCaseQuery) || 
                book.author.toLowerCase().includes(lowerCaseQuery)
        );

        setBooks(newList);
    }






    return (
        <div>
            <Navbar />
            <h1 className="heading">Browse Books</h1>
            {/* <img src={Dune} alt="" /> */}
            <div className="buttons-div">
                <input onChange={handleChange} type="text" className="search-input" placeholder="Search for book" />
                <button onClick={handleAll}>All</button>
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



export default BrowseBooks;