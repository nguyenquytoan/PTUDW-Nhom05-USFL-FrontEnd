import React, {Component} from 'react'
import {BookCard} from '../bookCardComponent/bookCard'
import {Link} from 'react-router-dom'

const style1 = {
    backgroundColor: 'white',
    color: '#1429D7',
    margin: '25px 0px'
}

const style2 = {
    backgroundColor: 'rgba(20, 41, 215, 0.68)',
    color: 'white',
    margin: '25px 0px'
}

const style3 = {
    backgroundColor: 'rgba(20, 41, 215, 0.85)',
    color: 'white',
    margin: '25px 0px'
}

export class BookContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            books: [],
            defaultBooks: [
                {
                    sku: 'default0',
                    serial: 0,
                    title: 'Kỷ nguyên Trí tuệ Nhân tạo'
                },
                {
                    sku: 'default1',
                    serial: 1,
                    title: 'Chạy đua với Robot'
                },
                {
                    sku: 'default2',
                    serial: 2,
                    title: 'Năm 2062 Thời đại của trí thông minh nhân tạo'
                },
                {
                    sku: 'default3',
                    serial: 3,
                    title: 'The A.I. Age'
                }
            ]
        }
    }

    createMiniBooks(fontColor) {
        let miniBooks = []
        console.log(this.state.books)

        for (let i = 0; i < 4; i++) {
            miniBooks.push(<BookCard sku={this.state.books[i].sku} serial={this.state.books[i].images[0]} title={this.state.books[i].title} fontColor={fontColor}/>)
        }

        return miniBooks
    }

    createBooks(fontColor) {
        let realBooks = []
        let oneRow = []

        for (let i = 0, count = 0; i < this.state.books.length; i++, count++) {
            if (count < 4) {
                oneRow.push(<BookCard sku={this.state.books[i].sku} serial={this.state.books[i].images[0]} title={this.state.books[i].title} fontColor={fontColor}/>)
            }
            else if (count == 4) {
                realBooks.push(<div className="row">{oneRow}</div>)
                oneRow = []
                count = -1
            }
            //realBooks.push(<BookCard sku={this.state.books[i].sku} serial={this.state.books[i].serial} title={this.state.books[i].title} fontColor={fontColor}/>)
        }

        //realBooks.push(<div className="row">{oneRow}</div>)

        return realBooks
    }

    async componentDidMount() {
        if (this.props.kind.includes("category")) {
            try {
                const url = 'http://localhost:2000/api/category/getACategory?' + this.props.kind
                const response = await fetch(url)
                if (response.ok) {
                    const data = await response.json()
                    this.setState({
                        isLoading: false,
                        books: data
                    })
                }
                else {
                    console.log("Request failed! - Books")
                }
            }
            catch(e) {
                console.log(e)
            }
        } 
        else {
            try {
                const url = 'http://localhost:2000/api/book/' + this.props.kind
                const response = await fetch(url)
                if (response.ok) {
                    const data = await response.json()
                    this.setState({
                        isLoading: false,
                        books: data
                    })
                }
                else {
                    console.log('Request failed! - Books')
                }
            }
            catch(e) {
                console.log(e)
            }
        }
        
    }

    async componentDidUpdate(prevProps, prepStates) {
        if (prevProps.kind != this.props.kind) {
            if (this.props.kind.includes("category")) {
                try {
                    const url = 'http://localhost:2000/api/category/getACategory?' + this.props.kind
                    const response = await fetch(url)
                    if (response.ok) {
                        const data = await response.json()
                        this.setState({
                            isLoading: false,
                            books: data
                        })
                    }
                    else {
                        console.log("Request failed! - Books")
                    }
                }
                catch(e) {
                    console.log(e)
                }
            } 
            else {
                try {
                    const url = 'http://localhost:2000/api/book/' + this.props.kind
                    const response = await fetch(url)
                    if (response.ok) {
                        const data = await response.json()
                        this.setState({
                            isLoading: false,
                            books: data
                        })
                    }
                    else {
                        console.log('Request failed! - Books')
                    }
                }
                catch(e) {
                    console.log(e)
                }
            }
            
        }
    }

    render() {
        const tag = (this.props.tag == 'none')
        let lineStyle, fontColor, borderTopColor
        if (this.props.lineStyle == '1') {
            lineStyle = style1
            borderTopColor = {borderTop: '3px solid #1429D7'}
            fontColor = {color: 'black'}
        }
        else if (this.props.lineStyle == '2') {
            lineStyle = style2
            borderTopColor = {borderTop: '3px solid white'}
            fontColor = {color: 'white'}
        }
        else {
            lineStyle = style3
            borderTopColor = {borderTop: '3px solid white'}
            fontColor = {color: 'white'}
        }

        let type = this.props.type == 'mini'
        if (this.state.isLoading) {
            return (
                <div className="container-fluid" style={lineStyle}>
    
                    <div className="container row" style={{backgroundColor: 'transparent',margin: '0px auto'}}>
    
                        <div className="col-12 col-lg-2 mt-4" style={borderTopColor}>
    
                            <label className="col-12" style={{padding: '0px'}}>
                                <b>{this.props.title}</b>
                            </label>
        
                            {tag?
                                <noscript></noscript>:
                                <button className="btn btn-primary border-0 col-4 col-lg-12" style={{backgroundColor: '#F15922'}}>
                                    <b>{this.props.tag}</b>
                                </button>}

                            {type?
                                <noscript></noscript>:
                                <div>
                                    <Link to="/contents/books/all">
                                        <div className="col-12 mt-4" style={{color: 'gray'}}>
                                            <b>All</b>
                                        </div> 
                                    </Link>

                                    <Link to="/contents/books/allNew">
                                        <div className="col-12 mt-4" style={{color: 'gray'}}>
                                            <b>New and noteworthy</b>
                                        </div> 
                                    </Link>

                                    <Link to="/contents/books/allPopular">
                                        <div className="col-12 mt-4" style={{color: 'gray'}}>
                                            <b>Popular Books</b>
                                        </div> 
                                    </Link>

                                    <Link to="/contents/books/category=LapTrinh">
                                        <div className="col-12 mt-4" style={{color: 'gray'}}>
                                            <b>Tag: lập trình</b>
                                        </div> 
                                    </Link>

                                    <Link to="/contents/books/category=LichSu">
                                        <div className="col-12 mt-4" style={{color: 'gray'}}>
                                            <b>Tag: lịch sử</b>
                                        </div> 
                                    </Link>

                                    <Link to="/contents/books/category=TiengAnh">
                                        <div className="col-12 mt-4" style={{color: 'gray'}}>
                                            <b>Tag: tiếng anh</b>
                                        </div> 
                                    </Link>
                                </div>
                            }
    
                        </div>
    
                        <BookCard sku={this.state.defaultBooks[0].sku} serial="0" title={this.state.defaultBooks[0].title} fontColor={fontColor} />
        
                        <BookCard sku={this.state.defaultBooks[1].sku} serial="1" title={this.state.defaultBooks[1].title} fontColor={fontColor} />
    
                        <BookCard sku={this.state.defaultBooks[2].sku} serial="2" title={this.state.defaultBooks[2].title} fontColor={fontColor} />
    
                        <BookCard sku={this.state.defaultBooks[3].sku} serial="3" title={this.state.defaultBooks[3].title} fontColor={fontColor} />
        
                    </div>
        
                    {type?
                        <Link to={`/contents/books/${this.props.kind}`}>
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
                <div className="container-fluid" style={lineStyle}>
    
                    <div className="container row" style={{backgroundColor: 'transparent',margin: '0px auto'}}>
    
                        <div className="col-12 col-lg-2 mt-4" style={borderTopColor}>
    
                            <label className="col-12" style={{padding: '0px'}}>
                                <b>{this.props.title}</b>
                            </label>
        
                            {tag?
                                <noscript></noscript>:
                                <button className="btn btn-primary border-0 col-4 col-lg-12" style={{backgroundColor: '#F15922'}}>
                                    <b>{this.props.tag}</b>
                                </button>}

                            {type?
                                <noscript></noscript>:
                                <div>
                                    <Link to="/contents/books/all">
                                        <div className="col-12 mt-4" style={{color: 'gray'}}>
                                            <b>All</b>
                                        </div> 
                                    </Link>

                                    <Link to="/contents/books/allNew">
                                        <div className="col-12 mt-4" style={{color: 'gray'}}>
                                            <b>New and noteworthy</b>
                                        </div> 
                                    </Link>

                                    <Link to="/contents/books/allPopular">
                                        <div className="col-12 mt-4" style={{color: 'gray'}}>
                                            <b>Popular Books</b>
                                        </div> 
                                    </Link>

                                    <Link to="/contents/books/category=LapTrinh">
                                        <div className="col-12 mt-4" style={{color: 'gray'}}>
                                            <b>Tag: lập trình</b>
                                        </div> 
                                    </Link>

                                    <Link to="/contents/books/category=LichSu">
                                        <div className="col-12 mt-4" style={{color: 'gray'}}>
                                            <b>Tag: lịch sử</b>
                                        </div> 
                                    </Link>

                                    <Link to="/contents/books/category=TiengAnh">
                                        <div className="col-12 mt-4" style={{color: 'gray'}}>
                                            <b>Tag: tiếng anh</b>
                                        </div> 
                                    </Link>
                                </div>
                            }
    
                        </div>
    
                        {type?
                            this.createMiniBooks(fontColor):
                            <div className="col-lg-10">
                                {this.createBooks(fontColor)}
                            </div>
                            
                        }
                    </div>
        
                    {type?
                        <Link to={`/contents/books/${this.props.kind}`}>
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