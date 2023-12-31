import { Link } from "react-router-dom"
import React from "react"



const Books = ({books}) => {

    return(
        <div>

            <h1>Check out our Books: </h1>
            <div className="bookTitles">
            <ul> { 
                books.map((book) =>{
                    return (
                        <li key={book.id}>
                           <Link to ={`/books/${book.id}`}>
                           {book.title}
                            </Link> 
                        </li>
                    )
                })
        
                    
                }

            </ul>
            </div>
        
        </div>
    )
}

export default Books