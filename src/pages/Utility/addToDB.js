

const getStoreBook = () => {

    const storedBookSTR = localStorage.getItem("readlist")

    if (storedBookSTR) {
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData;
    }
    else {
        return [];
    }


}



const addToStoreDB = (id) => {
    const storedBookData = getStoreBook()

    if (storedBookData.includes(id)) {

        alert('already exit')
    }
    else {
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readlist", data)

    }

}

export { addToStoreDB, getStoreBook };