import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Home } from './index';
import { getAllProducts } from '../actions/books';


class App extends React.Component {
  componentDidMount(){
    this.props.dispatch(getAllProducts());
  }

  render(){
    // const cartLength = this.props.cart.length;
    return (
      <Router>
        <div className="App">
          {/* <Navbar cartLength={cartLength}/> */}
          <Switch>
            <Route exact path="/" component={Home} />
            {/* 
            <Route path="/cart" component={Cart} />
             */}
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state){
  return {
    books:state.books,
    // cart:state.cart
  }
}

App.propTypes = {
  books:PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(App);


