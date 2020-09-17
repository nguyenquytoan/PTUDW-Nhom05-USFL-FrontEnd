import React, {Component} from 'react'
import {BorrowedBook} from '../borrowedBookComponent/borrowedBook'
import {BookContainer} from '../booksContainerComponent/booksContainer'

export class BorrowedBooksContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            validation: false,
            books: []
        }
    }

    async componentDidMount() {
        try {
            const url = 'http://localhost:2000/api/user/yourBook?userid=' + localStorage.getItem("userID")
            const response = await fetch(url)
            if (response.ok) {
                const data = await response.json()
                if (data != null) {
                    this.setState({
                        books: data
                    })
                }
                else {
                    this.setState({
                        validation: true
                    })
                } 
            }
            else {
                console.log("Request failed! - My books")
            }
        }
        catch(e) {
            console.log(e)
        }
    }

    createBorrowedBooks() {
        let realBooks = [] 
        for (let i = this.state.books.length - 1; i >= 0; i--) {
            realBooks.push(<BorrowedBook sku={this.state.books[i].bookID} status={this.state.books[i].status} date={this.state.books[i].time_borrow} time={this.state.books[i].time} returned={this.state.books[i].time_return}/>)
        }

        return realBooks
    }

    render() {
        if (this.state.validation) {
            return(
                <div className="container-fluid" style={{margin: '50px auto', padding: '0px'}}>

                    <h1 className="text-center col-12" style={{color: '#1429D7'}}>
                        <b>My Books</b>
                    </h1>

                    <div className="mt-4 mb-4 rounded" style={{color: 'black'}}>
                        <b>You haven't borrowed anything.<br/>We recommend you some new books that we think you're interested in</b>
                    </div>

                    <BookContainer lineStyle='3' title='New and Noteworthy' tag='none' type='mini' kind='allNew'/>


                </div>
            )
        }

        else {
            return(
                <div className="container-fluid">

                    <div className="container" style={{margin: '50px auto'}}>

                        <h1 className="text-center col-12" style={{color: '#1429D7'}}>
                            <b>My Books</b>
                        </h1>

                    
                        <div className="row" style={{padding: '20px 0px'}}>

                            <div className="col text-left mt-3"><label>Sort by: Time (default)</label></div>

                            <div className="col">

                                <div className="dropdown float-right" style={{height: '38px'}}>

                                    <button id="searchContent" className="btn btn-primary dropdown-toggle border-0 rounded" data-toggle="dropdown" aria-expanded="false" type="button" style={{backgroundColor: '#1429D7',color: 'white',height: 'auto'}}>
                                        Filter&nbsp;
                                    </button>

                                    <div className="dropdown-menu dropdown-menu-right" role="menu">

                                        <option className="dropdown-item" role="presentation">Time (default)</option>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="row">
                            {this.createBorrowedBooks()}
                    
                        </div>               
                    
                       
                    

                </div>

            </div>
            )

        }
    }
}