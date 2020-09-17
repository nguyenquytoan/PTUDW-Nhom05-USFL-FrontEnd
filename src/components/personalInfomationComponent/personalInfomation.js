import React, {Component} from 'react'
import DatePicker from 'react-datepicker'

export class PersonalInfomation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullname: '',
            dob: '',
            gender: '',
            password: '',
            email: '',
            phone: '',
            newName: '',
            newDOB: '',
            newGender: '',
            newPassword: '',
            newPhone: '',
            startDate: new Date(),
            nameChange: false,
            dobChange: false,
            genderChange: false,
            passwordChange: false,
            phoneChange: false
        }
    }

    async componentDidMount() {
        try {
            const url = 'http://localhost:2000/api/user/info?userid=' + localStorage.getItem("userID")
            const response = await fetch(url)
            if (response.ok) {
                const data = await response.json()
                if (data.message == 'true') {
                    this.setState({
                        fullname: data.data.name,
                        dob: data.data.birth,
                        gender: data.data.gender,
                        password: data.data.password,
                        email: data.data.email,
                        phone: data.data.phone
                    })
                }
            }
        }
        catch(e) {
            console.log(e)
        }
    }

    showNewNameEditor = e => {
        let show = document.getElementById("nameEdit")
        let iconDown = document.getElementById("iconDown")
        let iconUp = document.getElementById("iconUp")
        
        if (show.style.display == 'none') {
            show.style.display = 'block'
            iconDown.style.display = 'none'
            iconUp.style.display = 'block'
        }
        else {
            show.style.display = 'none'
            iconDown.style.display = 'block'
            iconUp.style.display = 'none'
        }

    }

    showNewDOBEditor = e => {
        let show = document.getElementById("dobEdit")
        let iconDown = document.getElementById("iconDown1")
        let iconUp = document.getElementById("iconUp1")

        if (show.style.display == 'none') {
            show.style.display = 'block'
            iconDown.style.display = 'none'
            iconUp.style.display = 'block'
        }
        else {
            show.style.display = 'none'
            iconDown.style.display = 'block'
            iconUp.style.display = 'none'
        }
    }

    showNewGenderEditor = e => {
        let show = document.getElementById("genderEdit")
        let iconDown = document.getElementById("iconDown2")
        let iconUp = document.getElementById("iconUp2")

        if (show.style.display == 'none') {
            show.style.display = 'block'
            iconDown.style.display = 'none'
            iconUp.style.display = 'block'
        }
        else {
            show.style.display = 'none'
            iconDown.style.display = 'block'
            iconUp.style.display = 'none'
        }
    }

    showNewPasswordEditor = e => {
        let show = document.getElementById("passwordEdit")
        let iconDown = document.getElementById("iconDown3")
        let iconUp = document.getElementById("iconUp3")

        if (show.style.display == 'none') {
            show.style.display = 'block'
            iconDown.style.display = 'none'
            iconUp.style.display = 'block'
        }
        else {
            show.style.display = 'none'
            iconDown.style.display = 'block'
            iconUp.style.display = 'none'
        }
    }

    showNewPhoneEditor = e => {
        let show = document.getElementById("phoneEdit")
        let iconDown = document.getElementById("iconDown4")
        let iconUp = document.getElementById("iconUp4")

        if (show.style.display == 'none') {
            show.style.display = 'block'
            iconDown.style.display = 'none'
            iconUp.style.display = 'block'
        }
        else {
            show.style.display = 'none'
            iconDown.style.display = 'block'
            iconUp.style.display = 'none'
        }
    }

    onNewNameChange = e => {
        if (e.target.value != "") {
            if (e.target.value != this.state.fullname) {
                this.setState({nameChange: true})
            }
            else {
                this.setState({nameChange: false})
            }
        }
        else {
            this.setState({nameChange: false})
        }
        this.setState({newName: e.target.value})
    }

    onNewGenderChange = e => {
        if (e.target.value == "Male" || e.target.value == "Female" || e.target.value == "Other") {
            if (e.target.value != this.state.gender) {
                this.setState({genderChange: true})
            } 
            else {
                this.setState({genderChange: false})
            }
        }
        else {
            this.setState({genderChange: false})
        }
        this.setState({newGender: e.target.value})
    }

    onNewPasswordChange = e => {
        if (e.target.value != "") {
            if (e.target.value != this.state.password) {
                this.setState({passwordChange: true})
            }
            else {
                this.setState({passwordChange: false})
            }
        }
        else {
            this.setState({passwordChange: false})
        }
        this.setState({newPassword: e.target.value})
    }

    onNewPhoneChange = e => {
        if (e.target.value != "") {
            if (e.target.value != this.state.phone) {
                this.setState({phoneChange: true})
            }
            else {
                this.setState({phoneChange: false})
            }
        }
        else {
            this.setState({phoneChange: false})
        }
        this.setState({newPhone: e.target.value})
    }

    handleChange = date => {
        if (this.state.dob != this.changeDate(date)) {
            this.setState({dobChange: true, newDOB: this.changeDate(date)})
        }
        else {
            this.setState({dobChange: false})
        }
        this.setState({startDate: date})
    }

    hidePassword(password) {
        let newPassword = ''
        for (let i = 0; i < password.length; i++)
            newPassword += '*'
        return newPassword
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

    onHandleSubmit = e => {
        if (this.state.nameChange == true || this.state.dobChange == true || this.state.genderChange == true || this.state.passwordChange == true || this.state.phoneChange == true) {
            //e.preventDefault()

            const myData = {
                username: this.state.email,
                name: (this.state.newName == ''? this.state.fullname: this.state.newName),
                phone: (this.state.newPhone == ''? this.state.phone: this.state.newPhone),
                email: this.state.email,
                password: (this.state.newPassword == ''? this.state.password: this.state.newPassword),
                gender: (this.state.newGender == ''? this.state.gender: this.state.newGender),
                birth: (this.state.newDOB == ''? this.state.dob: this.state.newDOB)
            }

            fetch('http://localhost:2000/api/user/update?userid=' + localStorage.getItem("userID"),
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(myData)
            })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    fullname: data.data.name,
                    dob: data.data.birth,
                    gender: data.data.gender,
                    password: data.data.password,
                    email: data.data.email,
                    phone: data.data.phone
                })
            })
        }
    }

    render() {
        return(

            <div className="container" style={{margin: '50px auto'}}>

                <h1 className="text-center col-12" style={{color: '#1429D7'}}>
                    <b>Personal Information</b>
                </h1>

                <p className="text-center col-12">
                    Basic Information (like your name, photo, contact, etc.), you can update anytime you want
                </p>

                <form className="border rounded">

                    <h2 className="col-11" style={{margin: '45px auto 0px',color: '#1429D7'}}>
                        <b>Profile</b>
                    </h2>

                    <p className="col-11" style={{margin: '0px auto 15px'}}>
                        Some information may be visible to other users in this library
                    </p>

                    <div className="form-group">

                        <div className="row col-10 border-bottom" style={{margin: '15px auto',padding: '5px 15px'}}>

                            <div className="row col-11">

                                <h5 className="d-xl-flex align-items-xl-center col-12 col-lg-2 text-left" style={{margin: '0px'}}>
                                    <b>Photo:</b>
                                </h5>

                                <p className="text-left d-xl-flex align-items-xl-center col-12 col-lg-8" style={{margin: '0px auto',marginLeft: '0px'}}>
                                    A photo helps you to personalize your account (optional)
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="form-group">

                        <div className="row col-10 border-bottom" style={{margin: '15px auto',padding: '5px 15px'}}>

                            <div className="row col-11">

                                <h5 className="d-xl-flex align-items-xl-center col-12 col-lg-2 text-left" style={{margin: '0px'}}>
                                    <b>Name:</b>
                                </h5>

                                <p className="text-left d-xl-flex align-items-xl-center col-12 col-lg-8" style={{margin: '0px auto',marginLeft: '0px'}}>
                                    {this.state.fullname}
                                </p>
                            </div>

                            <button className="btn btn-primary border-0 col-1 col-lg-1" type="button" style={{backgroundColor: 'rgba(0,123,255,0)',color: '#1429D7',margin: '0px auto'}} onClick={this.showNewNameEditor}>
                                <i id="iconDown" className="fa fa-chevron-down" style={{marginLeft: 'auto'}}></i>
                                <i id="iconUp" className="fa fa-chevron-up" style={{marginLeft: 'auto', display: 'none'}}></i>
                            </button>

                            <form id="nameEdit" className="border rounded col-12 mt-4 mb-4" style={{display: 'none'}} onClick={this.onHandleSubmit}>
                                <div className="form-group d-block col-11" style={{margin: '15px auto'}}>
                                    <p style={{color: 'gray'}}>Please type your fullname in this form</p>
                                    <input className="form-control" type="text" placeholder="*Please edit new fullname here..." value={this.state.newName} onChange={this.onNewNameChange} required/>
                                </div>

                                <button className="btn btn-primary border-0 rounded-pill mt-2 mb-4" type="submit" style={{backgroundColor: '#F15922',height:'40px',width: '150px',margin: '0px auto'}}>
                                    <b>Edit</b>
                                </button>
                            </form>

                        </div>

                    </div>

                    <div className="form-group">

                        <div className="row col-10 border-bottom" style={{margin: '15px auto',padding: '5px 15px'}}>

                            <div className="row col-11">

                                <h5 className="d-xl-flex align-items-xl-center col-12 col-lg-2 text-left" style={{margin: '0px'}}><b>
                                    DOB:</b>
                                </h5>

                                <p className="text-left d-xl-flex align-items-xl-center col-12 col-lg-8" style={{margin: '0px auto',marginLeft: '0px'}}>
                                    {this.state.dob}
                                </p>
                            </div>

                            <button className="btn btn-primary border-0 col-1 col-lg-1" type="button" style={{backgroundColor: 'rgba(0,123,255,0)',color: '#1429D7',margin: '0px auto'}} onClick={this.showNewDOBEditor}>
                                <i id="iconDown1" className="fa fa-chevron-down" style={{marginLeft: 'auto'}}></i>
                                <i id="iconUp1" className="fa fa-chevron-up" style={{marginLeft: 'auto', display: 'none'}}></i>
                            </button>

                            <form id="dobEdit" className="border rounded col-12 mt-4 mb-4" style={{display: 'none'}}>
                                <div className="form-group row d-block col-11" style={{margin: '15px auto'}}>
                                    <p style={{color: 'gray'}}>Please choose your DOB in this date-picker</p>
                                    <DatePicker selected={this.state.startDate} onChange={this.handleChange}/>
                                </div>

                                <button className="btn btn-primary border-0 rounded-pill mt-2 mb-4" type="submit" style={{backgroundColor: '#F15922',height:'40px',width: '150px',margin: '0px auto'}} onClick={this.onHandleSubmit}>
                                    <b>Edit</b>
                                </button>
                            </form>

                        </div>
                    </div>

                    <div className="form-group">

                        <div className="row col-10 border-bottom" style={{margin: '15px auto',padding: '5px 15px'}}>

                            <div className="row col-11">

                                <h5 className="d-xl-flex align-items-xl-center col-12 col-lg-2 text-left" style={{margin: '0px'}}>
                                    <b>Gender:</b>
                                </h5>

                                <p className="text-left d-xl-flex align-items-xl-center col-12 col-lg-8" style={{margin: '0px auto',marginLeft: '0px'}}>
                                    {this.state.gender}
                                </p>
                            </div>

                            <button className="btn btn-primary border-0 col-1 col-lg-1" type="button" style={{backgroundColor: 'rgba(0,123,255,0)',color: '#1429D7',margin: '0px auto'}} onClick={this.showNewGenderEditor}>
                                <i id="iconDown2" className="fa fa-chevron-down" style={{marginLeft: 'auto'}}></i>
                                <i id="iconUp2" className="fa fa-chevron-up" style={{marginLeft: 'auto', display: 'none'}}></i>
                            </button>

                            <form id="genderEdit" className="border rounded col-12 mt-4 mb-4" style={{display: 'none'}} onClick={this.onHandleSubmit}>
                                <div className="form-group row d-block col-11" style={{margin: '15px auto'}}>
                                    <p style={{color: 'gray'}}>Please choose your gender</p>
                                    <div className="d-flex col-lg-9 col-xl-10" style={{margin: '0px auto'}}>
                                            <div className="col-12 row" onChange={this.onNewGenderChange}> 
                                                <div className="col">
                                                    <input type="radio" value="Male"/> Male 
                                                </div>
                                                
                                                <div className="col">
                                                    <input type="radio" value="Female"/> Female
                                                </div>
                                                 
                                                <div className="col">
                                                    <input type="radio" value="Other"/> Other 
                                                </div>
                                                
                                            </div>
                                                       
                                        </div>
                                </div>

                                <button className="btn btn-primary border-0 rounded-pill mt-2 mb-4" type="submit" style={{backgroundColor: '#F15922',height:'40px',width: '150px',margin: '0px auto'}}>
                                    <b>Edit</b>
                                </button>
                            </form>

                        </div>
                    </div>

                    <div className="form-group" style={{marginBottom: '45px'}}>

                        <div className="row col-10" style={{margin: '15px auto',padding: '5px 15px'}}>

                            <div className="row col-11">

                                <h5 className="d-xl-flex align-items-xl-center col-12 col-lg-2 text-left" style={{margin: '0px'}}>
                                    <b>Password:</b>
                                </h5>

                                <p className="text-left d-xl-flex align-items-xl-center col-12 col-lg-8" type="password" style={{margin: '0px auto',marginLeft: '0px'}}>
                                    {this.hidePassword(this.state.password)}
                                </p>

                            </div>

                            <button className="btn btn-primary border-0 col-1 col-lg-1" type="button" style={{backgroundColor: 'rgba(0,123,255,0)',color: '#1429D7',margin: '0px auto'}} onClick={this.showNewPasswordEditor}>
                                <i id="iconDown3" className="fa fa-chevron-down" style={{marginLeft: 'auto'}}></i>
                                <i id="iconUp3" className="fa fa-chevron-up" style={{marginLeft: 'auto', display: 'none'}}></i>
                            </button>

                            <form id="passwordEdit" className="border rounded col-12 mt-4 mb-4" style={{display: 'none'}} onClick={this.onHandleSubmit}>
                                <div className="form-group d-block col-11" style={{margin: '15px auto'}}>
                                    <p style={{color: 'gray'}}>Please type your new password in this form</p>
                                    <input className="form-control" type="password" placeholder="*Please edit new password here..." value={this.state.newPassword} onChange={this.onNewPasswordChange} required minLength="6"/>
                                </div>

                                <button className="btn btn-primary border-0 rounded-pill mt-2 mb-4" type="submit" style={{backgroundColor: '#F15922',height:'40px',width: '150px',margin: '0px auto'}}>
                                    <b>Edit</b>
                                </button>
                            </form>

                        </div>

                    </div>

                </form>

                <form className="border rounded" style={{margin: '50px 0px'}}>

                    <h2 className="col-11" style={{margin: '45px auto 0px',color: '#1429D7'}}>
                        <b>Contact Information</b>
                    </h2>

                    <div className="form-group">

                        <div className="row col-10 border-bottom" style={{margin: '15px auto',padding: '5px 15px'}}>

                            <div className="row col-11">
                                <h5 className="d-xl-flex align-items-xl-center col-12 col-lg-2 text-left" style={{margin: '0px'}}>
                                    <b>Card Number:</b>
                                </h5>
                                <p className="text-left d-xl-flex align-items-xl-center col-12 col-lg-8" style={{margin: '0px auto',marginLeft: '0px'}}>
                                    {localStorage.getItem("userID")}
                                </p>
                            </div>
                            
                        </div>
                    </div>

                    <div className="form-group">

                        <div className="row col-10 border-bottom" style={{margin: '15px auto',padding: '5px 15px'}}>

                            <div className="row col-11">

                                <h5 className="d-xl-flex align-items-xl-center col-12 col-lg-2 text-left" style={{margin: '0px'}}>
                                    <b>Email:</b>
                                </h5>

                                <p className="text-left d-xl-flex align-items-xl-center col-12 col-lg-8" style={{margin: '0px auto',marginLeft: '0px'}}>
                                    {this.state.email}
                                </p>

                            </div>
                            
                        </div>

                    </div>

                    <div className="form-group" style={{marginBottom: '45px'}}>

                        <div className="row col-10" style={{margin: '15px auto',padding: '5px 15px'}}>

                            <div className="row col-11">

                                <h5 className="d-xl-flex align-items-xl-center col-12 col-lg-2 text-left" style={{margin: '0px'}}>
                                    <b>Phone:</b>
                                </h5>

                                <p className="text-left d-xl-flex align-items-xl-center col-12 col-lg-8" style={{margin: '0px auto',marginLeft: '0px'}}>
                                    {this.state.phone}
                                </p>


                            </div>

                            <button className="btn btn-primary border-0 col-1 col-lg-1" type="button" style={{backgroundColor: 'rgba(0,123,255,0)',color: '#1429D7',margin: '0px auto'}} onClick={this.showNewPhoneEditor}>
                                <i id="iconDown4" className="fa fa-chevron-down" style={{marginLeft: 'auto'}}></i>
                                <i id="iconUp4" className="fa fa-chevron-up" style={{marginLeft: 'auto', display: 'none'}}></i>
                            </button>

                            <form id="phoneEdit" className="border rounded col-12 mt-4 mb-4" style={{display: 'none'}} onClick={this.onHandleSubmit}>
                                <div className="form-group d-block col-11" style={{margin: '15px auto'}}>
                                    <p style={{color: 'gray'}}>Please type your phone number in this form</p>
                                    <input className="form-control" type="text" placeholder="*Please edit new phone number here..." value={this.state.newPhone} onChange={this.onNewPhoneChange} required minLength="10"/>
                                </div>

                                <button className="btn btn-primary border-0 rounded-pill mt-2 mb-4" type="submit" style={{backgroundColor: '#F15922',height:'40px',width: '150px',margin: '0px auto'}}>
                                    <b>Edit</b>
                                </button>
                            </form>

                        </div>

                    </div>

                </form>
            </div>
        )
    }
}