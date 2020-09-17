import React, {Component} from 'react'
import {BookContainer} from '../booksContainerComponent/booksContainer'
import PopUp from 'reactjs-popup'

export class ContactDetail extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            message: '',
            messageValidation: false,
            showResponse: false,
            showModal: false,
            responseMessage: 'Your message is sent to our library. Thank you for your information.'
        }
    }

    onMessageChange = e => {
        if (e.target.value != "") {
            this.setState({messageValidation: true})
        }
        else {
            this.setState({messageValidation: false})
        }
        this.setState({message: e.target.value})
    }

    onHandleSubmit = e => {
        if (this.state.messageValidation == true) {
            e.preventDefault()
            this.setState({showResponse: true})
        }
    }

    onShowModal = e => {
        this.setState({showModal: true})
    }

    render() {
        if (this.props.kind == 'get-a-card') {
            return (
                <div className="container-fluid" style={{padding: '0px'}}>
                    <form className="col-lg-8" style={{margin: 'auto'}}>
                        <div className="form-group" id="getacard">
                            <h2 className="col-11 mb-4" style={{color: '#1429D7',margin: '45px auto 15px',padding: '0px 15px'}}><b>GET A CARD</b></h2>
                            <ul className="text-justify col-11 mb-4" style={{margin: '15px auto',padding: '0px 15px', lineHeight: '1.8', listStyle: 'inside'}}>
                                You can get your card through <b>1 in 2 ways</b> later: 
                                <li className="mt-4 mb-4">Go to the library directly, contact our librarian for card issuance instructions.</li>
                                <li className="mb-4">After signing up successful, you will receive a confirmation email. Then, you just need to give that email to the librarian and you will get your card.</li>
                            </ul>

                            
                        </div>
                    </form>

                    <div className="mt-4 mb-4 rounded" style={{color: 'black'}}>
                        <b>Or you have already contacted to our librarian and waiting to get a card. <br/>We recommend you some new books that we think you're interested in</b>
                    </div>

                    <BookContainer lineStyle='2' title='New and Noteworthy' tag='none' type='mini' kind='allNew'/>

                    <BookContainer lineStyle='3' title='Popular Books' tag='none' type='mini' kind='allPopular'/>
                </div>
            )
        }
        else if (this.props.kind == 'manage-my-account') {
            if (localStorage.getItem("signInStatus") == 'true') {
                return (
                    <div className="container-fluid" style={{padding: '0px'}}>
                        <form className="col-lg-8" style={{margin: 'auto'}}>
                            <div className="form-group" id="manageacc">
                                <h2 className="col-11 mb-4" style={{color: '#1429D7',margin: '45px auto 15px',padding: '0px 15px'}}><b>MANAGE MY ACCOUNT</b></h2>

                                <ul className="text-justify col-12 mb-4" style={{margin: '15px auto',padding: '0px 15px', lineHeight: '1.8', listStyle: 'inside'}}>
                                    Please <b>sign in</b> to our library's website if you already have an account. If <b>not</b>, please <b>sign up</b> to get an account for free.<br/>
                                    If you have already signed in, please follow these instructions to manage your account:
                                    <li className="mt-2 mb-2">Please find an account icon on your top right of your screen (the purple one next to the bell)</li>
                                    <li className="mt-2 mb-2">Click on that icon and you will see a list which contains "Profile"</li>
                                    <li className="mb-4">Go to "Profile" to manage your account.</li>
                                    Or you could click on <a href='/user/profile' style={{color: '#1429D7', fontWeight: 'bold'}}>My profile</a> to be able to manage your account's information
                                </ul>
                            </div>
                        </form>

                        <BookContainer lineStyle='3' title='Popular Books' tag='none' type='mini' kind='allPopular'/>
                    </div>
                )
            }
            else {
                return(
                    <div className="container-fluid" style={{padding: '0px'}}>
                        <form className="col-lg-8" style={{margin: 'auto'}}>
                            <div className="form-group" id="manageacc">
                                <h2 className="col-11 mb-4" style={{color: '#1429D7',margin: '45px auto 15px',padding: '0px 15px'}}><b>MANAGE MY ACCOUNT</b></h2>

                                <ul className="text-justify col-12 mb-4" style={{margin: '15px auto',padding: '0px 15px', lineHeight: '1.8', listStyle: 'inside'}}>
                                    Please <a href='/sign-in' style={{color: '#1429D7', fontWeight: 'bold'}}>sign in</a> to our library's website if you already have an account. If <b>not</b>, please <a href='/sign-up' style={{color: '#1429D7', fontWeight: 'bold'}}>sign up</a> to get an account for free.<br/>
                                    If you have already signed in, please follow these instructions to manage your account:
                                    <li className="mt-2 mb-2">Please find an account icon on your top right of your screen (the purple one next to the bell)</li>
                                    <li className="mt-2 mb-2">Click on that icon and you will see a list which contains "Profile"</li>
                                    <li className="mb-4">Go to "Profile" to manage your account.</li>
                                    
                                </ul>
                            </div>
                        </form>

                        <BookContainer lineStyle='3' title='Popular Books' tag='none' type='mini' kind='allPopular'/>
                    </div>
                )
            }
            
                
        }
        else if (this.props.kind == 'print') {
            return (
                <div className="container-fluid" style={{padding: '0px'}}>
                    <form className="col-lg-8" style={{margin: 'auto'}}>
                        <div className="form-group" id="print">
                            <h2 className="col-11" style={{color: '#1429D7',margin: '45px auto 15px',padding: '0px 15px'}}><b>PRINT FROM ANYWHERE</b></h2>
                            <p className="text-justify col-11 text-center" style={{margin: '15px auto',padding: '0px 15px'}}>
                                <b>This feature will come to our website soon. Please wait...<br/>
                                Thank you for your decision about choosing our library.</b> 
                            </p>

                        </div>
                    </form>

                    <BookContainer lineStyle='2' title='New and Noteworthy' tag='none' type='mini' kind='allNew'/>

                    <BookContainer lineStyle='3' title='Popular Books' tag='none' type='mini' kind='allPopular'/>
                </div>
            )
        }
        else {
            return (
                <div className="container-fluid" style={{padding: '0px'}}>
                    <form className="col-lg-8" style={{margin: 'auto'}} onClick={this.onHandleSubmit}>
                        <div className="form-group" id="gethelp">
                            <h2 className="col-11" style={{color: '#1429D7',margin: '45px auto 15px',padding: '0px 15px'}}><b>GET HELP</b></h2>                                      
                            <p className="text-justify col-11" style={{margin: '15px auto',padding: '0px 15px'}}>
                                If you have any questions about our website, please feel free to ask us below. We will respond as soon as possible.
                            </p>
                            <div className="form-group d-block col-11" style={{margin: '15px auto'}}>
                                <textarea className="form-control" placeholder="*Questions" value={this.state.message} onChange={this.onMessageChange} required style={{height: '100px'}}/>
                            </div>

                            <PopUp open={this.state.showModal}>
                                <div className="mt-4 mb-4 rounded" style={{color: 'black'}}>
                                    <b>{this.state.responseMessage}</b>
                                </div>
                            </PopUp>

                            <button className="btn btn-primary border-0 rounded-pill mb-4" type="submit" style={{backgroundColor: '#F15922',height:'40px',width: '150px',margin: '0px auto'}} onClick={this.onShowModal}>
                                <b>Submit</b>
                            </button>
                        </div>  
                    </form>

                    <BookContainer lineStyle='2' title='New and Noteworthy' tag='none' type='mini' kind='allNew'/>

                </div>
            )
        }
        
        
    }
}