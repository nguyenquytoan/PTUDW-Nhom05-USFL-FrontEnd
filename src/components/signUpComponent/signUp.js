import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios'
import querystring from 'query-string'


export class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullname: "",
            fullnameValidation: false,
            phone: "",
            phoneValidation: false,
            email: "",
            emailValidation: false,
            password: "",
            confirmPassword: "",
            passwordValidation: false,
            gender: "",
            genderValidation: false,
            startDate: new Date(),
            DOB: "",
            dobValidation: false,
            redirect: false,
            errorMessage: false,
            checkBox: false
        }
        this.onHandleChange = this.onHandleChange.bind(this)
    }

    onFullnameChange = e => {
        if (e.target.value != "") {
            this.setState({fullnameValidation: true})
        }
        else {
            this.setState({fullnameValidation: false})
        }
        this.setState({fullname: e.target.value})
    }

    onPhoneChange = e => {
        if (e.target.value != "") {
            this.setState({phoneValidation: true})
        }
        else {
            this.setState({phoneValidation: false})
        }
        this.setState({phone: e.target.value})
    }

    onEmailChange = e => {
        if (e.target.value != "") {
            if (e.target.value.includes("@")) {
                this.setState({emailValidation: true})
            }
            else {
                this.setState({emailValidation: false})
            }
            
        }
        else {
            this.setState({emailValidation: false})
        }
        this.setState({email: e.target.value})
    }

    onPasswordChange = e => {
        if (e.target.value != "") {
            this.setState({passwordValidation: true})
        }
        else {
            this.setState({passwordValidation: false})
        }
        this.setState({password: e.target.value})
    }

    onPasswordReconfirm = e => {
        if (e.target.value != "") {
            if (e.target.value == this.state.password) {
                this.setState({passwordValidation: true})
            }
            else {
                this.setState({passwordValidation: false})
            }
        }
        this.setState({confirmPassword: e.target.value})
    }

    onGenderChange = e => {
        if (e.target.value == "Male"|| e.target.value == "Female"|| e.target.value == "Other") {
            this.setState({genderValidation: true})
        }
        else {
            this.setState({genderValidation: false})
        }
        this.setState({gender: e.target.value})
    }

    changeDate(d) {
        let day = d.getDate()
        let month = d.getMonth()
        let year = d.getFullYear()

        switch (month) {
            case 0: month = "January"; break;
            case 1: month = "February"; break;
            case 2: month = "March"; break;
            case 3: month = "April"; break;
            case 4: month = "May"; break;
            case 5: month = "June"; break;
            case 6: month = "July"; break;
            case 7: month = "August"; break;
            case 8: month = "September"; break;
            case 9: month = "October"; break;
            case 10: month = "November"; break;
            case 11: month = "December"; break;
            default: break;
        }

        return `${month} ${day}, ${year}`
    }

    onHandleChange() {
        if (!this.state.fullnameValidation || !this.state.phoneValidation || !this.state.emailValidation|| !this.state.passwordValidation || !this.state.genderValidation) {
            this.setState({errorMessage: true})
        }
    }

    onHandleSubmit = e => {
        if (this.state.fullnameValidation == true && this.state.phoneValidation == true && this.state.emailValidation == true && this.state.passwordValidation == true && this.state.genderValidation == true && this.state.dobValidation == true && this.state.checkBox) {
            e.preventDefault()

            const myData = {
                username: this.state.email,
                name: this.state.fullname,
                phone: this.state.phone,
                email: this.state.email,
                password: this.state.password,
                gender: this.state.gender,
                birth: this.state.DOB
            }

            // const url = "http://localhost:2000/api/user/signup"
            // const response = await fetch(url, {
            //     method: 'POST',
            //     body: JSON.stringify(myData),
            //     headers: {
            //         'Content-Type': 'application/json'
            //     }
            // })

            // if (response.ok) {
            //     const data = await response.json()
            //     localStorage.setItem("userID", data)
            //     localStorage.setItem("signInStatus", true)
            //     this.setState({redirect: true})
            // }

            // axios({
            //     method: 'POST',
            //     data: myData,
            //     url: 'http://localhost:2000/api/user/signup',
            //     headers: {
            //         Accept: 'application/json',
            //         'Content-Type': 'application/json'
            //     }
            // })
            // .then(res => {
            //     localStorage.setItem("userID", res.data)
            //     localStorage.setItem("signInStatus", true)
            //     this.setState({redirect: true})
            // })
            // .catch(e => alert("Request failed - fetch"))
            // //axios.post('http://localhost:2000/api/user/signup', querystring.stringify({myData}) , {headers: {'Content-Type': 'application/json'}})
            // .then(res => {
            //     localStorage.setItem("userID", res.data)
            //     localStorage.setItem("signInStatus", true)
            //     this.setState({redirect: true})
            // })
            // .catch(e => alert("Request failed - fetch"))

            fetch('http://localhost:2000/api/user/signup', {method: 'POST', headers: {'Content-Type': 'application/json'} , body: JSON.stringify(myData)})
            .then(response => response.json())
            .then(data => {
                localStorage.setItem("userID", data)
                localStorage.setItem("signInStatus", true)
                this.setState({redirect: true})
            })
        }
    }


    handleChange = date => {
        this.setState({startDate: date, DOB: this.changeDate(date), dobValidation: true})
    }

    onHandleCheckBox = e => {
        this.setState({checkBox: true})
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/"/>
            
        }
        else {
            return(
                <div>
    
                    <div style={{marginBottom: '20px'}}>
    
                        <div className="container" style={{margin: '50px auto',marginTop: '50px'}}>
    
                            <div className="row" style={{margin: '0px'}}>
    
                                <ul className="nav nav-tabs col-12 col-lg-10" style={{margin:'0px auto'}}>
    
                                    <li className="col nav-item">
                                        <Link to="/sign-in" className="nav-link" style={{color: '#1429D7'}}><h4>Sign in</h4></Link>
                                    </li>
    
                                    <li className="col nav-item">
                                        <Link to="/sign-up" className="nav-link active" style={{color: 'black'}}><h4>Sign up</h4></Link>
                                    </li>
    
                                </ul>
    
                                <form className="col-10 col-lg-8 mt-4" style={{margin: '15px auto 0px',padding: '15px 0px'}} onClick={this.onHandleSubmit}>
    
                                    <div className="form-group row">
                                        <h6 className="col-lg-3 col-xl-2 text-left mt-1"><b>Full name:</b></h6>
                                        <input className="form-control col-lg-9 col-xl-10" type="text" placeholder="Your fullname (e.g. Nguyễn Văn A)" value={this.state.fullname} onChange={this.onFullnameChange} autoFocus required/>
                                    </div>
    
                                    <div className="form-group row">
                                        <h6 className="col-lg-3 col-xl-2 text-left mt-1"><b>Phone:</b></h6>
                                        <input className="form-control col-lg-9 col-xl-10" type="text" placeholder="Your telephone number (at least 10 characters)" value={this.state.phone} onChange={this.onPhoneChange} required minlength="10"/>
                                    </div>
    
                                    <div className="form-group row">
                                        <h6 className="col-lg-3 col-xl-2 text-left mt-1"><b>Email:</b></h6>
                                        <input className="form-control col-lg-9 col-xl-10" type="text" placeholder="Your email (*@example.com)" value={this.state.email} onChange={this.onEmailChange} required/>
                                    </div>
    
                                    <div className="form-group row">
                                        <h6 className="col-lg-3 col-xl-2 text-left mt-1"><b>Password:</b></h6>
                                        <input className="form-control col-lg-9 col-xl-10" type="password" placeholder="Your password (at least 6 characters)" value={this.state.password} onChange={this.onPasswordChange} required minlength="6"/>
                                    </div>
    
                                    <div className="form-group row">
                                        <h6 className="col-lg-3 col-xl-2 text-left mt-1"><b>Confirm Password:</b></h6>
                                        <input className="form-control col-lg-9 col-xl-10" type="password" placeholder="Confirm your password" value={this.state.confirmPassword} onChange={this.onPasswordReconfirm} required minlength="6"/>
                                    </div>
    
                                    <div className="form-group row">
                                        <h6 className="col-lg-3 col-xl-2 text-left mt-1"><b>Gender:</b></h6>
                                        <div className="d-flex col-lg-9 col-xl-10" style={{margin: '0px auto'}}>
                                            <div className="col-12 row" onChange={this.onGenderChange}> 
                                                <div className="col">
                                                    <input type="radio" value="Male" name="gender"/> Male 
                                                </div>
                                                
                                                <div className="col">
                                                    <input type="radio" value="Female" name="gender"/> Female
                                                </div>
                                                 
                                                <div className="col">
                                                    <input type="radio" value="Other" name="gender"/> Other 
                                                </div>
                                                
                                            </div>
                                                       
                                        </div>
                                    </div>
    
                                    <div className="row">
                                        <div className="col-lg-3 mb-3 text-left mt-2">
                                            <label style={{fontWeight: 'bold'}}>DOB</label>
                                        </div>
                                        
                                        <div className="col-lg-9 mt-1">
                                            <DatePicker selected={this.state.startDate} onChange={this.handleChange}/>
                                        </div>
                                        
    
                                        
                                    </div>
    
                                    <div className="form-check col-11" style={{margin: '0px auto'}} onChange={this.onHandleCheckBox}>
    
                                        <input className="form-check-input" type="checkbox" id="formCheck-2" required/>
                                        <label className="form-check-label" for="formCheck-2">I have read &amp; agreed with&nbsp;<a href="#">Term and Privacy</a></label>
    
                                    </div>
    
                                    
                                    <button className="btn btn-primary border-0 rounded-pill mt-4 mb-4" type="submit" style={{backgroundColor: '#F15922',height:'40px',width: '150px',margin: '0px auto'}} onClick={this.props.click}>
                                        <b>Register</b>
                                    </button>
                                    
    
                                </form>
    
                               
                            </div>
    
                            
                                
                            
                            
                        </div>
                    </div>
                </div>
            )
        }
        
    }
}