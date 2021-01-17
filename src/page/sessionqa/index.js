import React from "react";
import {withRouter} from 'react-router-dom';
import classes from './index.module.css';
import {Nav} from "../../page/Nav";
import {db} from "../../tool/fetch-help";
import { MDBTable, MDBTableBody, MDBTableHead,MDBBtn,MDBRow,MDBCol } from 'mdbreact';
//import {AskQuestionSession} from "../ask-question";
import {AskQuestionSession} from "./ask-question";
import {SessionQa} from "./content";
import {Redirect, Route, Switch} from 'react-router-dom';

class SessionHomeReact extends React.Component {
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
                    <Switch>

                        <Route
                            path={`${this.props.match.url}/:id`}
                            component={routeProps => <SessionQa {...routeProps} />}
                        />

                        <Redirect to={`${this.props.match.url}/`} />

                    </Switch>
                </div>
            );
        }
        else{
            return null
        }

    }
}
export const SessionHome = withRouter(SessionHomeReact);
