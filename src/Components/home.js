import React, { Component } from 'react';
import CurrentlyReading from './current';
import WantToRead from './want';
import Read from './read';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import { Link } from 'react-router-dom';
class Home extends Component
{
    render()
    {
        return(
            <div className="outer-container">
                <div
                style={{background: "green",
                width: "100vw",
                color: "white", 
                 textAlign: "center", 
                 padding: "0.5rem"}}>
                    My Reads
                </div>
                <Link to="/addBook"><AddCircleRoundedIcon className="add-book"/></Link>
                <CurrentlyReading />
                <WantToRead />
                <Read/>
                
            </div>
        );
    }
}
export default Home;