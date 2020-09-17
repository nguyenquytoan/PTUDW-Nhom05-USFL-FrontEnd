import React, {Component} from 'react'
import {BookContainer} from '../booksContainerComponent/booksContainer'
import {UserComment} from '../commentComponent/comment'
import BookImage from '../../asserts/js/images'
import PopUp from 'reactjs-popup'
import {Link} from 'react-router-dom'

export class BookDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            book: {},
            user: '',
            comments: [],
            title: '',
            message: '',
            messageValidation: false,
            reload: false,
            showModal: false,
            defaultBook: {
                sku: '4565827080162',
                serial: 0,
                title: 'Kỷ nguyên Trí tuệ nhân tạo',
                view: '1.352',
                status: 'IN STOCK',
                author: 'Nhiều tác giả',
                publisher: 'Nhà xuất bản Hồng Đức',
                page: '350',
                language: 'Vietnamese',
                type: 'Paperback',
                availability: '10',
                tag: ['AI', '4.0', 'Robot'],
                rates: '10',
                shortContent: 'abc',
                content: 'Trong cuộc sống hàng ngày của mỗi chúng ta, có bao nhiêu thời gian được dùng cho những công việc mưu sinh mang tính lặp đi lặp lại buồn tẻ, có bao nhiêu thời gian dùng cho việc đọc sách, học tập, sáng tạo, tư duy, giải trí và hưởng thụ? Một ngày của nhân viên văn phòng thành phố, ngoài thời gian dành cho ngủ nghỉ, thì có hơn 60% thời gian dành để cho giao tiếp xã giao và xử lý những công việc...'
                
            }
            
        }
        this.onHandleSubmit = this.onHandleSubmit.bind(this)
        this.onHandleClick = this.onHandleClick.bind(this)
    }

    createComments() {
        let listComments = []

        for (let i = 0; i < this.state.comments.length; i++) {
            listComments.push(<UserComment name={this.state.comments[i].username} title={this.state.comments[i].title} commentText={this.state.comments[i].content}/>)
        }

        return listComments
    }

    onTitleChange = e => {
        this.setState({title: e.target.value})
    }

    onMessageChange = e => {
        if (e.target.value != "") {
            this.setState({messageValidation: true})
        }
        else {
            this.setState({messageValidation: false})
        }
        this.setState({message: e.target.value})
    }

    onHandleSubmit = e => {
        if (this.state.messageValidation == true) {
            e.preventDefault()
            const data = {
                bookID: this.props.sku,
                username: this.state.user,
                title: this.state.title,
                content: this.state.message,
                rate: 5
            }
            fetch('http://localhost:2000/api/comment/addComment', {method: 'POST', headers: {'Content-Type': 'application/json'} , body: JSON.stringify(data)})
            .then(response => response.json())
            .then(data => {
                this.setState({
                    reload: true,
                    //comments: this.state.comments.push(data)
                })
            }
                
            )
            window.location.reload(false)
        }
    }

    onHandleClick = e => {
        e.preventDefault()
        const myData = {
            bookID: this.props.sku,
            userid: localStorage.getItem("userID")
        }

        fetch('http://localhost:2000/api/user/borrowBook', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(myData)})
        .then(response => response.json())
        .then(data => {
            this.setState({
                showModal: true
            })
        })
        
    }

    async componentDidMount() {
        try {
            if (localStorage.getItem("userID") != null) {
                const url = 'http://localhost:2000/api/book/detail?bookID=' + this.props.sku
                const response = await fetch(url)
                const url2 = 'http://localhost:2000/api/user/info?userid=' + localStorage.getItem("userID")
                const response2 = await fetch(url2)
                const url3 = 'http://localhost:2000/api/comment/getComments?bookID=' + this.props.sku
                const response3 = await fetch(url3)

                if (response.ok && response2.ok) {
                    const data = await response.json()
                    const data2 = await response2.json()
                    const data3 = await response3.json()
                    if (data3.message == 'Data Not Found!') {
                        this.setState({
                            isLoading: false,
                            book: data.message,
                            user: data2.data.name
                        
                        })
                    }  
                    else {
                        this.setState({
                            isLoading: false,
                            book: data.message,
                            user: data2.data.name,
                            comments: data3.message
                        })
                    }
                }
            
            }
            else {
                const url = 'http://localhost:2000/api/book/detail?bookID=' + this.props.sku
                const response = await fetch(url)
                if (response.ok) {
                    const data = await response.json()
                    this.setState({
                        isLoading: false,
                        book: data.message
                    })
                }
            }
            
        }
        catch(e) {
            console.log(e)
        }
    }

    async componentDidUpdate(prevProps, prevStates) {
        if (prevProps.sku != this.props.sku) {
            try {
                const url = 'http://localhost:2000/api/book/detail?bookID=' + this.props.sku
                const response = await fetch(url)
                if (response.ok) {
                    const data = await response.json()
                    this.setState({
                        isLoading: false,
                        book: data.message
                    })
                }
                else {
                    console.log('Request failed! - BooksDetail')
                }
            }
            catch(e) {
                console.log(e)
            }
        }
        if (prevProps.reload != this.state.reload) {
            try {
                const url = 'localhost:2000/api/comment/getComments?bookID=' + this.props.sku
                const response = await fetch(url)
                if (response.ok) {
                    const data = await response.json()
                    this.setState({
                        comments: data.message
                    })
                }
                else {
                    console.log('Request failed! - BooksDetail')
                }
            }
            catch(e) {
                console.log(e)
            }
        }
        
    } 

    render() {
        const signIn = this.props.signIn
        if (this.state.isLoading) {
            return (
                <div>

                    <div className="container-fluid shadow" style={{borderBottom: '3px solid #1429D7'}}>

                        <div className="container mt-3">

                            <div className="row" style={{padding: '10px 20px'}}>

                                <div className="col-md-4" style={{padding: '10px 20px'}}>

                                    <img className="col-md-12 mb-2" src={BookImage[parseInt(this.state.defaultBook.serial)]}/>

                                    <div className="col-md-12 row" style={{margin: 0, padding: '0px 30px'}}>

                                        <div className="col border" style={{margin: '0px 10px', padding: 0}}>
                                            <img src={BookImage[parseInt(this.state.defaultBook.serial)]} style={{width: '100%'}}/>
                                        </div>
    
                                        <div className="col border" style={{margin: '0px 10px', padding: 0}}>
                                            <img src={BookImage[parseInt(this.state.defaultBook.serial)]} style={{width: '100%'}}/>
                                        </div>
    
                                        <div className="col border" style={{margin: '0px 10px', padding: 0}}>
                                            <img src={BookImage[parseInt(this.state.defaultBook.serial)]} style={{width: '100%'}}/>
                                        </div>

                                    </div>

                                </div>
    
                                <div className="col-md-8" style={{padding: '10px 20px', margin: 'auto 0px'}}>

                                    <h3 className="col-12">
                                        <b>{this.state.defaultBook.title}</b>
                                    </h3>

                                    <div className="row">

                                        <label className="col-9 text-left" style={{padding: 0}}>
                                            SKU: {this.state.defaultBook.sku}
                                        </label>

                                        <label className="col-3 text-right" style={{padding: 0}}>
                                            ({this.state.defaultBook.view} views)
                                        </label>

                                    </div>

                                    <div className="col-12 col-md-4 col-lg-3 col-xl-2" style={{backgroundColor: '#F15922', color: 'white', height: '30px'}}>
                                        <span className="border-0 rounded-0 align-middle">
                                            <b>{this.state.defaultBook.status}</b>
                                        </span>
                                    </div>
    
                                    <div className="row" style={{marginTop: '50px'}}>

                                        <label className="col-3 mb-0 text-left" style={{padding: 0}}>
                                            Author: 
                                        </label>

                                        <span className="col-9 mb-0 text-left">
                                            <b>{this.state.defaultBook.author}</b>
                                        </span>

                                    </div>
    
                                    <div className="row mt-2">

                                        <label className="col-3 mb-0 text-left" style={{padding: 0}}>
                                            Publisher: 
                                        </label>

                                        <span className="col-9 mb-0 text-left">
                                            <b>{this.state.defaultBook.publisher}</b>
                                        </span>

                                    </div>
    
                                    <div className="row mt-2">

                                        <label className="col-3 mb-0 text-left" style={{padding: 0}}>
                                            Pages: 
                                        </label>

                                        <span className="col-9 mb-0 text-left">
                                            <b>{this.state.defaultBook.page}</b>
                                        </span>

                                    </div>
    
                                    <div className="row mt-2">

                                        <label className="col-3 mb-0 text-left" style={{padding: 0}}>
                                            Language: 
                                        </label>

                                        <span className="col-9 mb-0 text-left">
                                            <b>{this.state.defaultBook.language}</b>
                                        </span>

                                    </div>
                                    
                                    <div className="row mt-2">

                                        <label className="col-3 mb-0 text-left" style={{padding: 0}}>
                                            Type:
                                        </label>

                                        <span className="col-9 mb-0 text-left">
                                            <b>{this.state.defaultBook.type}</b>
                                        </span>

                                    </div>
    
                                    <div className="col-sm-12 row" style={{padding: 0, marginTop: '30px'}}>

                                        <div className="col-sm-4 col-lg-3 text-left mt-3" style={{color: '#1429D7', padding: 0}}>
                                            Availability: &nbsp;<b>{this.state.defaultBook.availability}</b>
                                        </div>

                                        <button className="col-5 col-sm-3 col-lg-4 btn btn-primary border-0 rounded-pill mt-2" type='button' style={{color: 'white',backgroundColor: '#1429D7',height: '40px',margin: '0px auto'}}>
                                            <b>Place hold</b>
                                        </button>

                                        <button className="col-5 col-sm-3 col-lg-4 btn btn-primary border-0 rounded-pill mt-2" type='button' style={{color: 'white',backgroundColor: '#1429D7',height: '40px',margin: '0px auto'}}>
                                            <b>Borrow</b>
                                        </button>

                                    </div>
    
                                    <div className="col-12 row" style={{padding: 0, marginTop: '50px', marginRight: 0}}>

                                        <span className="col-3 text-left mt-2" style={{padding: 0}}>
                                            Tag:
                                        </span>

                                        <div className="col-9 row">

                                            <button className="btn btn-primary border-0 rounded-0 mt-2" style={{margin: '0px 15px',backgroundColor: '#F15922'}}>
                                                <b>{this.state.defaultBook.tag[0]}</b>
                                            </button>
                                            
                                            <button className="btn btn-primary border-0 rounded-0 mt-2" style={{margin: '0px 15px',backgroundColor: '#F15922'}}>
                                                <b>{this.state.defaultBook.tag[1]}</b>
                                            </button>
                                            
                                            
                                            <button className="btn btn-primary border-0 rounded-0 mt-2" style={{margin: '0px 15px',backgroundColor: '#F15922'}}>
                                                <b>{this.state.defaultBook.tag[2]}</b>
                                            </button>
                                            
                                        </div>

                                    </div>
    
                                    
                                </div>

                            </div>

                        </div>

                    </div>
    
                    <div className="container-fluid" style={{backgroundColor: '#c2c2c2'}}>

                        <div className="container">

                            <div className="text-left">

                                Introduction

                            </div>

                        </div>

                    </div>
    
                    <div className="container-fluid">

                        <div className="container mt-3">

                            <div className="text-left">
                                <h5><b>{this.state.defaultBook.title}</b></h5>
                            </div>
    
                            <div className="text-justify">
                                {this.state.defaultBook.content}
                            </div>

                        </div>

                    </div>
    
                    <BookContainer lineStyle='2' title='Same category' tag='none' type='mini' kind='allPopular'/>

                    <BookContainer lineStyle='3' title='Recommend for you' tag='none' type='mini' kind='allNew'/>
    
                    <div className="container-fluid" style={{backgroundColor: '#c2c2c2'}}>

                        <div className="container">

                            <div className="text-left">

                                Comments 3

                            </div>

                        </div>

                    </div>
    
                    <UserComment name='hdtien' title='Content' commentText='Sách hay, dễ hiểu, dễ đọc'/>
                    <UserComment name='ntmthuy' title='Content' commentText='Sách hay, dễ hiểu, dễ đọc'/>
                    <UserComment name='nqtoan' title='Content' commentText='Sách hay, dễ hiểu, dễ đọc'/>
    
                    <div className="mt-4 mb-4 rounded" style={{color: '#1429D7'}}>
                        <b>No more contents</b>
                    </div>

                    {signIn?

                    <div>
                        <div className="container-fluid" style={{backgroundColor: '#c2c2c2'}}>

                            <div className="container">

                                <div className="text-left">

                                    Your comment

                                </div>

                            </div>

                        </div>
    
                        <div className="container" style={{padding: '10px 60px', backgroundColor: 'white'}}>

                            <div className="row mt-3 mb-4">

                                <div className="col-6 col-md-2" style={{padding: '0px', margin: '0px auto',borderTop: '2px solid #1429D7'}}>

                                    <div>
                                        <i className="fa fa-user-circle-o mt-4" style={{color: '#1429D7', fontSize: '60px'}}></i>
                                    </div>

                                    <p className="text-center mt-2" style={{color: '#1429D7'}}><b>{this.state.user}</b></p>

                                </div>
    
                                <div className="col-12 col-md-9">

                                    <div className="col-sm-12 row mt-3">

                                        <label className="col-2 col-md-2 text-right">Rate:</label>

                                        <div className="col-4 col-xl-2 mt-1 ml-4">
                                            <i className="fa fa-star checked float-left"></i>
                                            <i className="fa fa-star checked float-left"></i>
                                            <i className="fa fa-star checked float-left"></i>
                                            <i className="fa fa-star checked float-left"></i>
                                            <i className="fa fa-star float-left"></i>
                                        </div>

                                    </div>
    
                                    <div className="form-group d-block d-xl-flex col-12" style={{margin: '15px auto'}}>
                                        <input className="form-control" type="text" placeholder="Title (optional)" minLength="7"/>
                                    </div>
    
                                    <div className="form-group d-block col-12" style={{margin: '15px auto'}}>
                                        <textarea className="form-control" placeholder="*Message" required="" style={{height: '200px'}}/>
                                    </div>
    
                                    <button className="btn btn-primary border-0 rounded-pill col-6 col-md-4" type="submit" style={{backgroundColor: '#F15922',height: '40px',margin: '0px auto'}} formAction="#" onClick={window.location.reload}>
                                        <b>Submit</b>
                                    </button>
                                </div>
    
                                
                            </div>
                        </div>
                    </div> : <div></div>}
                    
                    
                </div>
            )
        }
        else {
            return(
                <div>

                    <div className="container-fluid shadow" style={{borderBottom: '3px solid #1429D7'}}>

                        <div className="container mt-3">

                            <div className="row" style={{padding: '10px 20px'}}>

                                <div className="col-md-4" style={{padding: '10px 20px'}}>

                                    <img className="col-md-12 mb-2" src={BookImage[parseInt(this.state.book.images[0])]}/>

                                    <div className="col-md-12 row" style={{margin: 0, padding: '0px 30px'}}>

                                        <div className="col border" style={{margin: '0px 10px', padding: 0}}>
                                            <img src={BookImage[parseInt(this.state.book.images[0])]} style={{width: '100%'}}/>
                                        </div>
    
                                        <div className="col border" style={{margin: '0px 10px', padding: 0}}>
                                            <img src={BookImage[parseInt(this.state.book.images[0])]} style={{width: '100%'}}/>
                                        </div>
    
                                        <div className="col border" style={{margin: '0px 10px', padding: 0}}>
                                            <img src={BookImage[parseInt(this.state.book.images[0])]} style={{width: '100%'}}/>
                                        </div>

                                    </div>

                                </div>
    
                                <div className="col-md-8" style={{padding: '10px 20px', margin: 'auto 0px'}}>

                                    <h3 className="col-12">
                                        <b>{this.state.book.title}</b>
                                    </h3>

                                    <div className="row">

                                        <label className="col-9 text-left" style={{padding: 0}}>
                                            SKU: {this.state.book.sku}
                                        </label>

                                        <label className="col-3 text-right" style={{padding: 0}}>
                                            ({this.state.book.views} views)
                                        </label>

                                    </div>

                                    <div className="col-12 col-md-4 col-lg-3 col-xl-2" style={{backgroundColor: '#F15922', color: 'white', height: '30px'}}>
                                        <span className="border-0 rounded-0 align-middle">
                                            <b>{this.state.defaultBook.status}</b>
                                        </span>
                                    </div>
    
                                    <div className="row" style={{marginTop: '50px'}}>

                                        <label className="col-3 mb-0 text-left" style={{padding: 0}}>
                                            Author: 
                                        </label>

                                        <span className="col-9 mb-0 text-left">
                                            <b>{this.state.book.author}</b>
                                        </span>

                                    </div>
    
                                    <div className="row mt-2">

                                        <label className="col-3 mb-0 text-left" style={{padding: 0}}>
                                            Publisher: 
                                        </label>

                                        <span className="col-9 mb-0 text-left">
                                            <b>{this.state.book.publisher}</b>
                                        </span>

                                    </div>
    
                                    <div className="row mt-2">

                                        <label className="col-3 mb-0 text-left" style={{padding: 0}}>
                                            Pages: 
                                        </label>

                                        <span className="col-9 mb-0 text-left">
                                            <b>{this.state.book.page}</b>
                                        </span>

                                    </div>
    
                                    <div className="row mt-2">

                                        <label className="col-3 mb-0 text-left" style={{padding: 0}}>
                                            Language: 
                                        </label>

                                        <span className="col-9 mb-0 text-left">
                                            <b>{this.state.book.language}</b>
                                        </span>

                                    </div>
                                    
                                    <div className="row mt-2">

                                        <label className="col-3 mb-0 text-left" style={{padding: 0}}>
                                            Type:
                                        </label>

                                        <span className="col-9 mb-0 text-left">
                                            <b>{this.state.book.type}</b>
                                        </span>

                                    </div>
    
                                    <div className="col-sm-12 row" style={{padding: 0, marginTop: '30px'}}>

                                        <div className="col-sm-4 col-lg-3 text-left mt-3" style={{color: '#1429D7', padding: 0}}>
                                            Availability: &nbsp;<b>{this.state.book.remain}</b>
                                        </div>

                                        <PopUp modal trigger = {
                                            <button className="col-5 col-sm-3 col-lg-4 btn btn-primary border-0 rounded-pill mt-2" type='button' style={{color: 'white',backgroundColor: '#1429D7',height: '40px',margin: '0px auto'}}>
                                                <b>Place hold</b>
                                            </button>
                                        }>
                                            <div className="mt-4 mb-4 rounded" style={{color: 'black'}}>
                                                <b>This feature is developing and will come soon to you.<br/>Please wait...</b>
                                            </div>
                                            
                                        </PopUp>

                                        <PopUp open={this.state.showModal}>
                                            <div className="mt-4 mb-4 rounded" style={{color: 'black'}}>
                                                <b>Your request is pending.<br/>Please wait for the librarian to approve yours.<br/>You could check in "My books" to see the processing</b>
                                            </div>
                                        
                                        </PopUp>
                                        {localStorage.getItem("signInStatus") == 'true'?
                                            <button className="col-5 col-sm-3 col-lg-4 btn btn-primary border-0 rounded-pill mt-2" type='button' style={{color: 'white',backgroundColor: '#1429D7',height: '40px',margin: '0px auto'}} onClick={this.onHandleClick}>
                                                <b>Borrow</b>
                                            </button>:
                                            <PopUp modal trigger = {
                                                <button className="col-5 col-sm-3 col-lg-4 btn btn-primary border-0 rounded-pill mt-2" type='button' style={{color: 'white',backgroundColor: '#1429D7',height: '40px',margin: '0px auto'}}>
                                                    <b>Borrow</b>
                                                </button>
                                            }>
                                                <div className="mt-4 mb-4 rounded" style={{color: 'black'}}>
                                                    <b>Please <a href='/sign-in' style={{color: '#1429D7', fontWeight: 'bold'}}>sign in</a> to continue to borrow this book<br/>If you don't have an account, please <a href='/sign-up' style={{color: '#1429D7', fontWeight: 'bold'}}>sign up</a> here</b>
                                                </div>
                                            </PopUp>
                                        }
                                        

                                    </div>
    
                                    <div className="col-12 row" style={{padding: 0, marginTop: '50px', marginRight: 0}}>

                                        <span className="col-3 text-left mt-2" style={{padding: 0}}>
                                            Tag:
                                        </span>

                                        <div className="col-9 row">

                                            <button className="btn btn-primary border-0 rounded-0 mt-2" style={{margin: '0px 15px',backgroundColor: '#F15922'}}>
                                                <b>{this.state.book.tag}</b>
                                            </button>
                                            
                                            
                                        </div>

                                    </div>
    
                                    
                                </div>

                            </div>

                        </div>

                    </div>
    
                    <div className="container-fluid" style={{backgroundColor: '#c2c2c2'}}>

                        <div className="container">

                            <div className="text-left">

                                Introduction

                            </div>

                        </div>

                    </div>
    
                    <div className="container-fluid">

                        <div className="container mt-3">

                            <div className="text-left">
                                <h5><b>{this.state.book.title}</b></h5>
                            </div>
    
                            <div className="text-justify">
                                {this.state.book.intro}
                            </div>
    

                        </div>

                    </div>
    
                    <BookContainer lineStyle='2' title='Same category' tag='none' type='mini' kind='allNew'/>

                    <BookContainer lineStyle='3' title='Recommend for you' tag='none' type='mini' kind='allPopular'/>
    
                    <div className="container-fluid" style={{backgroundColor: '#c2c2c2'}}>

                        <div className="container">

                            <div className="text-left">

                                Comments {this.state.comments.length}

                            </div>

                        </div>

                    </div>

                    {this.createComments()}
    
                    <div className="mt-4 mb-4 rounded" style={{color: '#1429D7'}}>
                        <b>No more contents</b>
                    </div>

                    {signIn?

                    <div>
                        <div className="container-fluid" style={{backgroundColor: '#c2c2c2'}}>

                            <div className="container">

                                <div className="text-left">

                                    Your comment

                                </div>

                            </div>

                        </div>
    
                        <div className="container" style={{padding: '10px 60px', backgroundColor: 'white'}}>

                            <div className="row mt-3 mb-4">

                                <div className="col-6 col-md-2" style={{padding: '0px', margin: '0px auto',borderTop: '2px solid #1429D7'}}>

                                    <div>
                                        <i className="fa fa-user-circle-o mt-4" style={{color: '#1429D7', fontSize: '60px'}}></i>
                                    </div>

                                    <p className="text-center mt-2" style={{color: '#1429D7'}}><b>{this.state.user}</b></p>

                                </div>
    
                                <form className="col-12 col-md-9" onClick={this.onHandleSubmit}>

                                    <div className="form-group d-block d-xl-flex col-12" style={{margin: '15px auto'}}>
                                        <input className="form-control" type="text" placeholder="Title (optional)" value={this.state.title} onChange={this.onTitleChange}/>
                                    </div>
    
                                    <div className="form-group d-block col-12" style={{margin: '15px auto'}}>
                                        <textarea className="form-control" placeholder="*Message" value={this.state.message} onChange={this.onMessageChange} required style={{height: '200px'}}/>
                                    </div>
    
                                    <button className="btn btn-primary border-0 rounded-pill col-6 col-md-4" type="submit" style={{backgroundColor: '#F15922',height: '40px',margin: '0px auto'}}>
                                        <b>Submit</b>
                                    </button>
                                </form>
    
                                
                            </div>
                        </div>
                    </div> : <div></div>}
                    
                    
                </div>
            
            )
        } 
        
    }
}