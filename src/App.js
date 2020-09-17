import React, { Component } from 'react';
import {Header} from './components/headerComponent/header'
import {Footer} from './components/footerComponent/footer'
import {NavBar} from './components/navbarComponent/navbar'
import {BookContainer} from './components/booksContainerComponent/booksContainer'
import {EventsContainer} from './components/eventsContainerComponent/eventsContainer'
import {Search} from './components/searchComponent/search'
import {BookDetail} from './components/bookDetailComponent/bookDetail'
import {BlogsContainer} from './components/blogsContainerComponent/blogsContainer'
import {UpdatePostsContainer} from './components/updatePostsContainerComponent/updatePostsContainer'
import {SlideImagesContainer} from './components/slideImagesContainerComponent/slideImagesContainer'
import {BorrowedBooksContainer} from './components/borrowBooksContainerComponent/borrowedBooksContainer'
import {Contact} from './components/contactComponent/contact'
import {Rules} from './components/rulesComponent/rules'
import {PersonalInfomation} from './components/personalInfomationComponent/personalInfomation'
import {ReturnBook} from './components/returnBookComponent/returnbook'
import {SignUp} from './components/signUpComponent/signUp'
import {SignIn} from './components/signInComponent/signIn'
import {SearchBar} from './components/searchBarComponent/searchBar'
import ScrollToTop from './components/scrollToTop/scrollToTop'
import {ContactDetail} from './components/contactDetailComponent/contactDetail'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

import './App.css';

export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            signInStatus: localStorage.getItem("signInStatus") == 'true',
            showSearchBar: false,
            books: []
        }
        this.onHandleClick = this.onHandleClick.bind(this)
        this.showSearchBar = this.showSearchBar.bind(this)
        this.onHandleLog = this.onHandleLog.bind(this)
    }

    onHandleClick() {
        const newSignIn = true
        localStorage.setItem("signInStatus", true)
        this.setState({signInStatus: newSignIn}) 
    }

    onHandleLog() {
        const newSignIn = false
        localStorage.setItem("signInStatus", newSignIn)
        localStorage.removeItem("userID")
        this.setState({signInStatus: newSignIn})
    }

    showSearchBar() {
        const newStatus = this.state.showSearchBar
        this.setState({showSearchBar: !newStatus})
    }

    async componentDidMount() {
        try {
            const url = "http://localhost:2000/api/book/allNew"
            const response = await fetch(url)
            if (response.ok) {
                const data = await response.json()
                console.log(data[0])
                this.setState({
                    isLoading: false,
                    books: data
                })
            }
            throw new Error('Request failed')
        }
        catch(e){
            console.log(e)
        } 
    }


    render() {
        return(
            <Router>

                <ScrollToTop>

                    <div className="App">

                        <Header signIn={this.state.signInStatus} click={this.onHandleLog} change={this.showSearchBar} status={!this.state.showSearchBar}/>

                        <SearchBar format='false' status={this.state.showSearchBar} change={this.showSearchBar}/>

                        <NavBar/>

                        <main>  

                            <Route exact path="/">

                                <SlideImagesContainer/>

                                <EventsContainer title='Upcoming Events and Announcements' type='mini' kind='all'/>

                                <BlogsContainer title='Top picks' type='mini'/>

                                <BookContainer lineStyle='3' title='New and Noteworthy' tag='none' type='mini' kind='allNew'/>

                                <UpdatePostsContainer title='Updates' type='mini'/>

                            </Route>


                            <Route exact path="/contents">

                                <SlideImagesContainer/>

                                <BookContainer lineStyle='1' title='Popular Books' tag='none' type='mini' kind='allPopular'/>

                                <BookContainer lineStyle='2' title='Books' tag='lập trình' type='mini' kind='category=LapTrinh'/>

                                <BookContainer lineStyle='3' title='Books' tag='lịch sử' type='mini' kind='category=LichSu'/>

                                <BookContainer lineStyle='1' title='Books' tag='tiếng Anh' type='mini' kind='category=TiengAnh'/>

                            </Route>

                            <Route exact path="/rules">

                                <Rules/>

                            </Route>

                            <Route exact path="/contact">

                                <Contact/>

                            </Route>

                            
                            <Route path="/contact/:query" render={(props) => <ContactDetail kind={props.match.params.query}/>}>

                            </Route>

                            

                            <Route exact path="/sign-up">

                                <SignUp click={this.onHandleClick}/>

                            </Route>

                            <Route exact path="/sign-in">

                                <SignIn click={this.onHandleClick}/>

                            </Route>

                            <Route exact path="/user/profile">

                                <PersonalInfomation/>

                            </Route>

                            <Route exact path="/user/my-book">
                                <BorrowedBooksContainer />
                            </Route>


                            <Route path="/user/return-a-book/:bookID" render={(props) => <ReturnBook sku={props.match.params.bookID}/>}></Route>


                            <Route path="/search/:query" render={(props) => <Search searchText={props.match.params.query}/>}></Route>









                            <Route exact path="/books/:booksSKU" render={(props) => <BookDetail sku={props.match.params.booksSKU} signIn={this.state.signInStatus}/>}></Route>










                            <Route exact path="/events/all">
                                <EventsContainer title='Upcoming Events and Announcements' type='large' kind='all'/>
                            </Route>

                            <Route exact path="/events/upcoming-events">
                                <EventsContainer title='Upcoming Events and Announcements' type='large' kind='upcoming-events'/>
                            </Route>

                            <Route exact path="/events/announcements">
                                <EventsContainer title='Upcoming Events and Announcements' type='large' kind='announcements'/>
                            </Route>

                            








                            <Route exact path="/blogs/all">
                                <BlogsContainer title='Top picks' type='large'/>
                            </Route>








                            <Route exact path="/contents/books/:kind" render={(props) => <BookContainer lineStyle='1' title='Books' tag='none' type='large' kind={props.match.params.kind}/>}/>




                            <Route exact path="/updates/all">
                                <UpdatePostsContainer title='Updates' type='large'/>
                            </Route>





                        </main>
                        <Footer/>
                
                    </div>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" style={{display: 'none'}}>
                        Learn React
                    </a>
                </ScrollToTop>
            </Router>
        )
    }
}

