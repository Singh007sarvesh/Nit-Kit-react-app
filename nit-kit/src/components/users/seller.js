import React from 'react';
import  { Redirect } from 'react-router-dom'
import '../../stylesheets/seller.css'
import {
    Link
  } from "react-router-dom";

export default class Seller extends React.Component{
    constructor(){
        super();
        this.state={
            check:false,
            bidItem:[1,2,3,4],
            bidItemSuggestion:false
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
    openNav = ()=>{
        document.getElementById("mySidenav").style.marginTop = "4%";
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        
    }
    uploadItem = () =>{
        document.getElementById('itemUploadedByMe').style.display='none';
        document.getElementById('uploadItem').style.display='block';
        document.getElementById('itemsForBid').style.display='none';
    }
    itemsForBid = () =>{

        document.getElementById('itemUploadedByMe').style.display='none';
        document.getElementById('uploadItem').style.display='none';
        document.getElementById('itemsForBid').style.display='block';
        this.setState({
            bidItemSuggestion:true
        })
    }
    itemUploadedByMe = () =>{
        document.getElementById('itemUploadedByMe').style.display='block';
        document.getElementById('uploadItem').style.display='none';
        document.getElementById('itemsForBid').style.display='none';
    }
    closeNav = () =>{
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
    }
    render(){
        if (this.state.check == false){
            return <Redirect to ='/' />
        }
        return(
            <div className='container'>
                <div className='row'>
                    <div className="col col-sm-3">
                        <div id="mySidenav" className="sidenav">
                            <a className="closebtn pointer" onClick={this.closeNav}>&times;</a>
                            <a className="pointer" onClick={this.uploadItem}>Upload Item</a>
                            <a className="pointer" onClick={this.itemsForBid}>Items For Bid</a>
                            <a className="pointer"onClick={this.itemUploadedByMe}>Item Uploaded By Me</a>
                            {/* <a href="#">Contact</a> */}
                        </div>
                        <div id="main">
                            <span className='sidebar1' onClick={this.openNav}>&#9776; open</span>
                        </div>
                    </div>
                    <div className="col col-sm-9">
                        <div className='container' id ='uploadItem'>
                            <div className='row'>
                                <div className="col col-sm-12" id="show_form">	
                                    <div className="panel panel-default">
                                        <div className="panel-heading"><h5 align="center">Upload Here </h5></div>
                                        <div className="panel-body">
                                            <form >
                                                <div className="form-group">
                                                    <label>Item Name</label>
                                                    <input type="text" className="form-control" name="item_name" required pattern="^[a-zA-Z0-9.- ]{4,}" />
                                                </div>
                                                <div className="form-group">
                                                    <label >Item Category</label>
                                                    <select className="form-control" name="item_cat">
                                                        <option value="Mobile">Mobile</option>
                                                        <option value="Notepad">Notepad</option>
                                                        <option value="Laptop">Laptop</option>
                                                        <option value="Tab">Tab</option>
                                                        <option value="Book">Book</option>
                                                        <option value="Bicycle">Bicycle</option>
                                                        <option value="others">Others</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label >Price</label>
                                                    <input type="text" className="form-control" name="item_price"required pattern="[0-9]{2,}" />
                                                </div>
                                                <div className="form-group">
                                                    <label >Item Description</label>
                                                    <input type="text" className="form-control" name="item_descp" required pattern="^[a-zA-Z0-9.- ]{4,}" />
                                                </div>
                                                <div className="form-group">
                                                    <label > Upload Image</label>
                                                    <input type="file"  name="Upload" className="btn btn-info" required />
                                                </div>
                                                <label>
                                                    <input id="right1" type="submit"  name="sub" value="Submit" className="btn btn-success" />
                                                </label>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='container' id ='itemsForBid'>
                            <div className='row'>
                                <h1>All Bid Items</h1>
                                {
                                    this.state.bidItem.map((data,key)=>(
                                        <div className = '' key={key}>
                                            <img className='image' src={require('../../image/oneplus.jpg')} />
                                            <span>{data}</span>
                                            <Link to ={{pathname: `/${'bid/'+data}`, query: {}}}>
                                                <span>Create Bid</span>
                                            </Link>
                                            {/* <Link to={{pathname: `/${'item/'+data.itempicture}`, query: {}}}>
                                                <img className='image' src={require('../image/'+data.itempicture)} />
                                                <p >{data.itemprice}</p>
                                                <p >{data.itemdesc}</p>
                                            </Link> */}
                                        </div>))
                                }
                            </div>
                        </div>
                        <div className='container' id ='itemUploadedByMe'>
                            <div className='row'>
                                <h1>All Products</h1>
                                {
                                    
                                    this.state.bidItem.map((data,key)=>(
                                        <div className = '' key={key}>
                                            <img className='image' src={require('../../image/oneplus.jpg')} />
                                            <span>{data}</span>
                                        </div>))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}