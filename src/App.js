import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {BrowserRouter, HashRouter} from 'react-router-dom';
//import AnimatedRouter from 'react-animated-router';
import 'react-animated-router/animate.css';


import {RRH} from "./page/RRH";
import {RrhPage} from "./page/RRH/Page";
import {HomePage} from "./page/HomePage";
import {ComplexNumber} from "./page/ComplexNumber";
import {TestPage} from "./page/test-page";
import {Function} from "./page/Function";
import {HapPage} from "./page/HAP";
import {HapCover} from "./page/HAP/cover";
import {HomePage2} from "./page/HomePage2";
import {Foil} from "./page/Foil";
import {FoilPage} from "./page/ComplexNumber/Page/foil_study";
import {Clt} from "./page/Clt";
import {Course} from "./page/course";
import {OverallList} from "./page/overall-list";
import {Subject} from "./page/subject";
import {Session} from "./page/session";
import {Topic} from "./page/topic";
import {OverallListN} from "./page/overall-list-new";
import {Lesson} from "./page/lesson";
import {SessionQa} from "./page/sessionqa/content";
import {SessionWS} from "./page/sessionqa/worksheet";

export class App extends Component {
    render() {
        return (
            <Route>
                <Switch>
                    <Route
                        path="/worksheet/:id"
                        component={routeProps => <SessionWS {...routeProps} />}
                    />
                    <Route
                        path="/sessionqa/:id"
                        component={routeProps => <SessionQa {...routeProps} />}
                    />
                    <Route
                        path="/course"
                        component={routeProps => <Course {...routeProps} />}
                    />
                    <Route
                        path="/lesson"
                        component={routeProps => <Lesson {...routeProps} />}
                    />
                    <Route
                        path="/subject"
                        component={routeProps => <Subject {...routeProps} />}
                    />
                    <Route
                        path="/session"
                        component={routeProps => <Session {...routeProps} />}
                    />
                    <Route
                        path="/topic"
                        component={routeProps => <Topic {...routeProps} />}
                    />
                    <Route
                        path="/overall-list"
                        component={routeProps => <OverallList {...routeProps} />}
                    />
                    <Route
                        path="/overall-list-new"
                        component={routeProps => <OverallListN {...routeProps} />}
                    />
                    <Route
                        path="/combining_like_term"
                        component={routeProps => <Clt {...routeProps} />}
                    />
                    <Route
                        path="/complex"
                        component={routeProps => <ComplexNumber {...routeProps} />}
                    />
                    <Route
                        path="/function"
                        component={routeProps => <Function {...routeProps} />}
                    />
                    <Route
                        path="/foil"
                        component={routeProps => <Foil {...routeProps} />}
                    />
                    <Route
                        path="/foil_study"
                        component={routeProps => <FoilPage {...routeProps} />}
                    />
                    <Route
                        path="/hap/:id"
                        component={routeProps => <HapPage {...routeProps} />}
                    />
                    <Route
                        path="/hapcover"
                        component={routeProps => <HapCover {...routeProps} />}
                    />
                    <Route
                        path="/home"
                        component={routeProps => <HomePage {...routeProps} />}
                    />
                    <Route
                        path="/h2"
                        component={routeProps => <HomePage2 {...routeProps} />}
                    />
                    {/*<Route*/}
                        {/*path="/problem_list"*/}
                        {/*component={routeProps => <ProblemList {...routeProps} />}*/}
                    {/*/>*/}
                    {/*<Route*/}
                        {/*path="/problem/:id"*/}
                        {/*component={routeProps => <ProblemDetail {...routeProps} />}*/}
                    {/*/>*/}
                    <Route
                        path="/rrh"
                        component={routeProps => <RRH {...routeProps} />}
                    />

                    <Route
                        path="/rrh2/:id"
                        component={routeProps => <RrhPage {...routeProps} />}
                    />

                    <Route
                        path="/test"
                        component={routeProps => <TestPage {...routeProps} />}
                    />
                    <Redirect to="/home"/>
                </Switch>
            </Route>

        );
    }
}
