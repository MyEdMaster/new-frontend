import React from "react";
import {withRouter} from 'react-router-dom';
import classes from './index.module.css';
import {Nav} from "../../../page/Nav";
import {db} from "../../../tool/fetch-help";
import { MDBTable, MDBTableBody, MDBTableHead,MDBBtn,MDBRow,MDBCol } from 'mdbreact';
import {AskQuestionSession} from "../ask-question";
import {SessionMenu} from "../Menu";

class SessionQaReact extends React.Component {
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

        fetch(`${db}/sessionqa/${this.props.match.params.id}/`,option)
            .then(response=>response.json())
            .then(res=>{
                this.setState({
                    sessionqa:res.results[0],
                });
                let course_id =res.results[0].course_id_id;
                fetch(`${db}/tutor/${course_id}/?model=course`,option)
                    .then(response=>response.json())
                    .then(data=>{
                        this.setState({
                            course:data.results[0],
                            render:1
                        })
                    })
            })

    }

    render() {
        if(this.state.render === 1){
            console.log(this.state.modify);
            return (

                <div>
                    <Nav/>

                    <AskQuestionSession id={this.props.match.params.id}/>
                    <div className='cell-wall'>
                        <div className='cell-membrane'>

                            {/*<div className={classes.font3}>{this.state.course.course_desc}</div>*/}
                            <MDBRow>
                                <MDBCol size='1'>
                                    {
                                        this.props.match.params.id>12 && this.props.match.params.id<18? (
                                            <SessionMenu/>
                                            ):(null)
                                    }

                                </MDBCol>
                                <MDBCol size='10'>
                                    <div>
                                        <span className={classes.title1}>{this.state.sessionqa.subject_name}: </span>
                                        <span className={classes.title2}>{this.state.sessionqa.session_name}</span>
                                    </div>
                                    <div className={classes.font3}>{this.state.sessionqa.session_desc}</div>
                                </MDBCol>
                            </MDBRow>

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
export const SessionQa = withRouter(SessionQaReact);
