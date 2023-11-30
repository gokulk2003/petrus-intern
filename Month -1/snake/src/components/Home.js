import React,{Component, Fragment} from "react";
import { Link } from "react-router-dom";
class Home extends Component{
    render(){
        return(
            <>
            <h1>Snake game</h1>
            <p>This game is made by react</p>
            <Link to="/game">play game</Link>
            </>
        )
    }
};
export default Home;
