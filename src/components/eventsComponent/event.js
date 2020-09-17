import React, {Component} from 'react'
import EventsImage from '../../asserts/js/eventsImage'
import {
    Link
} from 'react-router-dom'

export class Event extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let type = this.props.type == 'mini'
        if (type) {
            return (
                <div className="col-12 col-md mt-4">
    
                    <div className="card col-12" style={{backgroundColor:'transparent',border:'none'}}>
    
                        <div>
                            <img src={EventsImage[parseInt(this.props.serial)]} style={{width: '100%',height:'190px'}}/>
                        </div>
    
                        <div className="mt-2">
                            <Link style={{color: 'black'}}>
                                <b>{this.props.title}</b>
                            </Link>
                        </div>
                        
                    </div>
                </div>
            )
        }
        else {
            return(
                <div className="col-12 mt-4">

                    <div className="col-12 row" style={{backgroundColor: 'transparent', border:'none'}}>

                        <div className="col-md-4">
                            <img src={EventsImage[parseInt(this.props.serial)]} style={{width: '100%',height:'190px'}}/>
                        </div>

                        <div className="col-md-8 mt-4">
                            <Link style={{color: 'black'}}>
                                <b>{this.props.title}</b>
                            </Link>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...
                            </p>
                        </div>

                    </div>

                </div>
            )
            
        }
        
    }
}