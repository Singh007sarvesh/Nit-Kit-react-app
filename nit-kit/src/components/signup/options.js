import React from 'react';
import '../../stylesheets/signup.css'
import  { Redirect } from 'react-router-dom'


export default class Option extends React.Component{
    constructor(){
        super();
        this.state={
            option:'',
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
    handleValue = (e)=>{
        
        if (e.target.value == 'Buyer'){
            this.setState({
                option:e.target.value
            })
        }
        else{
            this.setState({
                option:e.target.value
            })
        }
    }
    render() {
        if (this.state.check==false){
            return <Redirect to='/' />
        }
        if (this.state.option == 'Buyer'){
            return <Redirect to='/buyer' />
        }
        else if (this.state.option == 'Seller'){
            return <Redirect to='/seller' />
        }
        return (
            <div className="container">
                <div className='options'>
                    <h1>Select Options</h1>
                    <div className='option'>
                        <input type="radio" name="options" value="Buyer" 
                        onClick={this.handleValue} /> 
                        <span>Buyer</span>
                    </div>
                    <div className='option'>
                        <input type="radio" name="options" value="Seller" 
                        onClick={this.handleValue} /> 
                        <span>Seller</span> 
                    </div>
                </div>
                {

                }
            </div>
        )
    }
}