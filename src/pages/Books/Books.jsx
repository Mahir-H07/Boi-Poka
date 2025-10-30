

import React, { Suspense,  } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    // const [allbooks, setBooks] = useState([]);

    // useEffect(() => {
    //     fetch("bookData.json")
    //     .then(res => res.json())
    //     setBooks(data)
    //     // .then(data => {console.log(data)})

    // },[])


    // const bookPromise = fetch('./bookData.json')
    // .then(res => res.json())

    return (
        <div>
            <h1 className='text-3xl text-center p-6'>books</h1>
            <Suspense fallback={<span>Loading...</span>}>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {

                data.map((singleBook) => <Book key={singleBook.Id} singleBook={singleBook}></Book>)
            }
            </div>
            
            </Suspense>
        </div>
    );
};

export default Books;