import React, {Component} from 'react'
import {Blog} from '../blogsComponent/blog'
import { Link } from 'react-router-dom'

export class BlogsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            blogs: [],
            defaultBlogs: [
                {
                    serial: 0,
                    title: 'Nhập môn lập trình',
                    text: 'Khởi đầu của giấc mơ lập trình viên trong tôi. Đây là cuốn sách đầu tiên khi tôi bước chân vào môi trường đại học nói chung và ngành Công nghệ Thông tin nói riêng.',
                    userName: 'hdtien'
                },
                {
                    serial: 1,
                    title: 'CTDL và GT',
                    text: 'Giấc mơ của tôi bắt đầu từ điều "phi thường". Đây là cuốn sách tôi tâm đắc nhất trong số sách mà tôi có. Dù như thế nào thì hành trang của tôi không thể thiếu cuốn sách này.',
                    userName: 'ntmthuy'
                }
            ]
        }
    }

    async componentDidMount() {
        try {
            const url = 'http://localhost:2000/api/blog/all'
            const response = await fetch(url) 
            if (response.ok) {
                const data = await response.json()
                this.setState({
                    isLoading: false,
                    blogs: data
                })
            }
            else {
                console.log('Request failed! - Blogs')
            }
        }
        catch(e) {
            console.log(e)
        }
        
    }

    createMiniBlogs() {
        let miniBlogs = []

        for (let i = 0; i < 2; i++) {
            miniBlogs.push(<Blog serial={this.state.blogs[i].serial} title={this.state.blogs[i].title} text={this.state.blogs[i].text} userName={this.state.blogs[i].userName} type={this.props.type}/>)
        }

        return miniBlogs
    }

    createBlogs() {
        let realBlogs = []

        for (let i = 0; i < this.state.blogs.length; i++) {
            realBlogs.push(<Blog serial={this.state.blogs[i].serial} title={this.state.blogs[i].title} text={this.state.blogs[i].text} userName={this.state.blogs[i].userName} type={this.props.type}/>)
        }

        return realBlogs
    }

    render() {
        let type = this.props.type == 'mini'
        if (this.state.isLoading) {
            if (type) {
                return (
                    <div className="container-fluid" style={{backgroundColor: 'rgba(20, 41, 215, 0.68)', color: 'white', margin: '25px 0px'}}>
        
                        <div className="container row" style={{backgroundColor: 'transparent',margin: '0px auto'}}>
        
                            <div className="col-12 col-lg-2 mt-4" style={{borderTop: '3px solid white'}}>
                                <label className="col-12" style={{padding: '0px'}}>
                                    <b>{this.props.title}</b>
                                </label>
                            </div>
        
                            <Blog serial={this.state.defaultBlogs[0].serial} title={this.state.defaultBlogs[0].title} text={this.state.defaultBlogs[0].text} userName={this.state.defaultBlogs[0].userName} type={this.props.type}/>
        
                            <Blog serial={this.state.defaultBlogs[1].serial} title={this.state.defaultBlogs[1].title} text={this.state.defaultBlogs[1].text} userName={this.state.defaultBlogs[1].userName} type={this.props.type}/>
                            
                        </div>
        
                        <Link to='/blogs/all'>
                            <button className="btn btn-primary border-0 rounded-pill mt-4 mb-4" style={{backgroundColor: '#F15922',height: '40px',width: '150px',margin: '0px auto'}}>
                                <b>...See More</b>
                            </button>
                        </Link>
                        
                    </div>
                )
            }
            else {
                return (
                    <div className="container-fluid" style={{backgroundColor: 'white', color: '#1429D7', margin: '25px 0px'}}>
        
                        <div className="container row" style={{backgroundColor: 'transparent',margin: '0px auto'}}>
        
                            <div className="col-12 col-lg-2 mt-4" style={{borderTop: '3px solid #1429D7'}}>
                                <label className="col-12" style={{padding: '0px'}}>
                                    <b>{this.props.title}</b>
                                </label>
                            </div>
        
                            <div className="col-lg-10">
                                <Blog serial={this.state.defaultBlogs[0].serial} title={this.state.defaultBlogs[0].title} text={this.state.defaultBlogs[0].text} userName={this.state.defaultBlogs[0].userName} type={this.props.type}/>
        
                                <Blog serial={this.state.defaultBlogs[1].serial} title={this.state.defaultBlogs[1].title} text={this.state.defaultBlogs[1].text} userName={this.state.defaultBlogs[1].userName} type={this.props.type}/>
                            </div>
                            
                            
                        </div>
        
                        <div className="mt-4 mb-4 rounded">
                            <b>No more contents</b>
                        </div>
                        
                    </div>
                )
            }
            
        }
        else {
            if (type) {
                return (
                    <div className="container-fluid" style={{backgroundColor: 'rgba(20, 41, 215, 0.68)', color: 'white', margin: '25px 0px'}}>
        
                        <div className="container row" style={{backgroundColor: 'transparent',margin: '0px auto'}}>
        
                            <div className="col-12 col-lg-2 mt-4" style={{borderTop: '3px solid white'}}>
                                <label className="col-12" style={{padding: '0px'}}>
                                    <b>{this.props.title}</b>
                                </label>
                            </div>
        
                            {this.createMiniBlogs()}
                            
                        </div>
        
                        <Link to='/blogs/all'>
                            <button className="btn btn-primary border-0 rounded-pill mt-4 mb-4" style={{backgroundColor: '#F15922',height: '40px',width: '150px',margin: '0px auto'}}>
                                <b>...See More</b>
                            </button>
                        </Link>
                        
                    </div>
                )
            }
            else {
                return (
                    <div className="container-fluid" style={{backgroundColor: 'white', color: '#1429D7', margin: '25px 0px'}}>
        
                        <div className="container row" style={{backgroundColor: 'transparent',margin: '0px auto'}}>
        
                            <div className="col-12 col-lg-2 mt-4" style={{borderTop: '3px solid #1429D7'}}>
                                <label className="col-12" style={{padding: '0px'}}>
                                    <b>{this.props.title}</b>
                                </label>
                            </div>
        
                            <div className="col-lg-10">
                               {this.createBlogs()}
                            </div>
                            
                            
                        </div>
        
                        <div className="mt-4 mb-4 rounded">
                            <b>No more contents</b>
                        </div>
                        
                    </div>
                )
            }
        }
        
    }
}