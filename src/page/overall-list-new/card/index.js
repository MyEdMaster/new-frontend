import React from "react";
import {withRouter} from 'react-router-dom';
import classes from './index.module.css';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

class CardReact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            render: 0,
            modify: false

        }
    }

    // componentDidMount() {
    //     const option={
    //         method:'GET',
    //         headers: {
    //             'content-type': 'application/json',
    //         }
    //     };
    //     fetch(`${db}/models/course/`,option)
    //         .then(response=>response.json())
    //         .then(res=>{
    //             this.setState({
    //                 course:res,
    //                 render:1
    //
    //             });
    //         })
    // }
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
        return (
            <div onClick={() => {this.props.history.push(`/${this.props.url}`);}}>
                <MDBCard style={{width: "15rem",margin:'10px 2rem 10px 2rem'}}>
                    <MDBCardBody>
                        <MDBCardTitle className='purple-text'>{this.props.title}</MDBCardTitle>
                        <MDBCardText>
                            <div>{this.props.content1}</div>
                            <div>{this.props.content2}</div>
                            <div>{this.props.content3}</div>
                            <hr/>
                            <div>Total courses: {this.props.len}</div>
                            <div>View More</div>
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </div>
        )
    }
}
export const Card = withRouter(CardReact);
