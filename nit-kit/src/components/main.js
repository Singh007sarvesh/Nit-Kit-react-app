import React, { Component } from "react";
import '../stylesheets/main.css';
import {item} from '../core/apiClient';
import {Link} from 'react-router-dom';
  
export default class Main extends Component{
    constructor(){
        super()
        this.state={
            recommendations:[]
        }
    }
    addSuggestion = (data)=>{
        this.setState({
            recommendations:data
        })

    }
    componentDidMount(){
        const that = this
        item(

        ).then((response)=>{
            that.addSuggestion(response.data)
        }).catch((err)=>{
            console.log("Pls")
        })
    }
    hideFeedback = () =>{
        // $('.preloader').delay(3000).fadeOut();
        // $('#sh_f').click(function(){$('#fb_v').toggle('slow');});
        let x = document.getElementById("fb_v");
        // console.log(x.style.display)
        if (x.style.display === "none" || x.style.display === '') {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    render(){
        // console.log(this.state.recommendations)
        return(
            <div className='main'>
                <div className="container slider-wrapper">
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="item active">
                                <img className='imagewrapper' src={require('../image/img5.jpg')} alt="Los Angeles"/>
                            </div>
                            <div className="item">
                                <img className='imagewrapper' src={require('../image/img4.jpg')} alt="Los Angeles"/>
                            </div>
                            <div className="item">
                                <img className='imagewrapper' src={require('../image/img5.jpg')} alt="Los Angeles"/>
                            </div>
                        </div>
                        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#myCarousel" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <h1>New in Mobile Phones</h1>
                        <div className='col-sm-2 col-xl-2 col-lg-2 top'>
                            <h5>Hello</h5>
                        </div>
                        <div className='col-sm-2 col-xl-2 col-lg-2'>
                            <h5>Hello</h5>
                        </div>
                        <div className='col-sm-2 col-xl-2 col-lg-2'>
                            <h5>Hello</h5>
                        </div>
                        <div className='col-sm-2 col-xl-2 col-lg-2'>
                            <h5>Hello</h5>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <h1>Fresh recommendations</h1>
                        {
                            this.state.recommendations.map((data,key)=>(
                                <div className = 'col-sm-2 col-xl-2 col-lg-2' key={key}>
                                    <Link to={{pathname: `/${'item/'+data.itempicture}`, query: {}}}>
                                        <img className='image' src={require('../image/'+data.itempicture)} />
                                        <p >{data.itemprice}</p>
                                        <p >{data.itemdesc}</p>
                                    </Link>
                                </div>))
                        }
                    </div>
                </div>
                <div className="below-slideshow">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <div className="txt-block text-center">
                                <span className="glyphicon glyphicon-usd fa-4x"></span>
                                <h4 >Easy To Sell</h4>
                                <p >
                                The Seller needs one eye, Whereas for Buyer hundred eyes are nevertoo many.
                                </p>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <div className="txt-block text-center">
                                <span className="glyphicon glyphicon-folder-open fa-4x"></span>
                                <h4 >Varieties of Item</h4>
                                <p >A Cluster of items makes many choices for a good decision
                                </p>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <div className="txt-block text-center"><span className="glyphicon glyphicon-shopping-cart fa-4x"></span>
                                <h4 >Easy To Buy</h4>
                                <p >A Budget tells us what we cannot AFFORD, But it does not keep us from BUYING it.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container video-wrapper" id="video">
                    <div className="row pad-set">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="just-txt-div">
                            <h2 className="text-center">See Product Videos Here </h2>
                            <br />
                            <p className="text-center"><strong>=Intro Video= </strong>.</p>
                            <p className="text-center"><strong>=Product Search Video= </strong>.</p>
                            <p className="text-center"><strong>=Search Category Video= </strong>.</p>
                            <p className="text-center"><strong>=Database at a View=</strong>.</p>
                            <p className="text-center"><strong>=A whole Product List is Here=  </strong>.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <br />
                            <iframe width="auto" height="315" src="https://www.youtube.com/embed/ZwKhufmMxko" frameBorder="0" allowFullScreen></iframe>

                            {/* <iframe width="auto" height="315" src="https://www.youtube.com/watch?v=XMkyjXwQ3jM" 
                            frameBorder="0" allowFullScreen className="embed-responsive-item"></iframe> */}
                        </div>
                    </div>
                </div>
                <div className="parallax-like">
                    <div className="overlay"> 
                        <div className="row">
                            <div className="container">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div className="just-txt-div text-center">
                                        <strong id="seller">4+</strong> 
                                        <p id="seller">Seller</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div className="just-txt-div text-center">
                                        <strong id="seller">7+</strong> 
                                        <p id="seller">buyer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className="row feedback" id="feedback">
                        <button type="button" 
                        className="btn btn-info text-center" onClick={this.hideFeedback} id='sh_f'>Feedback </button>
                        <div className='container' id="fb_v">
                            <div className="row" >
                                <div className="col-lg-10 col-md-10 col-sm-10 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-12 set-div" >
                                    <div className="just-txt-div text-center" >
                                        <h3><strong>-- NIT-KET FEEDBACK --</strong> </h3>       
                                        <div className="col col-sm-12 feedback-container" >
                                            <div className="container">
                                                <div className='row'>
                                                    <div className="col-md-8">
                                                        <div className="form-area">
                                                            <form>
                                                                <br className='clear'/>
                                                                <div className="form-group">
                                                                    <input type="text" 
                                                                    className="form-control" 
                                                                    name="name" placeholder="Name" 
                                                                    required="required" 
                                                                    pattern="[a-zA-Z ]{4,}"/>
                                                                </div>
                                                                <div className="form-group">
                                                                    <input type="text" 
                                                                    className="form-control"  
                                                                    name="email" placeholder="Email"
                                                                    required="required"
                                                                    pattern="[a-zA-Z0-9.-_]{3,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"/>
                                                                </div>

                                                                <div className="form-group">
                                                                    <input type="text" 
                                                                    className="form-control"
                                                                    name="mobile" 
                                                                    placeholder="Mobile Number" 
                                                                    required="required" 
                                                                    pattern="[789][0-9]{9}"/>
                                                                </div>
                                                                <div className="form-group">
                                                                <input type="text" 
                                                                    className="form-control" 
                                                                    name="subject" 
                                                                    placeholder="Subject"
                                                                    required="required" 
                                                                    pattern="[a-zA-Z ]{1,}"/>
                                                                </div>
                                                                <div className="form-group">
                                                                    <textarea className="form-control"
                                                                    type="textarea"
                                                                    placeholder="Message" 
                                                                    maxLength="140" rows="7" 
                                                                    name="msg" required="required" 
                                                                    pattern="[a-zA-Z ]{1,}"></textarea>
                                                                </div>
                                                                <div className="form-group">
                                                                    <input type="submit" 
                                                                    name="sub1" value="Send feedback"
                                                                    className="btn btn-info"/>
                                                                    <br/>
                                                                </div>          
                                                            </form>
                                                            {/* <h2 align="center">Comment On Facebook</h2>
                                                            <div className="fb-comments" data-href="https://nitket.000webhostapp.com"
                                                            data-width="100%" data-numposts="50">
                                                            </div>
                                                            <div className="fb-like" data-href="https://www.facebook.com/Nitket-817736001697424/" data-layout="standard" data-action="like" data-size="large" data-show-faces="true" data-share="true"></div>
                                                            <br/>
                                                            <div className="fb-follow" data-href="https://www.facebook.com/Nitket-817736001697424/" data-layout="standard" data-size="small" data-show-faces="true"></div>
                                                            <br/>
                                                            <div className="fb-send" data-href="https://www.facebook.com/Nitket-817736001697424/"></div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                        </div>
                                        <hr/>
                                        {/* <h2 align="center">Discuss About NIT-KET</h2> 
                                        <div id="disqus_thread"></div>
                                        <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="container">
                    <div className="row">
                        <div className="col col-sm-12 col-md-12 col-lg-12 col-offset-4"></div>
                    </div>
                </div>
            </div>
        )
    }
}