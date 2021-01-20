import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Rating } from '@material-ui/lab';
import { connect } from 'react-redux';


class BooksCard extends Component {

    

    render() {
        const { book,handelAddToCart,src } = this.props;
        // console.log(book);
        return (
            <div className="book-card" id={book.bookID}>
                <div className="book-isbn">
                    {book.isbn}
                </div>
                <div className="book-info-container">
                    <div className="book-info">
                        <div className="book-title">
                            {book.title}
                        </div>
                        <div className="book-rating">
                            {book.average_rating}<Rating name="book-rating" value={book.average_rating} size="small" precision={0.1} />
                        </div>
                        <div className="book-author">
                            {book.authors}
                        </div>
                        <div className="book-language">
                            {book.language_code}
                        </div>
                        <div className="book-ratings_count">
                            {book.ratings_count}
                        </div>
                    </div>
                    <div className="book-function">
                        <div className="" onClick={handelAddToCart}>
                            <img id={book.id} src={src} alt="Not Found"/>
                        </div>
                    </div>
                </div>
                <div className="book-price-category-container">
                    <div className="book-price">&#8377; {book.price}</div> 
                    <div className="book-category">{book.category}</div>
                </div>
            </div>
        )
    }
}

BooksCard.propTypes = {
    book:PropTypes.object.isRequired,
}

function mapStateToProps(state){
    return{
        books:state.books
    }
}

export default connect(mapStateToProps)(BooksCard);