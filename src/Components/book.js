import React, { Component } from 'react';
import {Card, Row, Col} from 'react-bootstrap';
import ArrowDropDownCircleRoundedIcon from '@material-ui/icons/ArrowDropDownCircleRounded';
import { modifyBook } from '../actions';
import {connect} from 'react-redux';
class Book extends Component 
{
    container = React.createRef();
    constructor(props)
    {
        super(props);
        this.state= {
            open: false
        }
    }
    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleClickOutside);
    }
    handleClickOutside = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
          this.setState({
            open: false,
          });
        }
      };
    onDropdownClick = () => {
        this.setState({open: !this.state.open});
        
    }
    render()
    {
        return(
        <Card className="book-card" style={{width: "12rem", height: "20rem", margin: "1rem",textAlign: "center", background: "white", padding: "0.5rem"}}>
            <Row>
                <Col>
                    <img src={this.props.book.coverURL} alt="#fffff" style={{height: "12rem", width: "8rem"}}/>
                </Col>
            </Row>
            <div ref={this.container}>
                <ArrowDropDownCircleRoundedIcon 
                className="dropdownIcon"
                style={{
                    width: "2rem",
                    height: "2rem", 
                    color: "green", 
                    position: "relative", 
                    top: "-0.8rem", 
                    right: "-4rem"
                    }}
                    onClick={this.onDropdownClick}
                    />
                    {this.state.open && (
                    <div className="dropdown">
                        <ul className="dropdownList">
                        <li className="dropdownItem" onClick={()=>this.props.onDropdownItemClick(this.props.book,"current")} data-txt="Currently Reading">Currently Reading</li>
                        <li className="dropdownItem" onClick={()=>this.props.onDropdownItemClick(this.props.book,"want")} data-txt="Want to Read">Want to Read</li>
                        <li className="dropdownItem" onClick={()=>this.props.onDropdownItemClick(this.props.book,"read")} data-txt="Read">Read</li>
                        <li className="dropdownItem" onClick={()=>this.props.onDropdownItemClick(this.props.book,"remove")} data-txt="Remove">Remove</li>
                        </ul>
                    </div>
                    )}
            </div>
            <Row style={{zIndex: "0"}}><Col><label>{this.props.book.name}</label></Col></Row>
            <Row><Col><label>{this.props.book.author}</label></Col></Row>
        </Card>);
    }
}
const dispatchStateToProps = dispatch => ({
    onDropdownItemClick: (book,mode) => dispatch(modifyBook(book,mode))
});
export default connect(null, dispatchStateToProps)(Book);