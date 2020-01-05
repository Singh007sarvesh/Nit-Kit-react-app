import React from 'react';
import '../../stylesheets/bid.css'

export default class Bid extends React.Component{
    constructor(){
        super();
        this.state = {
            starttime:'',
            closetime:'',
            initialAmount:'',
            itemId:'',
        }
    }
    change = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    submitForm = ()=>{

    }
    render(){
        console.log(this.props.match.params.id)
        return(
            <div className='container'>
                <div className='row row1'>
                    <form onSubmit={this.submitForm}>
                        <h1>All Bid Items</h1>
                        <div className="form-group">
                            <label >Starting Time</label>
                            <input type="datetime-local" name="starttime" 
                            className="form-control" id="email"
                             value={this.state.starttime}
                             onChange={this.change}/>
                        </div>
                        <div className="form-group">
                            <label >Closeing Time</label>
                            <input type="datetime-local" name="closetime" 
                            className="form-control" id="email" 
                            value={this.state.closetime}
                             onChange={this.change}/>
                        </div>
                        <div className="form-group">
                            <label >Initial Amount</label>
                            <input type="text" name="initialAmount" 
                            className="form-control" id="email" 
                            value={this.state.initialAmount}
                             onChange={this.change}/>
                        </div>
                        <div className="form-group">
                            <label >Item Id</label>
                            <input type="text" name="itemId" 
                            className="form-control" id="email" 
                            value={this.state.itemId}
                             onChange={this.change}/>
                        </div>
                        {/* <input type="datetime-local" name="bdaytime" /> */}
                        <input type="submit" />
                        </form>
                </div>
            </div>
        )
    }
}