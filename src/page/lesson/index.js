import React from "react";
import {withRouter} from 'react-router-dom';
import classes from './index.module.css';
import {Nav} from "../../page/Nav";
import {db} from "../../tool/fetch-help";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

class LessonReact extends React.Component {
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
        fetch(`${db}/models/lesson/`,option)
            .then(response=>response.json())
            .then(res=>{
                this.setState({
                    lesson:res,
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
                                All lessons
                            </h3>
                            <MDBTable striped>
                            <MDBTableHead>
                                <tr>
                                    <th>#</th>
                                    <th>lesson Name</th>
                                    <th>Description</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>

                            {
                                this.state.lesson.results.map((item, index)=>{
                                    return<tr>
                                        <td>{index+1}</td>
                                        <td>{item.lesson_name}</td>
                                        <td>{item.lesson_desc}</td>
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
export const Lesson = withRouter(LessonReact);
