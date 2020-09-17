import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            validation: false,
            query: ""
        }
    }


    onHandleChange = e => {
        if (e.target.value != "") {
            this.setState({
                validation: true
            })
        }
        else {
            this.setState({
                validation: false
            })
        }
        this.setState({
            query: e.target.value
        })
    }

    render() {
        let searchFormat = this.props.format == 'true'

        if (searchFormat) {
            return(
                <form id="searchBar" className="d-lg-flex col-8 col-lg-7 border rounded-pill" style={{margin: '0px auto',height: '66px',display: 'none'}}>

                    <div id="searchInput" className="form-group my-auto d-lg-inline-block col-8 border-right" style={{padding: '0px'}}>
                        <input className="border-0 rounded-0 form-control" type="search" placeholder="Seach..." value={this.state.query} onChange={this.onHandleChange} style={{height: '50px',width: 'fit',padding: '0px 12px'}}/>
                    </div>

                    <div id="searchMaterial" className="form-group my-auto d-lg-inline-block col-4" style={{height: '38px',display: 'none'}}>

                        <div className="row">

                            <div className="dropdown col-6" style={{height: '38px',margin: '0px auto',padding: '0px 7px'}}>

                                <button id="searchContent" className="btn btn-primary dropdown-toggle border-0 rounded-0" data-toggle="dropdown" aria-expanded="false" type="button" style={{backgroundColor: 'rgba(0,123,255,0)',color: '#000',height: 'auto'}}>
                                    Books&nbsp;
                                </button>

                                <div className="dropdown-menu" role="menu">
                                    <option className="dropdown-item" role="presentation">Books</option>
                                </div>

                            </div>

                            {this.state.validation?

                                <Link to={`/search/${this.state.query.toLowerCase()}`} className="col-6" style={{padding: '0px'}}>
                                    <button className="btn btn-primary border-0 rounded-pill col-12" type="submit" style={{backgroundColor: '#F15922',height: '40px',margin: '0px auto'}} formAction="#">
                                        <b>Search</b>
                                    </button>
                                </Link>:
                                
                                <div className="col-6" style={{padding: '0px'}}>
                                    <button className="btn btn-primary border-0 rounded-pill col-12" type="submit" style={{backgroundColor: '#F15922',height: '40px',margin: '0px auto'}} formAction="#">
                                        <b>Search</b>
                                    </button>
                                </div>
                                
                            }
                            
                                        
                        </div>

                    </div>

                </form>
            )
        }
        else if (this.props.status){
            return(
                <div className="d-lg-none container-fluid" style={{borderBottom: '3px solid #1429D7'}}>

                    <form id="searchBar" className="d-flex d-lg-none col-11 border rounded-pill mt-2 mb-2" style={{margin: '0px auto',height: '66px',display: 'none'}}>

                        <div id="searchInput" className="form-group my-auto d-lg-inline-block col-10" style={{padding: '0px'}}>
                            <input className="border-0 rounded-0 form-control" type="search" placeholder="Seach..." value={this.state.query} onChange={this.onHandleChange} style={{height: '50px',width: 'fit',padding: '0px 12px'}}/>
                            
                        </div>

                        <div id="searchMaterial" className="form-group my-auto d-inline-block col-2" style={{height: '38px',display: 'none'}}>

                            <div className="row">

                                {this.state.validation?

                                    <Link to={`/search/${this.state.query.toLowerCase()}`} className="col-10" style={{padding: '0px', margin: '0px auto'}}>
                                        <button className="btn d-lg-none" aria-expanded="false" type="button" style={{marginRight: '12px'}}>
                                            <i id="searchHidden" className="fa fa-search d-flex float-right justify-content-center align-items-center ml-auto d-inline-block d-lg-none" style={{width: 'auto',height: '25px',color: '#1429D7',fontSize: '20px'}} onClick={this.props.change}></i>
                                        </button>
                                    </Link>:

                                    <div className="col-10" style={{padding: '0px', margin: '0px auto'}}>
                                        <button className="btn d-lg-none" aria-expanded="false" type="button" style={{marginRight: '12px'}}>
                                            <i id="searchHidden" className="fa fa-search d-flex float-right justify-content-center align-items-center ml-auto d-inline-block d-lg-none" style={{width: 'auto',height: '25px',color: '#1429D7',fontSize: '20px'}} onClick={this.props.change}></i>
                                        </button>
                                    </div>
                                }
                                
                        
                            </div>

                        </div>

                    </form>

                </div>
                
            )
        }
        else {
            return(
                <div></div>
            )
        }
        
    }
}