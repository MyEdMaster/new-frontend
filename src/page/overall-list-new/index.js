import React from "react";
import {withRouter} from 'react-router-dom';
import classes from './index.module.css';
import {Nav} from "../../page/Nav";
import {db} from "../../tool/fetch-help";

import {Card} from "./card";

class OverallListNReact extends React.Component {
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
        // await fetch(`${db}/models/course/`,option)
        //     .then(response=>response.json())
        //     .then(res=>{
        //         this.setState({
        //             course:res,
        //
        //
        //         });
        //     });
        await fetch(`${db}/models/topics/`,option)
            .then(response=>response.json())
            .then(res=>{
                this.setState({
                    topic:res,



                });
            });
        // await fetch(`${db}/models/lesson/`,option)
        //     .then(response=>response.json())
        //     .then(res=>{
        //         this.setState({
        //             lesson:res,
        //
        //
        //         });
        //     });
        await fetch(`${db}/models/subjects/`,option)
            .then(response=>response.json())
            .then(res=>{
                this.setState({
                    subject:res,
                    render:1


                });
            });
        // await fetch(`${db}/models/practicequestions/`,option)
        //     .then(response=>response.json())
        //     .then(res=>{
        //         this.setState({
        //             qa:res,
        //             render:1
        //
        //         });
        //     });
    }

    render() {
        if(this.state.render === 1){
            console.log(this.state.modify);
            return (
                <div>
                    <Nav/>
                    <div className='cell-wall'>
                        <div className='cell-membrane mt-1'>
                            <h3 className={`h2-responsive font-weight-bold my-3 purple-text`}>
                                All Subjects
                            </h3>
                            <div className='d-flex justify-content-start'>
                                {/*<Card*/}
                                    {/*title={'Math'}*/}
                                    {/*len={this.state.topic.results.length}*/}
                                    {/*content1={this.state.topic.results[0].topic_name}*/}
                                    {/*content2={this.state.topic.results[1].topic_name}*/}
                                    {/*content3={this.state.topic.results[2].topic_name}*/}
                                    {/*url={'topic'}*/}
                                {/*/>*/}
                                <Card
                                    title={'Math'}
                                    len={3}
                                    content1={'Algebra'}
                                    content2={'...'}
                                    content3={'...'}
                                    url={'topic'}
                                />
                                {/*<Card*/}
                                    {/*title={'Subjects2'}*/}
                                    {/*len={0}*/}
                                    {/*content1={'...'}*/}
                                    {/*content2={'...'}*/}
                                    {/*content3={'...'}*/}
                                    {/*url={''}*/}
                                {/*/>*/}

                            </div>
                            <div className='d-flex justify-content-center mt-3'>

                                {/*<Card*/}
                                    {/*title={'Subjects3'}*/}
                                    {/*len={0}*/}
                                    {/*content1={'...'}*/}
                                    {/*content2={'...'}*/}
                                    {/*content3={'...'}*/}
                                    {/*url={''}*/}
                                {/*/>*/}
                                {/*<Card*/}
                                    {/*title={'Subjects4'}*/}
                                    {/*len={0}*/}
                                    {/*content1={'...'}*/}
                                    {/*content2={'...'}*/}
                                    {/*content3={'...'}*/}
                                    {/*url={''}*/}
                                {/*/>*/}
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
export const OverallListN = withRouter(OverallListNReact);
