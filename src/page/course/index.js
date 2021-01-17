import React from "react";
import {withRouter} from 'react-router-dom';
import classes from './index.module.css';
import {Nav} from "../../page/Nav";
import {db} from "../../tool/fetch-help";
import {MDBBtn, MDBTable, MDBTableBody, MDBTableHead} from 'mdbreact';

class CourseReact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            render:0,
            modify:false

        }
    }
    componentDidMount() {
        const option={
            method:'GET',
            headers: {
                'content-type': 'application/json',
            }
        };
        fetch(`${db}/models/course/`,option)
            .then(response=>response.json())
            .then(res=>{
                this.setState({
                    course:res,
                    render:1

                });
            })
    }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if(this.state.modify){
    //         const option={
    //             method:'GET',
    //             headers: {
    //                 'content-type': 'application/json',
    //             }
    //         };
    //         fetch(`${nodeurl}/problem`,option)
    //             .then(response=>response.json())
    //             .then(res=>{
    //                 this.setState({
    //                     wrong:res,
    //                     render:1
    //
    //                 });
    //             });
    //         this.setState({
    //             modify:false,
    //         })
    //     }
    // }

    handleOnSave = () =>{
        this.setState({
            modify:true
        })
    };

    render() {
        if(this.state.render === 1){
            console.log(this.state.modify);
            return (

                <div>
                    <Nav/>
                    <div className='cell-wall'>
                        <div className='cell-membrane'>
                            <h3 className={`h2-responsive font-weight-bold my-3 purple-text`}>
                                All Courses
                            </h3>
                            <MDBTable striped>
                            <MDBTableHead>
                                <tr>
                                    {/*<th>#</th>*/}
                                    {/*<th>Course Name</th>*/}
                                    {/*<th>Description</th>*/}
                                    <th>#</th>
                                    <th style={{width:'200px'}}>Course Name</th>
                                    <th style={{width:'300px'}}>Description</th>
                                    <th></th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                <tr>
                                    <td>1</td>
                                    <td>Combining Like Terms</td>
                                    <td>Desc</td>
                                    <td><MDBBtn className='purple' size='sm' onClick={() => {this.props.history.push(`/combining_like_term`);}}>Show Lessons</MDBBtn></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Complex Number</td>
                                    <td>Desc</td>
                                    <td><MDBBtn className='purple' size='sm' onClick={() => {this.props.history.push(`/complex`);}}>Show Lessons</MDBBtn></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Foil</td>
                                    <td>Desc</td>
                                    <td><MDBBtn className='purple' size='sm' onClick={() => {this.props.history.push(`/foil`);}}>Show Lessons</MDBBtn></td>
                                </tr>

                            {/*{*/}
                                {/*this.state.course.results.map((item, index)=>{*/}
                                    {/*return<tr>*/}
                                        {/*<td>{index+1}</td>*/}
                                        {/*<td>{item.course_name}</td>*/}
                                        {/*<td>{item.course_desc}</td>*/}
                                        {/*<td><MDBBtn className='purple' size='sm' onClick={() => {this.props.history.push(`/lesson`);}}>Show Lessons</MDBBtn></td>*/}
                                    {/*</tr>*/}
                                {/*})*/}
                            {/*}*/}
                            </MDBTableBody>
                            </MDBTable>

                        </div>
                    </div>

                </div>
            );
        }
        else{
            return null
        }

    }
}
export const Course = withRouter(CourseReact);
