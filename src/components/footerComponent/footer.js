import React, {Component} from 'react'
import logoSmall from '../../asserts/img/library-logo-sm.png'
import {
    BrowserRouter as Router, 
    Link
} from 'react-router-dom'

export class Footer extends Component {
    render() {
        return (
            
                <footer style={{backgroundColor: '#000080'}}>
                    <div className="container">
                        <form className="col-12">
                            <div className="row col-12" style={{margin: 0}}>
                                <img className="d-inline-block col-7 col-lg-2" src={logoSmall} style={{height: '150px',margin: '30px auto'}} />
                                <form className="col-12 col-sm-6 col-lg-3" style={{margin: '30px auto'}}>
                                    <div className="form-group">
                                        <h4 style={{color: '#fff'}}><strong>Your Library</strong></h4>
                                        <ul className="list-group">
                                            <li className="list-group-item border-0" style={{padding: '0px',backgroundColor: 'rgba(255,255,255,0)'}}>
                                                <Link to='/rules' style={{color: '#fff'}}>About</Link>
                                            </li>
                                            <li className="list-group-item border-0" style={{padding: '0px',backgroundColor: 'rgba(255,255,255,0)'}}>
                                                <Link to='/rules' style={{color: '#fff'}}>History</Link>
                                            </li>
                                            <li className="list-group-item border-0" style={{padding: '0px',backgroundColor: 'rgba(255,255,255,0)'}}>
                                                <Link to='/rules' style={{color: '#fff'}}>Staff</Link>
                                            </li>
                                            <li className="list-group-item border-0" style={{padding: '0px',backgroundColor: 'rgba(255,255,255,0)'}}>
                                                <Link to='/rules' style={{color: '#fff'}}>Employment Opportunities</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    
                                </form>

                                <form className="col-12 col-sm-6 col-lg-3" style={{margin: '30px auto'}}>
                                    <div className="form-group">
                                        <h4 style={{color: '#fff'}}><strong>How Do I?</strong></h4>
                                        <ul className="list-group">
                                            <li className="list-group-item border-0" style={{padding: '0px',backgroundColor: 'rgba(255,255,255,0)'}}>
                                                <Link to="/contact/get-a-card" style={{color: '#fff'}}>Get A Card</Link>
                                            </li>
                                            <li className="list-group-item border-0" style={{padding: '0px',backgroundColor: 'rgba(255,255,255,0)'}}>
                                                <Link to="/contact/manage-my-account" style={{color: '#fff'}}>Manage My Account</Link>
                                            </li>
                                            <li className="list-group-item border-0" style={{padding: '0px',backgroundColor: 'rgba(255,255,255,0)'}}>
                                                <Link to="/contact/print" style={{color: '#fff'}}>Print From Anywhere</Link>
                                            </li>
                                            <li className="list-group-item border-0" style={{padding: '0px',backgroundColor: 'rgba(255,255,255,0)'}}>
                                                <Link to="/contact/get-help" style={{color: '#fff'}}>Get Help</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </form>

                                <form className="col-12 col-lg-4" style={{margin: '30px auto'}}>
                                    <div className="form-group"> 
                                        <h4 style={{color: '#fff'}}><strong>Visit</strong></h4>
                                        <p style={{color: '#fff'}}>Monday - Friday: 7a.m - 5p.m<br/>Saturday: 7a.m - 11a.m<br/>Sunday: closed</p>
                                    </div>

                                    <div className="form-group"> 
                                        <h4 style={{color: '#fff'}}><strong>Phone</strong></h4>
                                        <p style={{color: '#fff'}}>028 6288 4499</p>
                                    </div>

                                    <div className="form-group"> 
                                        <h4 style={{color: '#fff'}}><strong>Address</strong></h4>
                                        <p style={{color: '#fff'}}>227 Nguyen Van Cu Street, Ward 4, District 5, HCMC</p>
                                        <Link style={{color: '#fff'}}>Get Direction</Link>
                                    </div>
                                </form>
                            </div>

                            <div className="row col-12" style={{padding: '0px',margin: '10px 0px'}}>
                                <form className="col-12 col-lg-5" style={{margin: 'auto',width: 'auto'}}>
                                    <h4 className="text-center" style={{color: '#fff',fontSize: '22px'}}>Connect Us</h4>
                                    <div className="row col-12" style={{margin: '0px',padding: '0px'}}>
                                        <i className="fa fa-facebook-square d-flex justify-content-center" style={{width: 'auto',height: 'auto',color: '#fff',fontSize: '35px',marginLeft: 'auto',marginRight: '10px'}}></i>
                                        <i className="fa fa-google-plus-square d-flex justify-content-center" style={{width: 'auto',height: 'auto',color: '#fff',fontSize: '35px',margin: '0px 10px'}}></i>
                                        <i className="fa fa-twitter-square d-flex justify-content-center" style={{width: 'auto',height: 'auto',color: '#fff',fontSize: '35px',margin: '0px 10px'}}></i>
                                        <i className="fa fa-instagram d-flex justify-content-center" style={{width: 'auto',height: 'auto',color: '#fff',fontSize: '35px',marginLeft: '10px',marginRight: 'auto'}}></i>
                                    </div>
                                </form>

                                <form className="d-none d-lg-block col-7" style={{margin: 'auto',width: 'auto'}}>
                                    <h4 style={{color: '#fff'}}>Sign up for news</h4>
                                    <div className="form-group">
                                        <input className="form-control form-control-lg rounded-pill" type="text" placeholder="Enter email here..." required="" style={{width: '438px',margin: '0px auto'}}/>
                                        
                                    </div>
                                </form>
                            </div>

                        </form>
                    </div>

                    <div className="row col-12" style={{backgroundColor: '#f2f2f2',height: '50px',width: 'auto',margin: '0px'}}> 
                        <i className="fa fa-copyright d-xl-flex justify-content-xl-center align-items-xl-center" style={{width: 'auto',height: 'auto',fontSize: '30px',margin: 'auto 5px auto auto'}}></i>
                        <p className="d-xl-flex justify-content-xl-center align-items-xl-center" style={{fontSize: '16px',margin: 'auto auto auto 5px'}}>Copyright 2020 by PTUDW-Nhom05</p>
                    </div>
                </footer>
            
            
        )
    }
}