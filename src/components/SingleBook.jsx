import { useParams, Link } from "react-router-dom";
import BookCheckout from "./BookCheckout";

const SingleBook = ({books}) => {
    const params = useParams()
    const id = params.id*1

    
    const book = books.find ((book)=> {
        return book.id === id
    }) 

if (!book) {
    return null
}
    
    return (
        <div>
            <h2>{book.title}</h2>
            <div className='singleBookCover'>
                <img className='single' src={book.coverimage}/>
                </div>
             <h3>Author: {book.author}</h3>
             <h4>{book.description}</h4>
            <h3>available: </h3>

            <button onClick="handleCheckout">Check Me Out!</button>
            <hr/>

            <Link to='/books'>
            Back to The Library.
            </Link>

            
        </div>
    )
}

export default SingleBook