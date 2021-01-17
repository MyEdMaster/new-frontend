import React from "react";
import {withRouter} from 'react-router-dom';
import classes from './index.module.css';
import {Nav} from "../../page/Nav";
import {db} from "../../tool/fetch-help";

import {Card} from "./card";

class OverallListReact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            render:0,
            modify:false

        }
    }
    async componentDidMount() {
        const option={
            method:'GET',
            headers: {
                'content-type': 'application/json',
            }
        };
        await fetch(`${db}/models/course/`,option)
            .then(response=>response.json())
            .then(res=>{
                this.setState({
                    course:res,


                });
            });
        await fetch(`${db}/models/topics/`,option)
            .then(response=>response.json())
            .then(res=>{
                this.setState({
                    topic:res,


                });
            });
        await fetch(`${db}/models/lesson/`,option)
            .then(response=>response.json())
            .then(res=>{
                this.setState({
                    lesson:res,


                });
            });
        await fetch(`${db}/models/subjects/`,option)
            .then(response=>response.json())
            .then(res=>{
                this.setState({
                    subject:res,


                });
            });
        await fetch(`${db}/models/practicequestions/`,option)
            .then(response=>response.json())
            .then(res=>{
                this.setState({
                    qa:res,
                    render:1

                });
            });
    }

    render() {
        if(this.state.render === 1){
            console.log(this.state.modify);
            return (
                <div>
                    <Nav/>
                    <div className='cell-wall'>
                        <div className='cell-membrane mt-5'>
                            <div className='d-flex justify-content-center'>
                                <Card
                                    title={'Courses'}
                                    len={this.state.course.results.length}
                                    content1={this.state.course.results[0].course_name}
                                    content2={this.state.course.results[1].course_name}
                                    content3={this.state.course.results[2].course_name}
                                    url={'course'}
                                />
                                <Card
                                    title={'Subjects'}
                                    len={this.state.subject.results.length}
                                    content1={this.state.subject.results[0].subject_name}
                                    content2={this.state.subject.results[1].subject_name}
                                    content3={this.state.subject.results[2].subject_name}
                                    url={'subject'}
                                />

                            </div>
                            <div className='d-flex justify-content-center mt-3'>

                                <Card
                                    title={'Topics'}
                                    len={this.state.topic.results.length}
                                    content1={this.state.topic.results[0].topic_name}
                                    content2={this.state.topic.results[1].topic_name}
                                    content3={this.state.topic.results[2].topic_name}
                                    url={'topic'}
                                />
                                <Card
                                    title={'Lessons'}
                                    len={this.state.lesson.results.length}
                                    content1={this.state.lesson.results[0].lesson_name}
                                    content2={this.state.lesson.results[1].lesson_name}
                                    content3={this.state.lesson.results[2].lesson_name}
                                    url={'lesson'}
                                />
                            </div>
                            {/*<div className='d-flex justify-content-around mt-3'>*/}
                                {/*<Card*/}
                                    {/*title={'Lessons'}*/}
                                    {/*len={this.state.lesson.results.length}*/}
                                    {/*content1={this.state.lesson.results[0].lesson_name}*/}
                                    {/*content2={this.state.lesson.results[1].lesson_name}*/}
                                    {/*content3={this.state.lesson.results[2].lesson_name}*/}
                                {/*/>*/}
                                {/*<Card title={'Practises'} content={this.state.qa}/>*/}
                                {/*<Card title={'More'} content={this.state.qa}/>*/}
                            {/*</div>*/}



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
export const OverallList = withRouter(OverallListReact);
