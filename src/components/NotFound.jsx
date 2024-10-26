import React from "react"
import { Link } from "react-router-dom"
import "../css/NotFound.css"


function NotFound() {

    return (
        <div className="notFound-container">
            <Link className="button" to="/">Back to Home Page</Link>
            <div>Not Found 404:</div>
        </div>
    )
}



export default NotFound