import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Container, Row, Col} from 'react-bootstrap';
import {Search} from '@material-ui/icons';
import escapeRegExp from 'escape-string-regexp';
import Book from './book';
class AddBook extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            query: ''
        }
    }
    handleChange = query => {
        this.setState({query: query.target.value});
    }
    render()
    {
        const {books}= this.props;
        const {query}= this.state;
        let showingBooks
        if(query){
            const match= RegExp(escapeRegExp(query),'i');
            showingBooks= books.filter((book)=> match.test(book.name));
        }
        else{
            showingBooks= books;
        }
        return(
            <Container fluid>
                <Row style={{margin: "1rem"}}>
                    <Col xs={0}><Search style={{width: "2.5rem", height: "2.5rem", paddingTop: "0.5rem"}}/></Col>
                    <Col><input placeholder="Search Book" onChange={this.handleChange} style={{width: "100%", padding: "0.5rem"}}/></Col>
                </Row>
                <Row>
                        {
                            showingBooks.map(book => book.mode==="remove"?
                                <Col key={book.key} align="center" className="book-card" xs={7} sm={6} md={5} lg={4} xl={3}> 
                                    <Book book={book}/>    
                                </Col>:null
                        )}
                </Row>
            </Container>
        );
    }
}
function mapStateToProps(state)
{
    return{
        books: state.books
    }
}
export default connect(mapStateToProps)(AddBook);