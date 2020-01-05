import React from 'react';
import  { Redirect } from 'react-router-dom'

export default class Buyer extends React.Component{
    constructor(){
        super();
        this.state={
            check:false
        }
    }
    componentWillMount(){
        let session = sessionStorage.getItem('userDetails')
        let userDetails = JSON.parse(session);
        if (userDetails){
            this.setState({
                check:true
            })
        }
        
    }
    render(){
        if (this.state.check == false){
            return <Redirect to ='/' />
        }
        return(
            <h1>Buyer</h1>
        );
    }
}