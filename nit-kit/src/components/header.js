import React,{Component} from 'react';
import '../stylesheets/header.css'
import {
    Link,
    BrowserRouter as Router
  } from "react-router-dom";
import About from './about'
import {logout} from '../core/apiClient';
import { log } from 'util';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import { exception } from 'react-ga';

class Header extends Component{
    constructor(props){
        super(props)
        this.state={
            options:false
        }
    }
    componentDidUpdate(prevprops, nextProps){
        if(this.props!= prevprops){
            setTimeout(this.setState({
                options:this.props.getLoginOption
            }),1000)
        }
    }
    logout = ()=>{
        logout(

        ).then((response)=>{

        }).catch((error)=>{

        })
        sessionStorage.setItem("userDetails", '');
        sessionStorage.clear()
        
        document.getElementById('logout1').style.display='none';
        document.getElementById('login').style.display='block';
        this.setState({
            options:false
        })
    }
    login = ()=>{
        let that = this;
       
       
    }
    render(){
        if (this.state.options){
            document.getElementById('logout1').style.display='block';
            document.getElementById('login').style.display='none';
        }
        
        return(    
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <a className="navbar-brand" href="#">WebSiteName</a>
                        </div>
                        {/* <ul class="nav navbar-nav">
                        <li class="active"><a href="#">Home</a></li>
                        <li><a href="#">Page 1</a></li>
                        <li><a href="#">Page 2</a></li>
                        </ul> */}
                        <form className="navbar-form navbar-left" >
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search" name="search"/>
                                    {/* <div class="dropdown show">
                                        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Dropdown link
                                        </a>

                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                 */}
                            </div>
                        </form>
                        <form className="navbar-form navbar-left" >
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search" name="search"/>
                                <div className="input-group-btn">
                                <button className="btn btn-default" type="submit">
                                    <i className="glyphicon glyphicon-search"></i>
                                </button>
                                </div>
                            </div>
                        </form>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                            <li id ='login'><Link to="/login" onClick={this.login}>
                                <span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                            <li id='logout1'><Link to="/" 
                                onClick={this.logout}
                                params={{ value: this.state.logout}}>
                                <span className="glyphicon glyphicon-log-in">
                                </span> Logout</Link>
                            </li>
                            </ul>
                    </div>
                </nav>
                <nav className="navbar navbar-inverse navbar1">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">WebSiteName</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="/">Home</a></li>
                            <li><a href="#">Page 1</a></li>
                            <li><a href="#">Page 2</a></li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        
        )
    }
} 
const mapStateToProps = (state, ownProps) => ({
    getLoginOption:state.getLoginOption.options,
})

const mapDispatchToProps = {

}
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header));