import React, { useState } from "react";
import Navbar from "./Navbar";
import "../css/AddBook.css"
import { addOneBook } from "../utils/bookSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


let newBookFrame = {
    id: "",
    title: "",
    author: "",
    description: "",
    rating: "",
    category: "",
    image: "https://i.pinimg.com/564x/6c/b0/12/6cb012478fd05f4ee96f81c6762be824.jpg"
}


function AddBook() {
    // zrurt nhi is bookList ko store se leke ane ki
    // const bookList = useSelector((store) => store.book.items)
    const [newBook, setNewBook] = useState(newBookFrame);
    // console.log(newBook)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // let img = "https://i.pinimg.com/564x/6c/b0/12/6cb012478fd05f4ee96f81c6762be824.jpg"

    function handleSubmit(e) {
        e.preventDefault();
        console.log(newBook)
        if (newBook.title === "") {
            alert("Title can't be empty");
            return;
        }
        if (newBook.author === "") {
            alert("author can't be empty");
            return;
        }
        if (newBook.description === "") {
            alert("Description can't be empty");
            return;
        }
        if (newBook.rating === "") {
            alert("Rating can't be empty");
            return;
        }
        if (parseFloat(newBook.rating).toString() !== newBook.rating || (1.0 > parseFloat(newBook.rating) || parseFloat(newBook.rating) > 5.0)) {
            alert("rating should be an integer between 1 to 5");
            return;
        }
        if (newBook.category === "") {
            alert("Category can't be empty");
            return;
        }

        // insert this new book to bookList
        newBook.id = Date.now();
        // that's where I will run addBook from redux store
        // bookList.push(newBook)
        dispatch(addOneBook(newBook))

        setNewBook(newBookFrame);
        navigate("/browseBooks")

    }

    function changeHandler(e) {

        setNewBook((prev) => {
            const { name, value, type } = e.target;
            console.log(name)
            console.log(value)
            // console.log(type)
            return {
                ...prev,
                [name]: value,
            };
        });
    }



    return (
        <div>
            <Navbar />
            <div className="form-container">
                <form action="">
                    <h2 className="form-heading">Add Book</h2>
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" id="title" value={newBook.title} onChange={changeHandler} />
                    <label htmlFor="author">Author:</label>
                    <input type="text" name="author" id="author" value={newBook.author} onChange={changeHandler} />
                    <label htmlFor="description">Description:</label>
                    <input type="text" name="description" id="description" value={newBook.description} onChange={changeHandler} />
                    <label htmlFor="rating">Rating:</label>
                    <input type="text" name="rating" id="rating" value={newBook.rating} onChange={changeHandler} />
                    {/* <label htmlFor="category">Category:</label>
                    <input type="text" name="category" id="category" value={newBook.category} onChange={changeHandler} /> */}

                    <label htmlFor="category">Choose a category: </label>
                    <select id="category" name="category" value={newBook.category} onChange={changeHandler}>
                        <option value="">--Select a Category--</option>
                        <option value="Fiction">Fiction</option>
                        <option value="Non-Fiction">Non-Fiction</option>
                        <option value="Sci-fi">Sci-fi</option>
                    </select>
                    <button className="add-btn" onClick={handleSubmit}>Save Book</button>
                </form>


            </div>
        </div>
    )
}


export default AddBook;