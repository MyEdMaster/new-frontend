import React from "react";
import {withRouter} from 'react-router-dom';
import classes from './index.module.css'
import {Nav} from "../../../page/Nav";
import {nodeurl} from "../../../tool/fetch-help";
import {new_url} from "../../../tool/fetch-help";
import {deleteMark} from "../../../tool/delete-mark";
import {ProblemPanel} from "../../../CRUD_module/component/problem_panel";
import {MDBRow, MDBCol, MDBBtn, MDBCard, MDBIcon, MDBModal, MDBInput, MDBModalFooter} from 'mdbreact'
import {AskQuestionSession} from "../ask-question";
import {SessionMenu} from "../Menu";

class SessionWSReact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            render:0,
            modify:false,
            modal14: false,
            answers:[],
            a:'-6',
            b:'-4',
            c:'2',
            d:'5',
            value:'',
            step:1,
            hint:'',
            isRight:true,
            finish:false,
            finishText:'',

            steps: [
                {
                    target: ".problem_list",
                    placement: 'bottom',
                    content: "Here is a complex number problem_list"
                },
                {
                    target: ".add",
                    placement: 'bottom',
                    content: "You can add your own problem_list"
                },
                {
                    target: ".submit",
                    placement: 'bottom',
                    content: "Submit your answer step by step (you could skip first step）"
                }
            ]

        };
        this.mark = deleteMark(this.state.a, this.state.b, this.state.c, this.state.d)
    }
    componentDidMount() {
        const problem={
            method:'GET',
            headers: {
                'content-type': 'application/json',
            }
        };
        // const select={
        //     method:'POST',
        //     headers: {
        //         'content-type': 'application/json',
        //     },
        //     body:JSON.stringify({problem_ID: this.props.match.params.id})
        // };
        let problem_id = this.props.match.params.id -12;
        fetch(`${nodeurl}/problem/${problem_id}`,problem)
            .then(response=>response.json())
            .then(res=>{
                this.setState({
                    problem:res[0],
                    render:1
                });
            });

    }
    componentDidUpdate(prevProps) {
        this.mark = deleteMark(this.state.a, this.state.b, this.state.c, this.state.d)
    }
    toggle = nr => () => {
        let modalNumber = 'modal' + nr;
        this.setState({
            [modalNumber]: !this.state[modalNumber],
        });
    };
    post = ()=>{
        const option={
            method:'POST',
            headers: {
                'content-type': 'application/json',
            },
            body:JSON.stringify({
                "problem_id":this.props.match.params.id,
                "parameter_number":4,
                "parameter_list":`${this.state.a},${this.state.b},${this.state.c},${this.state.d}`,
                "old_step":this.state.step,
                "answer":this.state.value,
            })
        };
        fetch(`${new_url}/MathEngine/1`,option)
            .then(response=>response.json())
            .then(answer=>{
                this.setState({
                    hint:answer.feedback
                });
                if (answer.wrong){
                    this.setState({
                        isRight:false
                    })
                }
                if (answer.right){
                    let arr = this.state.answers;
                    let step= answer.new_step;
                    arr.push([step, this.state.value]);
                    this.setState({
                        answers:arr,
                        step:step,
                        isRight:true,
                        value:''
                    })
                }
                if(answer.is_end){
                    let arr = this.state.answers;
                    let step= answer.step;
                    arr.push([step, this.state.value]);
                    this.setState({
                        answers:arr,
                        step:step,
                        isRight:true,
                        value:'',
                        finish:true,
                        finishText:'Finished! You got it.'
                    })
                }
            })
    };


    render() {
        if(this.state.render ===1){
            const { run,steps } = this.state;
            this.list=[
                ` (${this.state.a} ${this.mark[0]} ${this.mark[1]}i) + (${this.state.c} ${this.mark[2]} ${this.mark[3]}i).`,
                ` (${this.state.a} ${this.mark[0]} ${this.mark[1]}i) - (${this.state.c} ${this.mark[2]} ${this.mark[3]}i).`,
                ` (${this.state.a} ${this.mark[0]} ${this.mark[1]}i) * (${this.state.c} ${this.mark[2]} ${this.mark[3]}i).`,
                ` (${this.state.a} ${this.mark[0]} ${this.mark[1]}i) / (${this.state.c} ${this.mark[2]} ${this.mark[3]}i).`,
                ` (${this.state.a}x ${this.mark[0]} ${this.mark[1]}) * (${this.state.c}x ${this.mark[2]} ${this.mark[3]}).`,
            ];
            // const hash = this.handleStep(this.state.step);
            // const maxStep=this.findMaxStep(hash);
            //
            // console.log(hash);
            return (
                <div>
                    <Nav/>
                    <AskQuestionSession id={this.props.match.params.id}/>
                    <div className='cell-wall'>
                        <div className='cell-membrane'>
                            <MDBRow>
                                <MDBCol size='1'>
                                    <SessionMenu/>
                                </MDBCol>
                                <MDBCol size='10'>
                                    <div className ='mt-3 d-flex'>
                                        <h3 className={`h4-responsive font-weight-bold mr-3 purple-text`}>
                                            Problem Info
                                        </h3>
                                        {/*<ProblemEdit onSave={this.handleOnSave} data={this.state.problem}/>*/}
                                    </div>
                                    <div className={classes.title}>
                                        <div className ='row py-2'>
                                            <div className='col-1'>#</div>
                                            <div className='col-2'>Name</div>
                                            <div className='col-3'>Description</div>
                                            <div className='col-2'>Para number</div>
                                            <div className='col-4'>Start Format</div>
                                            {/*<div className='col-1'> <ProblemAdd onSave={this.handleOnSave}/></div>*/}
                                        </div>
                                    </div>
                                    <ProblemPanel id={this.props.match.params.id}/>
                                    <MDBRow center className='mt-4'>
                                        <MDBCol size="12" className="add">
                                            <MDBCard
                                                size="8"
                                                color="blue-grey"
                                                text="white"
                                                className="py-3 px-3 w-100"
                                                style={{boxShadow:'none', borderRadius:'0'}}
                                            >
                                                <p className={`${classes.pb}`}>Problem</p>

                                                <p
                                                    className={`${classes.pb2}`}
                                                    style={{borderStyle:'solid',borderBottomColor:'#9e9e9e', borderWidth:'0 0 1px 0'}}
                                                >
                                                    Solve the following:
                                                    {this.list[this.props.match.params.id-13]}
                                                    Begin your work by first rewriting the problem in 'Step 1' in the worksheet.
                                                    <tr/><br/>
                                                </p>
                                                <p
                                                    className={`${classes.pb3} add`}

                                                    onClick={this.toggle(14)}
                                                >
                                                    ADD YOUR OWN PROBLEM
                                                </p>
                                            </MDBCard>

                                            <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} size="lg" centered>
                                                <div className="p-3">
                                                    <div
                                                        style={{
                                                            fontFamily:'\'Roboto\',sans-serif',
                                                            fontSize:'28px',
                                                            fontWeight:'bolder'
                                                        }}
                                                    >
                                                        Add Your Own Problem
                                                    </div>
                                                    <br/>
                                                    <div
                                                        style={{
                                                            fontFamily:'\'Roboto\',sans-serif',
                                                            fontSize:'16px',
                                                            fontWeight:'bolder'
                                                        }}
                                                    >
                                                        Add your own problem. You can set the values of a, b, c, and d below.
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <MDBInput
                                                            onChange={(e) => {
                                                                this.setState({
                                                                    a: e.target.value
                                                                });
                                                            }}

                                                            label="a" className="mr-3"  size="sm" style={{border:'solid',borderColor:'#7e57c2', borderWidth:'0 0 2px 0',fontFamily:'\'Roboto\',sans-serif',}}
                                                        />
                                                        <MDBInput
                                                            onChange={(e) => {
                                                                this.setState({
                                                                    b: e.target.value
                                                                });
                                                            }}
                                                            label="b" className="mr-3" size="sm" style={{border:'solid',borderColor:'#7e57c2', borderWidth:'0 0 2px 0',fontFamily:'\'Roboto\',sans-serif',}}
                                                        />
                                                        <MDBInput
                                                            onChange={(e) => {
                                                                this.setState({
                                                                    c: e.target.value
                                                                });
                                                            }}
                                                            label="c" className="mr-3 " size="sm" style={{border:'solid',borderColor:'#7e57c2', borderWidth:'0 0 2px 0',fontFamily:'\'Roboto\',sans-serif',}}
                                                        />
                                                        <MDBInput
                                                            onChange={(e) => {
                                                                this.setState({
                                                                    d: e.target.value
                                                                });
                                                            }}
                                                            label="d" size="sm" style={{border:'solid',borderColor:'#7e57c2', borderWidth:'0 0 2px 0',fontFamily:'\'Roboto\',sans-serif',}}
                                                        />
                                                    </div>
                                                </div>

                                                <MDBModalFooter>
                                                    <MDBBtn
                                                        color="deep-purple"
                                                        size="md"
                                                        onClick={this.toggle(14)}
                                                        style={{
                                                            fontFamily:'\'Roboto\',sans-serif',
                                                            fontSize:'12px',
                                                            fontWeight:'bolder'
                                                        }}
                                                    >Cancel
                                                    </MDBBtn>
                                                    <MDBBtn
                                                        className="orange accent-2"
                                                        size="md"
                                                        onClick={()=>{
                                                            this.setState({
                                                                modal14:false,
                                                                answers:[],
                                                                finish:false,
                                                                step:1
                                                            })
                                                        }}
                                                        style={{
                                                            fontFamily:'\'Roboto\',sans-serif',
                                                            fontSize:'12px',
                                                            fontWeight:'bolder'
                                                        }}
                                                    >Set</MDBBtn>
                                                </MDBModalFooter>
                                            </MDBModal>

                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow center className='mt-4'>

                                        <MDBCol size="12" >
                                            <div className={`${classes.worksheet} px-3 py-3`}>
                                                <label className={classes.ws}>
                                                    Worksheet
                                                </label>
                                                <div
                                                    className="px-3 pt-3"
                                                >
                                                    {this.state.answers.map((item, index)=>{
                                                        return<div
                                                            key={index}
                                                            className="py-2 d-flex align-items-baseline"
                                                            style={{
                                                                border:'solid',
                                                                borderColor:'#388e3c',
                                                                borderWidth:'0 0 2px 0',
                                                                fontFamily:'\'Roboto\',sans-serif',
                                                                fontSize:'18px',
                                                                fontWeight:'bolder'
                                                            }}
                                                        >
                                                            <span style={{fontWeight:'bold',color:'#388e3c'}}>Step{item[0]-1}</span> &nbsp;{item[1]}

                                                        </div>
                                                    })}
                                                </div>
                                                {!this.state.finish?(
                                                    <div className="px-3 d-flex align-items-baseline">

                                                        <div className="flex-grow-1">

                                                            <MDBInput
                                                                label={`Step ${this.state.step.toString()}`}
                                                                className="mr-3 submit"
                                                                size="sm"
                                                                value={this.state.value}
                                                                style={this.state.isRight ?{
                                                                    border:'solid',
                                                                    borderColor:'#81c784',
                                                                    borderWidth:'0 0 2px 0',
                                                                    fontFamily:'\'Roboto\',sans-serif',
                                                                    fontSize:'18px'
                                                                }:{
                                                                    border:'solid',
                                                                    borderColor:'#d32f2f',
                                                                    borderWidth:'0 0 2px 0',
                                                                    fontFamily:'\'Roboto\',sans-serif',
                                                                    fontSize:'18px'
                                                                }}
                                                                onChange={(e) => {
                                                                    this.setState({
                                                                        value: e.target.value
                                                                    });
                                                                }}
                                                            />

                                                        </div>
                                                        <div className="ml-4">
                                                            <MDBBtn
                                                                tag="a" floating className=" green lighten-2 m-0"
                                                                onClick={()=>{this.post()}}
                                                            >
                                                                <MDBIcon icon="clipboard-check" />
                                                            </MDBBtn>
                                                            {/*<MDBBtn*/}
                                                            {/*tag="a" floating className=" orange lighten-2"*/}
                                                            {/*>*/}
                                                            {/*<MDBIcon icon="microphone" />*/}
                                                            {/*</MDBBtn>*/}
                                                        </div>

                                                    </div>
                                                ):(
                                                    <p className={classes.pb4}>Finished! You got it</p>
                                                )}



                                                <div className="px-3 pt-3">
                                                    <MDBCard
                                                        size="8"
                                                        text="white"
                                                        className="py-3 px-3 w-100 green lighten-3"
                                                        style={{boxShadow:'none', borderRadius:'0'}}
                                                    >
                                                        <p className={classes.pb}>Hints/Feedback</p>
                                                        <p className={classes.pb2}>{this.state.hint}</p>
                                                        {/*<MDBRow center>*/}
                                                        {/*<MDBBtn tag="a" floating disabled className="grey lighten-1">*/}
                                                        {/*<MDBIcon icon="angle-left" />*/}
                                                        {/*</MDBBtn>*/}
                                                        {/*<MDBBtn tag="a" floating disabled className="grey lighten-1">*/}
                                                        {/*<MDBIcon icon="angle-right" />*/}
                                                        {/*</MDBBtn>*/}
                                                        {/*</MDBRow>*/}
                                                    </MDBCard>
                                                </div>

                                            </div>
                                        </MDBCol>
                                    </MDBRow>
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
export const SessionWS = withRouter(SessionWSReact);
