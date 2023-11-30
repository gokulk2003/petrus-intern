import React,{Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Home';
import Game from './Game';
class Routing extends  Component{
    render(){
        return(
            <BrowserRouter>
            <Route exact path="/" component={Home}/>
            <Route path="/game" component={Game}/>
            </BrowserRouter>
        )
    }
};
export default Routing;
