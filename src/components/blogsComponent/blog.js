import React, {Component} from 'react'
import BookImage from '../../asserts/js/images'

export class Blog extends Component {
    constructor(props) {
        super(props)
    }

    render() { 
        let type = this.props.type == 'mini'
        if (type) {
            return (
                <div className="col-lg border rounded mt-4" style={{backgroundColor: 'white', color: 'black', marginLeft: '25px', marginRight: '25px'}}>
    
                    <div className="row" style={{height: '100%'}}>
    
                        <div className="col-7" style={{margin: 'auto 0px'}}>
    
                            <label className="col-12 mb-0">
                                <b>{this.props.title}</b>
                            </label>
    
                            <p className="mb-0 text-justify" style={{fontSize: '14px'}}>
                                {this.props.text}
                            </p>
    
                            <label className="col-12 text-right">
                                by <b>{this.props.userName}</b>
                            </label>
                            
                        </div>
    
                        <div className="col-5" style={{padding: '0px'}}>
                            <img className="border" src={BookImage[parseInt(this.props.serial)]} style={{width: "75%", margin: '20px auto', padding: '0px'}}/>
                        </div>
                        
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="col-12 border rounded mt-4" style={{backgroundColor: 'white', color: 'black', marginLeft: '25px', marginRight: '25px'}}>
    
                    <div className="row" style={{height: '100%'}}>
    
                        <div className="col-7 col-md-9" style={{margin: 'auto 0px'}}>
    
                            <label className="col-12 mb-0">
                                <b>{this.props.title}</b>
                            </label>
    
                            <p className="mb-0 text-justify" style={{fontSize: '14px'}}>
                                {this.props.text}
                            </p>
    
                            <label className="col-12 text-right">
                                by <b>{this.props.userName}</b>
                            </label>
                            
                        </div>
    
                        <div className="col-5 col-md-3" style={{padding: '0px'}}>
                            <img className="border" src={BookImage[parseInt(this.props.serial)]} style={{width: "fit", height: '190px', margin: '20px auto', padding: '0px'}}/>
                        </div>
                        
                    </div>
                </div>
            )
        }
        
    }
}