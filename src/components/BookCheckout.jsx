import axios from "axios";


const BookCheckout = ({book, user, token}) =>{

    const handleCheckout = async () => {
        try {
            const response = await axios.patch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/${book.id}`,
            {
                available: false,
            }, 
            {
                headers: {
                    'Content-Type': application/json,
                    Authorization: `Bearer ${token}`
                },
            }
            )
        if (response.status>= 200 && response.status <300) {
            const result= response.data
            //console.log(result)
        } else {
            throw new Error('Oops! Something went wrong.')
        }
        } catch (error) {
            console.log(error)
        }
    }
    







        return (
            <div>
                <h3>Am I Available?: {book.available ? 'Available' : 'Not Available'}</h3>
                <button onClick={handleCheckout}>Check Me Out!</button>
            </div>
        )
}

export default BookCheckout 