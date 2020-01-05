import React, {Component} from 'react';
import '../../stylesheets/main.css'

export default class Item extends Component{
    render(){
        let imageName = this.props.location.pathname;
        console.log(imageName)
        return(
            <div>
                {/* <h1>Hello</h1> */}
                <img className='itemImage' src={require('../../image/'+'oneplus.jpg')} />
            </div>
        );
    }
}