import React from "react";
import {withRouter} from 'react-router-dom';
import classes from './index.module.css';
import {Nav} from "../../page/Nav";
import {db} from "../../tool/fetch-help";
import { MDBTable, MDBTableBody, MDBTableHead,MDBBtn } from 'mdbreact';

class TopicReact extends React.Component {
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
        fetch(`${db}/models/topics/`,option)
            .then(response=>response.json())
            .then(res=>{
                this.setState({
                    topic:res,
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



    render() {
        if(this.state.render === 1){
            console.log(this.state.modify);
            return (

                <div>
                    <Nav/>
                    <div className='cell-wall'>
                        <div className='cell-membrane'>
                            <h3 className={`h2-responsive font-weight-bold my-3 purple-text`}>
                                All subtopics
                            </h3>
                            <MDBTable striped>
                            <MDBTableHead>
                                <tr>
                                    <th>#</th>
                                    <th style={{width:'200px'}}>topic Name</th>
                                    <th style={{width:'300px'}}>Description</th>
                                    <th></th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                <tr onClick={() => {this.props.history.push(`/course`);}}>
                                    <td>1</td>
                                    <td>Algebra1_subtopic</td>
                                    <td>Desc</td>
                                    <td><MDBBtn className='purple' size='sm' onClick={() => {this.props.history.push(`/course`);}}>Show course</MDBBtn></td>
                                </tr>

                                    {/*{*/}
                                        {/*this.state.topic.results.map((item, index)=>{*/}
                                            {/*return<tr onClick={() => {this.props.history.push(`/course`);}}>*/}
                                                {/*<td>{index+1}</td>*/}
                                                {/*<td>{item.topic_name}</td>*/}
                                                {/*<td>{item.topic_desc}</td>*/}
                                                {/*<td><MDBBtn className='purple' size='sm' onClick={() => {this.props.history.push(`/course`);}}>Show Courses</MDBBtn></td>*/}
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
export const Topic = withRouter(TopicReact);
