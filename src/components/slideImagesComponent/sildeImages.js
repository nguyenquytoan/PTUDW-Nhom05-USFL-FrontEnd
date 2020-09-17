import React, {Component} from 'react'
import EventImage from '../../asserts/js/eventsImage'
import {Link} from 'react-router-dom'

export class SlideImage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const status = (this.props.status =='active')
        return (
            <div>
                <img src={EventImage[parseInt(this.props.serial)]}/>
                <p className="legend"><b>{this.props.title}</b></p>
            </div>
            
        )
    }
}