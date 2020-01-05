import React, {Component} from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';

export default class Home extends Component{
   render(){
       return(
           <div>
               <Main />
           </div>
       )
   }
}