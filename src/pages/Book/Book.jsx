

// import React, { use } from 'react';
import { IoIosStarHalf } from "react-icons/io";
import { Link } from "react-router";

const Book = ({singleBook}) => {
    // const data = use(bookPromise)
    // console.log(data)
    
    const {bookName,image,bookId,rating,category,tags,yearOfPublishing,publisher
} = singleBook;
    return (

        <Link to={`/bookDetails/${bookId}`}>
         <div class="card bg-base-100 w-96 shadow-sm border p-6 shadow">
  <figure className='p-4 bg-gray-500 w-2/3 mx-auto'>
    <img className='h-[166px]'

      src={image}
       />
  </figure>
  <div class="card-body">
   <div className="flex justify-center gap-9">
     {
      tags.map(tag=> <button >{tag}</button>)
    }
   </div>
    <h2 class="card-title">
      {bookName}
      <div class="badge badge-secondary">{yearOfPublishing}</div>
    </h2>
    <p>Book By:{publisher}</p>
    <div className="border-t-2 border-dashed">

    </div>

    <div class="card-actions justify-end">
      <div class="badge badge-outline">{category}</div>
      <div class="badge badge-outline">{rating}<IoIosStarHalf /></div>
    </div>
  </div>
</div></Link>
       
    );
};

export default Book;