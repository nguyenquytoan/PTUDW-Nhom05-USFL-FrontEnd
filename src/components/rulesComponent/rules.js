import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export class Rules extends Component {
    render() {
        return(
            <div>
                <div style={{marginBottom: '20px'}}>
                    <div className="container" style={{margin: '50px auto',marginTop: '50px'}}>
                        <div className="row" style={{margin: '0px'}}>
                            <form className="border rounded col-lg-8">
                                <div className="form-group">
                                    <h2 className="col-11 mb-4" style={{color: '#1429D7',margin: '45px auto 15px',padding: '0px 15px'}}><b>RULES</b></h2>
                                    <ul className="text-justify col-11 mb-4" style={{margin: '15px auto',padding: '0px 15px', lineHeight: '1.8', listStyle: 'inside'}}>
                                        <li className="mb-2">Carry your student ID card when you enter the library.</li>
                                        <li className="mt-2 mb-2">Do not take any book or other library material out of the library without following the borrowing procedures.</li>
                                        <li className="mt-2 mb-2">Make sure to return the borrowed books by the due date.</li>
                                        <li className="mt-2 mb-2">In case any of the borrowed books being lost, damaged, or destroyed, you are required to replace the lost/damaged/destroyed book with a new one.</li>
                                        <li className="mt-2">Never write in books or cut pages out of them.</li>
                                    </ul>
                                </div>

                                <div className="form-group">
                                    <h2 className="col-11" style={{color: '#1429D7',margin: '45px auto 15px',padding: '0px 15px'}}><b>ABOUT</b></h2>
                                    <p className="text-justify col-11" style={{margin: '15px auto',padding: '0px 15px'}}>
                                        Our library has more than 200,000 books and online resources to serve learning, teaching and researching requirements of students, lecturers.
                                    </p>
                                </div>

                                <div className="form-group">
                                    <h2 className="col-11" style={{color: '#1429D7',margin: '45px auto 15px',padding: '0px 15px'}}><b>HISTORY</b></h2>
                                    <p className="text-justify col-11" style={{margin: '15px auto',padding: '0px 15px'}}>
                                        The library was established on May 11, 1995 and based on modern point of view, using new technology to create a convenient space for accessing information easily, as well as satisfy all information requests for all types of readers.
                                    </p>
                                </div>

                                <div className="form-group">
                                    <h2 className="col-11" style={{color: '#1429D7',margin: '45px auto 15px',padding: '0px 15px'}}><b>STAFF</b></h2>
                                    <table className="text-center table col-11" style={{margin: '15px auto',padding: '0px 15px'}}>
                                        <thead>
                                            <tr>
                                            <th scope="col">Position</th>
                                            <th scope="col">Full name</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <td>Librarian</td>
                                            <td>Nguyen Thi Cuc</td>                                           
                                            </tr>

                                            <tr>                                         
                                            <td>Library Director</td>
                                            <td>Nguyen Van Hung</td>                                         
                                            </tr>

                                            <tr>                                          
                                            <td>Library Technician</td>
                                            <td>Ho Van Anh</td>                                           
                                            </tr>

                                            <tr>                                          
                                            <td>Assistant Librarian</td>
                                            <td>Tran Tien Hoang</td>                                           
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="form-group">
                                    <h2 className="col-11" style={{color: '#1429D7',margin: '45px auto 15px',padding: '0px 15px'}}><b>EMPLOYMENT OPPURTUNITIES</b></h2>
                                    <p className="text-center col-11" style={{margin: '15px auto 50px',padding: '0px 15px'}}>
                                        We are recruiting more positions to expand our library. 
                                        Details of vacancies:
                                        <table className="table" style={{margin: '10px 0'}}>
                                            <thead>
                                                <tr style={{textAlign: 'center'}}>
                                                    <th scope="col" style={{paddingLeft: '3.5rem', paddingRight: '3.5rem'}}>Position</th>
                                                    <th scope="col">Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Assistant Librarian</td>
                                                    <td>Assistant librarians help library patrons locate reading reference materials. They work under head librarians. Responsibilities include routine clerical work such as checking materials in and out, filing papers, sorting mail, answering questions, and collecting fees. Computer literacy, good organization, and customer service skills are needed for this work.</td>                                           
                                                </tr>

                                                <tr>                                         
                                                <td>Library Aide</td>
                                                <td>A library aide serves as a helper to the library staff. This involves assisting patrons in checking out books, shelving returned materials, finding resources, and organizing media for check-in. The library aide may also help librarians and library assistants run programs or classes for children, teens, and adults. They must be computer savvy, organized, and able to perform clerical tasks for the library.</td>                                         
                                                </tr>

                                                <tr>                                          
                                                <td>Library Clerk</td>
                                                <td>Library clerks assist and work under the supervision of head librarians. Their main duties are checking materials in and out, inspecting materials for damage, collecting fees, and reshelving and organizing books. They also provide basic reference assistance to patrons. A high school diploma is preferred, as well as computer literacy and organizational skills.</td>                                           
                                                </tr>
                                            </tbody>
                                        </table>
                                        If you want to become an employee or collaborator of us, don't hesitate to contact us by phone number <b>028 6288 4499 </b>or directly at the office at <b>227 Nguyen Van Cu Street, Ward 4, District 5, HCMC </b>
                                    </p>
                                </div>
                            </form>

                            <aside className="d-none d-lg-block col-lg-4" style={{margin: '0px auto',backgroundColor: '#000080',marginLeft: '0px'}}>
                                <form>
                                    <h3 style={{marginTop: '80px',marginBottom: '30px',color: '#fff',marginLeft: '10px'}}><b>MENU</b></h3>
                                </form>

                                <div className="form-group">
                                    <ul className="list-group">
                                        <li className="list-group-item" style={{backgroundColor: 'rgba(255,255,255,0)',padding: '0px'}}>
                                            <div className="border rounded border-white row col-11" style={{margin: '10px auto'}}>
                                                <i className="fa fa-info-circle d-lg-flex d-xl-flex align-items-lg-center align-items-xl-center" style={{marginRight: '10px',color: '#fff',fontSize: '20px'}}></i>
                                                <Link to='/rules' style={{color: '#fff',fontSize: '20px'}}>About</Link>
                                            </div>
                                        </li>

                                        <li className="list-group-item" style={{backgroundColor: 'rgba(255,255,255,0)',padding: '0px'}}>
                                            <div className="border rounded border-white row col-11" style={{margin: '10px auto'}}>
                                                <i className="fa fa-book d-lg-flex d-xl-flex align-items-lg-center align-items-xl-center" style={{marginRight: '10px',color: '#fff',fontSize: '20px'}}></i>
                                                <Link to='/rules' style={{color: '#fff',fontSize: '20px'}}>History</Link>
                                            </div>
                                        </li>

                                        <li className="list-group-item" style={{backgroundColor: 'rgba(255,255,255,0)',padding: '0px'}}>
                                            <div className="border rounded border-white row col-11" style={{margin: '10px auto'}}>
                                                <i className="fa fa-group d-lg-flex d-xl-flex align-items-lg-center align-items-xl-center" style={{marginRight: '10px',color: '#fff',fontSize: '20px'}}></i>
                                                <Link to='/rules' style={{color: '#fff',fontSize: '20px'}}>Staff</Link>
                                            </div>
                                        </li>

                                        <li className="list-group-item" style={{backgroundColor: 'rgba(255,255,255,0)',padding: '0px'}}>
                                            <div className="border rounded border-white row col-11" style={{margin: '10px auto'}}>
                                                <i className="fa fa-user-plus d-lg-flex d-xl-flex align-items-lg-center align-items-xl-center" style={{marginRight: '10px',color: '#fff',fontSize: '20px'}}></i>
                                                <Link to='/rules' style={{color: '#fff',fontSize: '20px'}}>Employment<br/>Oppurtunities</Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}