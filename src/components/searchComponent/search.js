import React, {Component} from 'react'
import {SearchItem} from '../searchItemsComponent/searchItems'
import {Link} from 'react-router-dom'

export class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            books: [],
            defaultSearch: [
                {
                    sku: "default",
                    serial: 0,
                    title: "Kỷ nguyên Trí tuệ Nhân tạo",
                    author: "Nhiều tác giả",
                    rates: "10",
                    availability: "20",
                    summary: "Lorem ipsum, dolor sit amet consectetur adipisicing..."
                },
                {
                    sku: "default",
                    serial: 1,
                    title: "Chạy đua với Robot",
                    author: "Joseph E. Aoun",
                    rates: "10",
                    availability: "20",
                    summary: "Lorem ipsum, dolor sit amet consectetur adipisicing..."
                },
                {
                    sku: "default",
                    serial: 2,
                    title: "Năm 2062 Thời đại của trí thông minh nhân tạo",
                    author: "Toby Walsh",
                    rates: "10",
                    availability: "20",
                    summary: "Lorem ipsum, dolor sit amet consectetur adipisicing..."
                },
                {
                    sku: "default",
                    serial: 3,
                    title: "The A.I. Age",
                    author: "Adam Riccoboni",
                    rates: "10",
                    availability: "20",
                    summary: "Lorem ipsum, dolor sit amet consectetur adipisicing..."
                }
            ]
        }
    }

    change_alias(alias) {
        var str = alias;
        str = str.toLowerCase();
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
        str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
        str = str.replace(/đ/g,"d");
        str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
        str = str.replace(/ + /g," ");
        str = str.trim(); 
        return str;
    }

    async componentDidMount() {
        if (this.props.searchText != "") {
            try {
                const url = 'http://localhost:2000/api/book/search'
                const myData = {
                    key: this.props.searchText
                }
                const response = await fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(myData),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                if (response.ok) {
                    const data = await response.json()
                    this.setState({
                        isLoading: false,
                        books: data.message
                    })
                }
                else {
                    console.log("Request failed! - Search")
                }
            }
            catch(e) {
                console.log(e)
            }
            
        }
        
    }

    async componentDidUpdate(prevProps, prevStates) {
        if (prevProps.searchText != this.props.searchText) {
            try {
                const url = 'http://localhost:2000/api/book/search'
                const myData = {
                    key: this.props.searchText
                }
                const response = await fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(myData),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                if (response.ok) {
                    const data = await response.json()
                    this.setState({
                        isLoading: false,
                        books: data.message
                    })
                }
                else {
                    console.log("Request failed! - Search")
                }
            }
            catch(e) {
                console.log(e)
            }
        }
    }

    createSearch() {
        let search = []

        if (this.state.books != null) {
            for (let i = 0; i < this.state.books.length; i++) {
                search.push(<SearchItem sku={this.state.books[i].sku} serial={this.state.books[i].images[0]} title={this.state.books[i].title} author={this.state.books[i].author} rates={this.state.books[i].rates} availability={this.state.books[i].remain} summary={this.state.books[i].intro} />)
            }
        }
        

        return search;
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div>

                    <div className="container mt-4 mb-4">

                        <div className="row ml-3">

                            <label className=" col-4 col-lg-3 col-xl-2 text-md-left">
                                You search for:
                            </label>

                            <h5 className="col-8 col-lg-9 col-xl-10" style={{textAlign: 'left'}}>
                                <b>{this.props.searchText.toUpperCase()}</b>
                            </h5>
    
                            <div className="col-4 col-lg-3 col-xl-2 text-md-left" style={{padding: '5px 15px'}}>
                                <label style={{marginTop: 'auto', marginBottom: 'auto', borderBottom: '2px solid #1429D7'}}>
                                    Search by category:
                                </label>
                            </div>
    
                            <button className="btn btn-primary border-0 rounded-0" style={{margin: '0px 15px',backgroundColor: '#F15922'}}>
                                <b>AI</b>
                            </button>

                        </div>   

                    </div>
    
                    <SearchItem sku={this.state.defaultSearch[0].sku} serial={this.state.defaultSearch[0].serial} title={this.state.defaultSearch[0].title} author={this.state.defaultSearch[0].author} rates={this.state.defaultSearch[0].rates} availability={this.state.defaultSearch[0].availability} summary={this.state.defaultSearch[0].summary}/>
                    <SearchItem sku={this.state.defaultSearch[1].sku} serial={this.state.defaultSearch[1].serial} title={this.state.defaultSearch[1].title} author={this.state.defaultSearch[1].author} rates={this.state.defaultSearch[1].rates} availability={this.state.defaultSearch[1].availability} summary={this.state.defaultSearch[1].summary}/>
                    <SearchItem sku={this.state.defaultSearch[2].sku} serial={this.state.defaultSearch[2].serial} title={this.state.defaultSearch[2].title} author={this.state.defaultSearch[2].author} rates={this.state.defaultSearch[2].rates} availability={this.state.defaultSearch[2].availability} summary={this.state.defaultSearch[2].summary}/>
                    <SearchItem sku={this.state.defaultSearch[3].sku} serial={this.state.defaultSearch[3].serial} title={this.state.defaultSearch[3].title} author={this.state.defaultSearch[3].author} rates={this.state.defaultSearch[3].rates} availability={this.state.defaultSearch[3].availability} summary={this.state.defaultSearch[3].summary}/>
                    
                    <div className="mt-4 mb-4 rounded" style={{color: '#1429D7'}}>
                        <b>No more contents</b>
                    </div>

                </div>
                
            )
        }
        else {
            return (
                <div>

                    <div className="container mt-4 mb-4">

                        <div className="row ml-3">

                            <label className=" col-4 col-lg-3 col-xl-2 text-md-left">
                                You search for:
                            </label>

                            <h5 className="col-8 col-lg-9 col-xl-10" style={{textAlign: 'left'}}>
                                <b>{this.props.searchText.toUpperCase()}</b>
                            </h5>
    
                            

                        </div>   

                    </div>
    
                    {this.createSearch()}
                    
                    <div className="mt-4 mb-4 rounded" style={{color: '#1429D7'}}>
                        <b>No more contents</b>
                    </div>

                </div>
                
            )
        }
        
    }
}