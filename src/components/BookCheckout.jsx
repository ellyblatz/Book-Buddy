import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"

const BookCheckout = ({books, user, setUser, token}) =>{

    const params = useParams()
    const id = params.id*1

    const navigate = useNavigate()


    const book = books.find ((book)=> {
        return book.id === id
    }) 

    const handleCheckout = async (event) => {
        event.preventDefault()

        const loggedInToken = window.localStorage.getItem('token')

        if(loggedInToken) {
            const response = await axios.patch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${book.id}`, {available: false}, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${loggedInToken}`
                }
                })
                //console.log({user})
                 setUser({books: [...user.books], book})
                 navigate(`/account`)
              //  console.log(response)

        } else {
            throw 'no token'
        }

    }

    return (
        <div className="checkout">
            <button disabled={(book.available && id) ? false : true} onClick={handleCheckout}>
                Check Me Out!
            </button>

        </div>
    )


}

export default BookCheckout 