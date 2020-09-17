import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import logoSmall from '../../asserts/img/library-logo-sm.png';
import PopUp from 'reactjs-popup'

export class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            emailValidation: null,
            password: "",
            passwordValidation: null,
            redirect: false,
            errorMessage: false,
            test: ""
        }
        this.onHandleInput = this.onHandleInput.bind(this)
    }

    onEmailChange = e => {
        if (e.target.value != "") {
            this.setState({emailValidation: true})
        }
        else {
            this.setState({emailValidation: false})
        }
        this.setState({
            email: e.target.value
        })
    }

    onPasswordChange = e => {
        if (e.target.value != "") {
            this.setState({passwordValidation: true})
        }
        else {
            this.setState({passwordValidation: false})
        }
        this.setState({
            password: e.target.value
        })
    }

    onHandleInput() {
        if (!this.state.emailValidation || !this.state.passwordValidation) {
            this.setState({errorMessage: true})
        }
    }

    onHandleSubmit = e => {
        if (this.state.emailValidation == true && this.state.passwordValidation == true) {
            e.preventDefault()
            fetch('http://localhost:2000/api/user/signin?username=' + this.state.email + '&password=' + this.state.password)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem("userID", data)
                localStorage.setItem("signInStatus", true)
                this.setState({redirect: true})
            })
        }
        else if (this.state.emailValidation == false && this.state.passwordValidation == false) {
            this.setState({errorMessage: true})
        }
       
    }


    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />
        }
        else {
            return(
                <div>
    
                    <div style={{marginBottom: '20px'}}>
    
                        <div className="container" style={{margin: '50px auto',marginTop: '50px'}}>
    
                            <div className="row" style={{margin: '0px'}}>
    
                                <ul className="nav nav-tabs col-12 col-lg-10" style={{margin:'0px auto'}}>
    
                                    <li className="col nav-item">
                                        <Link to="/sign-in" className="nav-link active" style={{color: 'black'}}>
                                            <h4>Sign in</h4>
                                        </Link>
                                    </li>
    
                                    <li className="col nav-item">
                                        <Link to="/sign-up" className="nav-link" style={{color: '#1429D7'}}>
                                            <h4>Sign up</h4>
                                        </Link>
                                    </li>
    
                                </ul>
    
                            </div>
    
                            <form className="col-10 col-lg-8 mt-4" style={{margin: '15px auto 0px',padding: '15px 0px'}} onClick={this.onHandleSubmit}>
    
                                <img src={logoSmall} style={{width: '200px', margin: '0px auto'}}/>
    
                                <div className="form-group row">
    
                                    <h6 className="col-lg-3 col-xl-2 text-left mt-1"><b>Email:</b></h6>
    
                                    <input className="form-control col-lg-9 col-xl-10" type="text" placeholder="Your email" value={this.state.email} onChange={this.onEmailChange} autoFocus required/>
                                </div>
    
                                <div className="form-group row">
                                    <h6 className="col-lg-3 col-xl-2 text-left mt-1"><b>Password:</b></h6>
                                    <input className="form-control col-lg-9 col-xl-10" type="password" placeholder="Your password" value={this.state.password} onChange={this.onPasswordChange} required minlength="6"/>
                                </div>
    
                                {this.state.errorMessage?
                                <div style={{color: 'red'}}>Something went wrong with your email or password.<br/>Please check your email or password one more time.</div>:
                                <noscript></noscript>
                                }
    
                                <div className="d-flex align-items-center row col-11" style={{margin: '0px auto'}}>
                                    <input className="d-flex" type="checkbox" style={{marginRight: '5px'}}/>
                                    <label className="d-flex" style={{margin: '0px',fontSize: '12px'}}>Remember me</label>
                                    <Link style={{marginLeft: 'auto',fontSize: '12px'}}>Forgot password?</Link>
                                </div>
    
                                {this.state.redirect?
    
                                    <button className="btn btn-primary border-0 rounded-pill mt-4 mb-4" type="submit" style={{backgroundColor: '#F15922',height:'40px',width: '150px',margin: '0px auto'}} onClick={this.props.click}>
                                        <b>Sign in</b>
                                    </button>
                                :
    
                                <button className="btn btn-primary border-0 rounded-pill mt-4 mb-4" type="submit" style={{backgroundColor: '#F15922',height:'40px',width: '150px',margin: '0px auto'}} onClick={this.props.click}>
                                    <b>Sign in</b>
                                </button>
    
                                }
                                    
    
                                
    
                            </form>
    
                            
                        </div>
                    </div>
                </div>
            )
        
        }
    }
}