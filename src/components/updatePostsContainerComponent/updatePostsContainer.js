import React, {Component} from 'react'
import {UpdatePost} from '../updatePostsComponent/updatePost'
import {Link} from 'react-router-dom'

export class UpdatePostsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            updates: [],
            defaultUpdates: [
                {
                    serial: 0,
                    title: 'Coronavirus (COVID-19) Information',
                    info: 'Find out what you should do during quarantine and our temporary closure'
                },
                {
                    serial: 1,
                    title: 'Library Card Updated',
                    info: 'Find out what is new in your online library card'
                }
            ]
        }
    }

    async componentDidMount() {
        try {
            const url = 'http://localhost:2000/api/update/all'
            const response = await fetch(url)
            if (response.ok) {
                const data = await response.json()
                this.setState({
                    isLoading: false,
                    updates: data
                })
            }
            else {
                console.log('Request failed! - Updates')
            }
        }
        catch(e) {
            console.log(e)
        }
        
    }

    createMiniUpdates() {
        let miniUpdates = [] 

        for (let i = 0; i < 2; i++) {
            miniUpdates.push(<UpdatePost serial={this.state.updates[i].serial} title={this.state.updates[i].title} info={this.state.updates[i].info} type={this.props.type}/>)
        }

        return miniUpdates
    }

    createUpdates() {
        let realUpdates = [] 

        for (let i = 0; i < this.state.updates.length; i++) {
            realUpdates.push(<UpdatePost serial={this.state.updates[i].serial} title={this.state.updates[i].title} info={this.state.updates[i].info} type={this.props.type}/>)
        }

        return realUpdates
    }

    render() {
        let type = this.props.type == 'mini'
        if (this.state.isLoading) {
            return (
                <div className="container-fluid" style={{backgroundColor: 'white', color: 'black', margin: '25px 0px'}}>

                    <div className="container row" style={{backgroundColor: 'transparent',margin: '0px auto'}}>

                        <div className="col-12 col-lg-2 mt-4" style={{borderTop: '3px solid #1429D7'}}>

                            <label className="col-12" style={{padding: '0px', color: '#1429D7'}}>
                                <b>{this.props.title}</b>
                            </label>

                        </div>

                        {type?
                            <div className="col-lg-10 row">
                                <UpdatePost serial={this.state.defaultUpdates[0].serial} title={this.state.defaultUpdates[0].title} info={this.state.defaultUpdates[0].info} type={this.props.type}/>
                                <UpdatePost serial={this.state.defaultUpdates[1].serial} title={this.state.defaultUpdates[1].title} info={this.state.defaultUpdates[1].info} type={this.props.type}/>
                            </div>:
                            <div className="col-lg-10">
                                <UpdatePost serial={this.state.defaultUpdates[0].serial} title={this.state.defaultUpdates[0].title} info={this.state.defaultUpdates[0].info} type={this.props.type}/>
                                <UpdatePost serial={this.state.defaultUpdates[1].serial} title={this.state.defaultUpdates[1].title} info={this.state.defaultUpdates[1].info} type={this.props.type}/>
                            </div>
                        }
    
                        
                    
                    </div>
    
                    {type?
                            <Link to="updates/all">
                                <button className="btn btn-primary border-0 rounded-pill mt-4 mb-4" style={{backgroundColor: '#F15922',height: '40px',width: '150px',margin: '0px auto'}}>
                                    <b>...See More</b>
                                </button>
                            </Link>:
        
                            <div className="mt-4 mb-4 rounded" style={{color: '#1429D7'}}>
                                <b>No more contents</b>
                            </div>
                        }
                </div>
            )
        }
        else {
            return (
                <div className="container-fluid" style={{backgroundColor: 'white', color: 'black', margin: '25px 0px'}}>

                    <div className="container row" style={{backgroundColor: 'transparent',margin: '0px auto'}}>

                        <div className="col-12 col-lg-2 mt-4" style={{borderTop: '3px solid #1429D7'}}>

                            <label className="col-12" style={{padding: '0px', color: '#1429D7'}}>
                                <b>{this.props.title}</b>
                            </label>

                        </div>

                        {type?
                            <div className="col-lg-10 row">
                                {this.createMiniUpdates()}
                            </div>:
                            <div className="col-lg-10">
                                {this.createUpdates()}
                            </div>
                        }
    
                        
                    
                    </div>
    
                    {type?
                            <Link to="updates/all">
                                <button className="btn btn-primary border-0 rounded-pill mt-4 mb-4" style={{backgroundColor: '#F15922',height: '40px',width: '150px',margin: '0px auto'}}>
                                    <b>...See More</b>
                                </button>
                            </Link>:
        
                            <div className="mt-4 mb-4 rounded" style={{color: '#1429D7'}}>
                                <b>No more contents</b>
                            </div>
                        }
                </div>
            )
        }
        
    }
}