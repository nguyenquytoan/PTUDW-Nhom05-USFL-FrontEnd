import React, {Component} from 'react'
import {Event} from '../eventsComponent/event'
import {Link} from 'react-router-dom'

export class EventsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            events: [],
            defaultEvents: [
                {
                    serial: 0,
                    title: 'Library Closured Because of the Coronavirus (COVID-19)'
                },
                {
                    serial: 1,
                    title: 'More Book More Fun Keeping Streak With Us'
                },
                {
                    serial: 2,
                    title: 'Happy Lunar New Year 2020'
                }
            ]
        }
    }

    async componentDidMount() {
        try {
            const url = 'http://localhost:2000/api/event/' + this.props.kind
            const response = await fetch(url)
            if (response.ok) {
                const data = await response.json()
                this.setState({
                    isLoading: false,
                    events: data
                })
            }
            else{
                console.log('Request failed! - Events')
            }
        }
        catch(e) {
            console.log(e)
        }
        
    }

    createMiniEvents() {
        let miniEvents = []

        for (let i = 0; i < 3; i++) {
            miniEvents.push(<Event serial={this.state.events[i].serial} title={this.state.events[i].title} type={this.props.type}/>)
        }

        return miniEvents;
    }

    createEvents() {
        let largeEvents = []

        for (let i = 0; i < this.state.events.length; i++) {
            largeEvents.push(<Event serial={this.state.events[i].serial} title={this.state.events[i].title} type={this.props.type}/>)
        }

        return largeEvents;
    }

    async componentDidUpdate(prevProps, prevStates) {
        if (prevProps.kind != this.props.kind) {
            try {
                const url = 'http://localhost:2000/api/event/' + this.props.kind
                const response = await fetch(url)
                if (response.ok) {
                    const data = await response.json()
                    this.setState({
                        isLoading: false,
                        events: data
                    })
                }
                else{
                    console.log('Request failed! - Events')
                }
            }
            catch(e) {
                console.log(e)
            }
        }
    }


    render() {
        let type = this.props.type == 'mini'

        if (this.state.isLoading) {
            if (this.props.kind == 'all') {
                return (
                    <div className="container-fluid" style={{margin: '25px 0px'}}>
        
                        <div className="container row" style={{backgroundColor: 'transparent',margin: '0px auto'}}>
        
                            <div className="col-12 col-lg-2 mt-4" style={{borderTop: '3px solid #1429D7',color: '#1429D7', padding: '0px'}}>
                                <label>
                                    <b>{this.props.title}</b>
                                </label>
    
                                {type?
                                    <noscript></noscript>:
                                    <div>
                                        <Link to="/events/all">
                                            <div className="col-12 mt-4" style={{color: 'black'}}>
                                                <b>All</b>
                                            </div> 
                                        </Link>
    
                                        <Link to="/events/upcoming-events">
                                            <div className="col-12 mt-2" style={{color: 'gray'}}> 
                                                Upcoming Events
                                            </div>
                                        </Link>
    
                                        <Link to="/events/announcements">
                                            <div className="col-12 mt-2" style={{color: 'gray'}}>
                                                Announcements
                                            </div>
                                            
                                        </Link>
                                    </div>
                                }
                                
                            </div>
                            
                            {type?
                                <div className="col-lg-10 row">
                                    <Event serial={this.state.defaultEvents[0].serial} title={this.state.defaultEvents[0].title} type={this.props.type}/>
            
                                    <Event serial={this.state.defaultEvents[1].serial} title={this.state.defaultEvents[1].title} type={this.props.type}/>

                                    <Event serial={this.state.defaultEvents[2].serial} title={this.state.defaultEvents[2].title} type={this.props.type}/>

                                </div>:
                                <div className="col-lg-10">
                                    <Event serial={this.state.defaultEvents[0].serial} title={this.state.defaultEvents[0].title} type={this.props.type}/>
                
                                    <Event serial={this.state.defaultEvents[1].serial} title={this.state.defaultEvents[1].title} type={this.props.type}/>

                                    <Event serial={this.state.defaultEvents[2].serial} title={this.state.defaultEvents[2].title} type={this.props.type}/>
                                </div>
                            }
                            
                            
        
                        </div>
        
                        {type?
                            <Link to="events/all">
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

            else if (this.props.kind == 'upcoming-events') {
                return (
                    <div className="container-fluid" style={{margin: '25px 0px'}}>
        
                        <div className="container row" style={{backgroundColor: 'transparent',margin: '0px auto'}}>
        
                            <div className="col-12 col-lg-2 mt-4" style={{borderTop: '3px solid #1429D7',color: '#1429D7', padding: '0px'}}>
                                <label>
                                    <b>{this.props.title}</b>
                                </label>
    
                                <Link to="/events/all">
                                    <div className="col-12 mt-4" style={{color: 'gray'}}>
                                        All
                                    </div> 
                                </Link>
    
                                <Link to="/events/upcoming-events">
                                    <div className="col-12 mt-2" style={{color: 'black'}}> 
                                        <b>Upcoming Events</b>
                                    </div>
                                </Link>
    
                                <Link to="/events/announcements">
                                    <div className="col-12 mt-2" style={{color: 'gray'}}>
                                        Announcements
                                    </div>
                                            
                                </Link>
                                
                            </div>
        
                            <div className="col-lg-10">

                                <Event serial={this.state.defaultEvents[1].serial} title={this.state.defaultEvents[1].title} type={this.props.type}/>
    
                                <Event serial={this.state.defaultEvents[2].serial} title={this.state.defaultEvents[2].title} type={this.props.type}/>
                            </div>
                            
        
                        </div>
        
                        <div className="mt-4 mb-4 rounded" style={{color: '#1429D7'}}>
                            <b>No more contents</b>
                        </div>
                        
                    </div>
                )
            }
            
            else {
                return (
                    <div className="container-fluid" style={{margin: '25px 0px'}}>
        
                        <div className="container row" style={{backgroundColor: 'transparent',margin: '0px auto'}}>
        
                            <div className="col-12 col-lg-2 mt-4" style={{borderTop: '3px solid #1429D7',color: '#1429D7', padding: '0px'}}>
                                <label>
                                    <b>{this.props.title}</b>
                                </label>
    
                                <Link to="/events/all">
                                    <div className="col-12 mt-4" style={{color: 'gray'}}>
                                        All
                                    </div> 
                                </Link>
    
                                <Link to="/events/upcoming-events">
                                    <div className="col-12 mt-2" style={{color: 'gray'}}> 
                                        Upcoming Events
                                    </div>
                                </Link>
    
                                <Link to="/events/announcements">
                                    <div className="col-12 mt-2" style={{color: 'black'}}>
                                        <b>Announcements</b>
                                    </div>
                                            
                                </Link>
                                
                            </div>

                            <div className="col-lg-10">
                                <Event serial={this.state.defaultEvents[0].serial} title={this.state.defaultEvents[0].title} type={this.props.type}/>
                            </div>
                            
        
                        </div>
        
                        <div className="mt-4 mb-4 rounded" style={{color: '#1429D7'}}>
                            <b>No more contents</b>
                        </div>
                        
                    </div>
                )
            }
            
        }
        else {
            if (this.props.kind == 'all') {
                return (
                    <div className="container-fluid" style={{margin: '25px 0px'}}>
        
                        <div className="container row" style={{backgroundColor: 'transparent',margin: '0px auto'}}>
        
                            <div className="col-12 col-lg-2 mt-4" style={{borderTop: '3px solid #1429D7',color: '#1429D7', padding: '0px'}}>
                                <label>
                                    <b>{this.props.title}</b>
                                </label>
    
                                {type?
                                    <noscript></noscript>:
                                    <div>
                                        <Link to="/events/all">
                                            <div className="col-12 mt-4" style={{color: 'black'}}>
                                                <b>All</b>
                                            </div> 
                                        </Link>
    
                                        <Link to="/events/upcoming-events">
                                            <div className="col-12 mt-2" style={{color: 'gray'}}> 
                                                Upcoming Events
                                            </div>
                                        </Link>
    
                                        <Link to="/events/announcements">
                                            <div className="col-12 mt-2" style={{color: 'gray'}}>
                                                Announcements
                                            </div>
                                            
                                        </Link>
                                    </div>
                                }
                                
                            </div>
                            
                            {type?
                                <div className="col-lg-10 row">

                                    {this.createMiniEvents()}

                                </div>:
                                <div className="col-lg-10">
                                    {this.createEvents()}
                                </div>
                            }
                            
                            
        
                        </div>
        
                        {type?
                            <Link to="events/all">
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

            else if (this.props.kind == 'upcoming-events') {
                return (
                    <div className="container-fluid" style={{margin: '25px 0px'}}>
        
                        <div className="container row" style={{backgroundColor: 'transparent',margin: '0px auto'}}>
        
                            <div className="col-12 col-lg-2 mt-4" style={{borderTop: '3px solid #1429D7',color: '#1429D7', padding: '0px'}}>
                                <label>
                                    <b>{this.props.title}</b>
                                </label>
    
                                <Link to="/events/all">
                                    <div className="col-12 mt-4" style={{color: 'gray'}}>
                                        All
                                    </div> 
                                </Link>
    
                                <Link to="/events/upcoming-events">
                                    <div className="col-12 mt-2" style={{color: 'black'}}> 
                                        <b>Upcoming Events</b>
                                    </div>
                                </Link>
    
                                <Link to="/events/announcements">
                                    <div className="col-12 mt-2" style={{color: 'gray'}}>
                                        Announcements
                                    </div>
                                            
                                </Link>
                                
                            </div>
        
                            <div className="col-lg-10">

                                {this.createEvents()}
                            </div>
                            
        
                        </div>
        
                        <div className="mt-4 mb-4 rounded" style={{color: '#1429D7'}}>
                            <b>No more contents</b>
                        </div>
                        
                    </div>
                )
            }
            
            else {
                return (
                    <div className="container-fluid" style={{margin: '25px 0px'}}>
        
                        <div className="container row" style={{backgroundColor: 'transparent',margin: '0px auto'}}>
        
                            <div className="col-12 col-lg-2 mt-4" style={{borderTop: '3px solid #1429D7',color: '#1429D7', padding: '0px'}}>
                                <label>
                                    <b>{this.props.title}</b>
                                </label>
    
                                <Link to="/events/all">
                                    <div className="col-12 mt-4" style={{color: 'gray'}}>
                                        All
                                    </div> 
                                </Link>
    
                                <Link to="/events/upcoming-events">
                                    <div className="col-12 mt-2" style={{color: 'gray'}}> 
                                        Upcoming Events
                                    </div>
                                </Link>
    
                                <Link to="/events/announcements">
                                    <div className="col-12 mt-2" style={{color: 'black'}}>
                                        <b>Announcements</b>
                                    </div>
                                            
                                </Link>
                                
                            </div>

                            <div className="col-lg-10">
                                {this.createEvents()}
                            </div>
                            
        
                        </div>
        
                        <div className="mt-4 mb-4 rounded" style={{color: '#1429D7'}}>
                            <b>No more contents</b>
                        </div>
                        
                    </div>
                )
            }
        }
        
    }
}