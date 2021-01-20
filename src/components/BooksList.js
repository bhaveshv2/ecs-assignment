import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BookCard } from './index';

class BooksList extends Component {
    constructor(props){
        super(props);
        this.state={
            sortEnabled:false,
            sortedbooks:[],
        }
    }

    sortbooks=(e)=>{
        if(this.state.sortEnabled){
            this.setState({sortEnabled:false});
        }else{
            const {books} = this.props;
            let sortingData = [...books];
            sortingData.sort((a,b)=>a.price - b.price);
            this.setState({
                sortEnabled:true,
                sortedbooks:sortingData
            })
        }
    }

    // handelAddToCart = (e) =>{
    //     const productId = e.target.id;
    //     console.log(this.props.status);
    //     if(e.target.src === "https://image.flaticon.com/icons/svg/1417/1417434.svg"){
    //         this.props.dispatch(addProductToCart(productId));
    //         if(this.props.status === 'success'){
    //             e.target.src = 'https://image.flaticon.com/icons/svg/1828/1828901.svg';
    //         }
    //     }else{
    //         this.props.dispatch(removeProductFromCart(productId));
    //         if(this.props.status === 'success'){
    //             e.target.src = 'https://image.flaticon.com/icons/svg/1417/1417434.svg';
    //         }
    //     }
    // }

    render() {
        const books =this.props.books;
        // console.log(books);
        // const cart = this.props.cart;
        // const message = this.props.message;
        // console.log("cart",cart);
        return (
            <div className="products-list">
                {/* <div className="message-container">{message && <div id="message">{message}</div>}</div> */}
                <div className="sort-books">
                    <div onClick={this.sortbooks} className="sort-btn">
                        <img src="https://image.flaticon.com/icons/svg/25/25612.svg" alt=""/>
                    </div>
                </div>
                <div className="product-list-container">
                    {books.map(book=>
                        <BookCard book={book} key={book.bookID}/>
                    )}
                </div>
            </div>
        )
    }
}

BooksList.propTypes ={
    books:PropTypes.array.isRequired,
}

function mapStateToProps(state){
    return{
        books:state.books,
        cart:state.cart,
        status:state.status,
        message:state.message,
    }
}

export default connect(mapStateToProps)(BooksList);
