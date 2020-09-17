import React,{Component} from 'react'
import {SlideImage} from '../slideImagesComponent/sildeImages'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

export class SlideImagesContainer extends Component {
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
                    title: 'More Book More Fun - Keeping Streak With Us'
                }
            ]
        }
    }

    async componentDidMount() {
        try {
            const url = 'http://localhost:2000/api/event/carousel'
            const response = await fetch(url)
            if (response.ok) {
                const data = await response.json()
                this.setState({
                    isLoading: false,
                    events: data
                })
            }
            else {
                console.log('Request failed!')
            }
        }
        catch(e) {
            console.log(e)
        }
        
    }

    createCarousel() {
        let slides = []

        for (let i = 0; i < this.state.events.length; i++) {
            slides.push(<SlideImage serial={this.state.events[i].serial} title={this.state.events[i].title}/>)
        }

        return slides
    }

    render() {
        if (this.state.isLoading) {
            return(
                <Carousel showArrows={true}>

                    <SlideImage serial={this.state.defaultEvents[0].serial} title={this.state.defaultEvents[0].title}/>

                    <SlideImage serial={this.state.defaultEvents[1].serial} title={this.state.defaultEvents[1].title}/>

                </Carousel>
            )
        }

        else {
            return(
                <Carousel showArrows={true}>
                    {this.createCarousel()}
                </Carousel>
            )
        }
        
    }
}