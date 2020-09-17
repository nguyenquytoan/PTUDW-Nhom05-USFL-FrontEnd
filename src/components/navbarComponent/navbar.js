import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Link 
} from 'react-router-dom'

const navBarContents = ['Home', 'Contens', 'Rules', 'Contact']

export class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {choice: 1}
    }

    render() {
        return (
            <nav className="navbar navbar-light navbar-expand-md shadow d-xl-flex align-items-xl-center" style={{width: 'auto'}}>
                <div className="container-fluid">
                    <button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1">
                        <span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="nav navbar-nav">
                            <li className="nav-item" role="presentation">
                                <Link to="/" className="nav-link" style={{margin: '0px 40px'}}>Home</Link>
                            </li>
                            <li className="nav-item" role="presentation">
                                <Link to="/contents" className="nav-link" style={{margin: '0px 40px'}}>Contents</Link>
                            </li>
                            <li className="nav-item" role="presentation">
                                <Link to="/rules" className="nav-link" style={{margin: '0px 40px'}}>Rules</Link>
                            </li>
                            <li className="nav-item" role="presentation">
                                <Link to="/contact" className="nav-link" style={{margin: '0px 40px'}}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
            
        )
    }
}