

import React, { useEffect, useState } from 'react';

const Books = () => {
    const [allbooks, setBooks] = useState([]);

    useEffect(() => {
        fetch("bookData.json")
        .then(res => res.json())
        setBooks(data)
        // .then(data => {console.log(data)})

    },[])
    return (
        <div>
            <h1>books</h1>
        </div>
    );
};

export default Books;