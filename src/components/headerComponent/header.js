import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import logo from '../../asserts/img/library-logo.png';
import logoSmall from '../../asserts/img/library-logo-sm.png';
import {SearchBar} from '../../components/searchBarComponent/searchBar'
import App from '../../App'

const jumbotronStyles = {
    height:             '75px',
    margin:             'auto',
    backgroundColor:    '#fff',
    borderBottom:       '3px solid #1429D7',
    padding:            'auto'
}

export class Header extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        let signIn = this.props.signIn
        let status = this.props.status

        return (
            <header>
                <div className="jumbotron d-flex align-items-center" style={jumbotronStyles}>

                    <Link to="/" style={{margin: '0px 10px'}}>
                        <img className="img-fluid ml-auto d-none d-md-inline-block" data-toggle="tooltip" data-bs-tooltip="" data-placement="bottom" src={logo} title="University of Science FIT Library"/>
                        <img className="ml-auto img-fluid d-inline-block d-md-none" data-toggle="tooltip" data-bs-tooltip="" data-placement="bottom" src={logoSmall} title="University of Science FIT Library"style={{width: '75px',height: '75px'}}/>
                    </Link>

                    <SearchBar format='true'/>

                    <div className="col-lg-2 row justify-content-end">

                    
                        {status?
                        <button className="btn d-lg-none" aria-expanded="false" type="button" style={{marginRight: '12px'}}>
                            <i id="searchHidden" className="fa fa-search d-flex float-right justify-content-center align-items-center ml-auto d-inline-block d-lg-none" style={{width: 'auto',height: '25px',color: '#1429D7',fontSize: '20px'}} onClick={this.props.change}></i>
                        </button>:

                        <button className="btn d-lg-none" aria-expanded="false" type="button" style={{marginRight: '12px'}}>
                            <i id="searchHidden" className="fa fa-remove d-flex float-right justify-content-center align-items-center ml-auto d-inline-block d-lg-none" style={{width: 'auto',height: '25px',color: 'gray',fontSize: '20px'}} onClick={this.props.change}></i>
                        </button>}
                        
                        
                        {!signIn? 
                        <Link to="/sign-up">
                            <button id="signUpButton" className="btn btn-lg text-break text-center float-right rounded-pill" type="button" style={{color: '#1429D7',filter: 'hue-rotate(0deg)',border: '2px solid #1429D7',fontSize: '15px'}}>
                                <b>Sign up</b>
                            </button>
                        </Link> : 
                        <div className="row">

                            <div className="drop-down float-right">
                                <button className="btn" data-toggle="dropdown" aria-expanded="false" type="button">
                                    <i className="fa fa-bell" style={{color: '#1429D7',fontSize: '30px', marginTop: '5px'}}></i>
                                </button>

                                <div className="dropdown-menu dropdown-menu-right" role="menu" style={{width: '60vw', maxWidth: '500px'}}>
                                    <div className="dropdowm-item align-items-center" style={{display: 'flex', borderBottom: '2px solid #1429D7', padding: '10px'}}>
                                        <div>
                                            <span>
                                                <b>No notifications</b>
                                            </span>
                                        </div>  
                                                                    
                                    </div>

                                    
                                </div>
                                
                            </div>
                            <div className="drop-down float-right">
                                <button className="btn" data-toggle="dropdown" aria-expanded="false" type="button">
                                    <i className="fa fa-user-circle-o" style={{fontSize: '40px', color: '#1429D7'}}></i>
                                </button>
                                <div class="dropdown-menu dropdown-menu-right" role="menu">
                                    <Link to="/user/profile" class="dropdown-item" role="presentation">
                                        Profile
                                    </Link>

                                    <Link to="/user/my-book" class="dropdown-item" role="presentation">
                                        My Books
                                    </Link>

                                    <Link to="/" class="dropdown-item" role="presentation" onClick={this.props.click}>
                                        Log Out
                                    </Link>

                                </div>

                            </div>

                            
                        </div>}
                    </div>
                </div>
            </header>
        );
    }
}