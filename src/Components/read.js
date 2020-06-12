import React, { Component } from 'react';
import Book from './book';
import {connect} from 'react-redux';
class Read extends Component
{
    render()
    {
        return(
            <div style={{marginTop: "1rem"}}>
                <div style={{marginLeft: "0.5rem"}}>Read</div>
                <hr/>
                <div style={{textAlign: "center"}}>   
                    <ul style={{display: "inline-flex", listStyle: "none"}}>
                        {this.props.books.filter(book=> book.mode==="read").map(book=> {
                                return(<li key={book.key}>
                                    <Book book={book}/>
                                </li>);
                        })}
                    </ul>
                </div>
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
export default connect(mapStateToProps)(Read);