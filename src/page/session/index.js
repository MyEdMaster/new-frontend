import React from "react";
import {withRouter} from 'react-router-dom';
import classes from './index.module.css';
import {Nav} from "../../page/Nav";
import {db} from "../../tool/fetch-help";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import {getSubjectById} from "../../tool/fetch-help";
import {getCourseById} from "../../tool/fetch-help";
import {getLessonById} from "../../tool/fetch-help";
import {getTopicById} from "../../tool/fetch-help";
import {searchBySubjectId} from "../../tool/fetch-help";
import {searchByCourseId} from "../../tool/fetch-help";
import {searchByLessonId} from "../../tool/fetch-help";
import {searchByTopictId} from "../../tool/fetch-help";

class SessionReact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            render:0,
            modify:false,
            render2:0

        }
    }
    async componentDidMount() {
        const option={
            method:'GET',
            headers: {
                'content-type': 'application/json',
            }
        };
        await fetch(`${db}/models/sessions/`,option)
            .then(response=>response.json())
            .then(res=>{
                this.setState({
                    session:res,


                });
            });

        await fetch(`${db}/models/subjects/`,option)
            .then(response=>response.json())
            .then(res=>{
                this.setState({
                    subject:res,
                });
            });
        await fetch(`${db}/models/lesson/`,option)
            .then(response=>response.json())
            .then(res=>{
                this.setState({
                    lesson:res,
                });
            });
        await fetch(`${db}/models/topics/`,option)
            .then(response=>response.json())
            .then(res=>{
                this.setState({
                    topic:res,
                });
            });
        await fetch(`${db}/models/course/`,option)
            .then(response=>response.json())
            .then(res=>{
                this.setState({
                    course:res,
                    render:1
                });
            });
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
    // getSubjectById = async (id)=> {
    //     const option={
    //         method:'GET',
    //         headers: {
    //             'content-type': 'application/json',
    //         }
    //     };
    //     await fetch(`${db}/tutor/${id}/?model=subjects`,option)
    //         .then(response=>response.json())
    //         .then(res=>{
    //
    //         })
    // };

    render() {
        if(this.state.render){
            console.log(this.state.subject.results);
            // let result=searchById(10,this.state.subject.results,'subject');
            // console.log(result);
            return (

                <div>
                    <Nav/>
                    <div className='cell-wall'>
                        <div className='cell-membrane'>
                            <h3 className={`h2-responsive font-weight-bold my-3 purple-text`}>
                                Sessions
                            </h3>
                            <MDBTable striped>
                            <MDBTableHead>
                                <tr>
                                    <th>#</th>
                                    <th>Description</th>
                                    <th>Subject</th>
                                    <th>Topic</th>
                                    <th>Course</th>
                                    <th>Lesson</th>
                                    <th>Last Learning</th>

                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>

                            {
                                this.state.session.results.map((item, index)=>{
                                    //let id = item.subject_id_id;

                                    return<tr onClick={() => {this.props.history.push(`/sessionqa/${item.session_id}`);}}>
                                        <td>{index+1}</td>
                                        <td>{item.session_name}</td>
                                        <td>{searchBySubjectId(item.subject_id_id,this.state.subject.results)}</td>
                                        <td>{searchByTopictId(item.topic_id_id,this.state.topic.results)}</td>
                                        <td>{searchByCourseId(item.course_id_id,this.state.course.results)}</td>
                                        <td>{searchByLessonId(item.lesson_id_id,this.state.lesson.results)}</td>
                                        {/*<td>{getSubjectById(item.topic_id_id).results[0].topic_name}{item.topic_id_id}</td>*/}
                                        {/*<td>{getSubjectById(item.course_id_id).results[0].course_name}{item.course_id_id}</td>*/}
                                        {/*<td>{getSubjectById(item.lesson_id_id).results[0].lesson_name}{item.lesson_id_id}</td>*/}
                                        <td>{item.last_updated.substr(0,10)}</td>

                                    </tr>
                                })
                            }
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
export const Session = withRouter(SessionReact);
