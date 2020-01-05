import React from 'react';
import {login} from '../../core/apiClient';
import  { Redirect,withRouter } from 'react-router-dom'
import {storeLoginOption} from '../../redux/actions';
import { connect } from 'react-redux';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
      options:false,
    }
  }
  onChange = (e)=>{
    this.setState({
      options:false
    })
    if (e.target.name == 'email'){
      this.setState({
        email:e.target.value
    });
    }
    else{
      this.setState({
        password:e.target.value
    });
    }
    
  }
  login = (e)=>{
    // const show = ()=>{
    //   console.log("abv");
    //   $('#my-modal').modal({
    //     show: 'false'
    // }); 
    //   $("#exampleModal").modal('show');
    //   $('#exampleModal').modal('toggle');
    // }
    let that = this;
    e.preventDefault();
    login({
      "email": this.state.email,
      "password": this.state.password
    }).then((response)=>{
        let x = response.data["data"];
       
        if (x == 'failed'){
        
        }
        else{
          sessionStorage.setItem("userDetails", JSON.stringify(response.data))
          that.setState({
            options:true
          })
          this.props.storeLoginOption(this.state.options);
        }
      }).catch((err)=>{
          console.log("Pls")
      })
    this.setState({
      email:'',
      password:''
    })
  }
  render() {
    return (
      <div className='form'>
        <div className="container">
          <div className='row'>
            <h2>NIT-KIT</h2>
            <form onSubmit={this.login}>
            <div className="form-group">
              <label >Email:</label>
              <input type="email" className="form-control" id="email" 
              placeholder="Enter email" name='email'
              onChange={this.onChange}
              value = {this.state.email}/>
            </div>
            <div className="form-group">
              <label >Password:</label>
              <input type="password" className="form-control" id="pwd" 
              placeholder="Enter password" name='pwd' value = {this.state.password}
              onChange={this.onChange}/>
            </div>
            {/* <div className="checkbox">
              <label><input type="checkbox" name="remember" /> Remember me</label>
            </div> */}
            <button type="submit" className="btn btn-default">Submit</button>
          </form> 

          </div>
        </div>
       
{/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div> */}
        {
          this.state.options && <Redirect to='/options'  />
        }
          

      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = {
    storeLoginOption,
};

const loginContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login));

  export default loginContainer;