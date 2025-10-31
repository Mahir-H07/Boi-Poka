


import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../Utility/addToDB';

const BookDetails = () => {

  const { id } = useParams();
  const bookID = parseInt(id);
  const data = useLoaderData()

  const singleBook = data.find(book => book.bookId === bookID)
  const { bookName, image } = singleBook;



  const handleMarkAsRead = id => {

    addToStoreDB(id)

  }



  return (
    <div className='w-2/3 mx-auto'>
      <img className='w-48' src={image} alt="" />
      <h5>{bookName}</h5>
      <button onClick={() => handleMarkAsRead(id)} className="btn btn-accent m-2">Mark As Read</button>
      <button className="btn btn-info m-2">Add To Wishlist</button>
    </div>
  );
};

export default BookDetails;