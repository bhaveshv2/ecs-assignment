import { SHOW_ALL_BOOKS } from './actionTypes';

// Fetch the List of Products
export function getAllProducts(){
    return(dispatch)=>{
        const url = "https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json";
        fetch(url)
            .then(response=>response.json())
            .then(data=>{
                console.log('Data to fetch:',data);
                dispatch(showAllBooks(data));
            })
    }
}

export function showAllBooks(books){
    return{
        type:SHOW_ALL_BOOKS,
        books
    }
}