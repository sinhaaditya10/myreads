import React, { Component } from 'react';
import './App.css';
import Home from './Components/home';
import {connect} from 'react-redux';
import AddBook from './Components/AddBook';
import { Route } from 'react-router-dom';
class App extends Component {

  constructor(props)
  {
    super(props);
    this.state= {
      books: props.books
    }
  }
  render()
  {
    return (
      <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/addBook" component={AddBook}/>
      </div>
    );
  }
}
function mapStateToProps(state)
{
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(App);
