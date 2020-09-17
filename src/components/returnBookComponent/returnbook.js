import React, {Component} from 'react'
import BookImage from '../../asserts/js/images'
import DatePicker from 'react-datepicker'
import PopUp from 'reactjs-popup'


export class ReturnBook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullname: '',
            card: '',
            title: '',
            time: null,
            image: '',
            startDate: new Date(),
            showModal: false
        }
    }

    handleChange = date => {
        this.setState({startDate: date, DOB: this.changeDate(date)})
    }

    async componentDidMount() {
        try {
            const url1 = 'http://localhost:2000/api/book/detail?bookID=' + this.props.sku
            const url2 = 'http://localhost:2000/api/user/info?userid=' + localStorage.getItem("userID")
            const url3 = 'http://localhost:2000/api/user/yourBook?userid=' + localStorage.getItem("userID")
            const response1 = await fetch(url1)
            const response2 = await fetch(url2)
            const response3 = await fetch(url3)
            if (response1.ok && response2.ok && response3.ok) {
                const data1 = await response1.json()
                const data2 = await response2.json()
                const data3 = await response3.json()
                let expiredTime

                for (let i = 0; i < data3.length; i++) {
                    if (data3[i].bookID == this.props.sku) {
                        expiredTime = data3[i].time_return
                    }
                }

                this.setState({
                    fullname: data2.data.name,
                    card: localStorage.getItem("userID"),
                    title: data1.message.title,
                    time: expiredTime,
                    image: data1.message.images
                })
            }
        }
        catch(e) {
            console.log(e)
        }
    }

    onHandleSubmit = e => {
        e.preventDefault()
        this.setState({showModal: true})
    }
    

    render() {
        return(
            <div>
                <div className="container row border" style={{margin: '50px auto'}}>
                    <form className="col-md-8 mb-4" onClick={this.onHandleSubmit}>
                        <label className="col-sm-12 mt-4" style={{color: '#1429D7', fontSize: '30px'}}>
                            <b>RETURN A BOOK</b>
                        </label>
                        <div className="form row" style={{padding: '15px'}}>
                            <div className="col-sm-12 mb-3">
                                <input type="text" className="form-control" placeholder={this.state.fullname} readOnly></input>
                            </div>

                            <div className="col-sm-12 mb-3">
                                <input type="text" className="form-control" placeholder={this.state.card} readOnly></input>
                            </div>

                            <div className="col-sm-12 mb-3">
                                <input type="text" className="form-control" placeholder={this.state.title} readOnly></input>
                            </div>

                            <div className="col-sm-12 mb-3">
                                <input type="text" className="form-control" placeholder={this.props.sku} readOnly></input>
                            </div>

                            <div className="col-lg-3 mb-3 text-left mt-2">
                                <label style={{paddingLeft: '5px', fontWeight: 'bold'}}>Expire in:</label>
                            </div>

                            <div className="col-lg-9 mb-3">
                                <input type="text" class="form-control" placeholder={this.state.time} readOnly/>
                            </div>

                            <div className="col-lg-3 mb-3 text-left mt-2">
                                <label style={{paddingLeft: '5px', fontWeight: 'bold'}}>Date-to-return:</label>
                            </div>

                            <div className="col-lg-4 mt-2">
                                <DatePicker selected={this.state.startDate} onChange={this.handleChange}/>
                            </div>

                            
                        </div>

                        <button className="btn btn-primary border-0 rounded-pill mb-4" type="submit" style={{backgroundColor: '#F15922',height:'40px',width: '150px',margin: '0px auto'}} onClick={this.onHandleSubmit}>
                            <b>Submit</b>
                        </button>

                        <PopUp open={this.state.showModal}>
                            <div className="mt-4 mb-4 rounded" style={{color: 'black'}}>
                                <b>Your request is pending.<br/>Please return the book and wait for the librarian to approve yours.<br/>You could check in "My books" to see the processing</b>
                            </div>
                        </PopUp>

                        
                    </form>
                    <div class="d-none d-md-block col-sm-4 mb-4 mt-4" style={{padding: '30px 10px'}}>
                        <img src={BookImage[parseInt(this.state.image)]} style={{width: '230px'}} alt="Book's Image"/>
                    </div>
                </div>
            </div>
            
        )
    }
}