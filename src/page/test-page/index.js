import React from "react";
import 'hopscotch/dist/css/hopscotch.css';
import {FuncDraw} from "../Function/Graph";
import 'braft-editor/dist/index.css'
import 'braft-extensions/dist/color-picker.css'

import BraftEditor from 'braft-editor'
import ColorPicker from 'braft-extensions/dist/color-picker'


BraftEditor.use(ColorPicker({
    includeEditors: ['editor-with-color-picker'],
    theme: 'light' // 支持dark和light两种主题，默认为dark
}))

export class TestPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // editorState: BraftEditor.createEditorState(null),
            // outputHTML: '<p></p>'
            // steps: [
            //     {
            //         target: ".p1",
            //         placement: 'top',
            //         content: "Here is a complex number problem_list"
            //     },
            //     {
            //         target: ".p2",
            //         placement: 'top',
            //         content: "You can add your own problem_list"
            //     },
            //     {
            //         target: ".p3",
            //         placement: 'top',
            //         content: "Submit your answer step by step (you could skip first step）"
            //     }
            // ]
        };

    }
    // componentDidMount () {
    //     this.isLivinig = true;
    //     // 3秒后更改编辑器内容
    //     setTimeout(this.setEditorContentAsync, 3000)
    // }
    //
    // componentWillUnmount () {
    //     this.isLivinig = false
    // }

    // handleChange = (editorState) => {
    //     this.setState({
    //         editorState: editorState,
    //         outputHTML: editorState.toHTML()
    //     })
    // }
    //
    // setEditorContentAsync = () => {
    //     this.isLivinig && this.setState({
    //         editorState: BraftEditor.createEditorState('<p>你好，<b>世界!</b><p>')
    //     })
    // }

    // handle = ()=>{
    //     this.eq2 = function (x){
    //         return Math.log2(x)
    //     };
    //     this.eqln = function (x){
    //         return Math.log(x)
    //     };
    //     this.eq10 = function (x){
    //         return Math.log10(x)
    //     };
    //     let canvas = document.getElementById("myCanvas");
    //     let c = new FuncDraw(canvas);
    //     let eq;
    //     switch (this.state.equation) {
    //         case '2': eq = this.eq2; break;
    //         case 'e': eq = this.eqln; break;
    //         case '10': eq = this.eq10;
    //     }
    //
    //     c.setColor("lightgrey", "#7e57c2");
    //     c.clear();
    //     c.drawCoords();
    //     c.drawFx(eq, 0.01, 50,this.state.a,this.state.b)
    // };




    render() {
        // const { steps } = this.state;
        // const Button = () =>(
        //     <button>
        //         Submit
        //     </button>
        // );
        const controls = ['bold', 'italic', 'underline', 'text-color', 'separator', 'link', 'separator', 'media' ];
        const { editorState, outputHTML } = this.state;
        // const controls = BraftEditor.defaultProps.controls.map(item => {
        //     return item === 'bold' ? {
        //         key: 'bold', // 使用key来指定控件类型
        //         title: '加粗选中文字哦', // 自定义控件title
        //         text: '点我加粗', // 使用自定义文案来代替默认图标(B)，此处也可传入jsx
        //     } : item
        // })
        const fontFamiies = [
            {
                name: 'Araial',
                family: 'Arial, Helvetica, sans-serif'
            }, {
                name: 'Georgia',
                family: 'Georgia, serif'
            }, {
                name: 'Impact',
                family: 'Impact, serif'
            }, {
                name: 'Monospace',
                family: '"Courier New", Courier, monospace'
            }, {
                name: 'Tahoma',
                family: 'tahoma, arial, "Hiragino Sans GB", 宋体, sans-serif'
            }
        ]
        return (
            <div>
                <BraftEditor
                    className="my-editor"
                    controls={controls}
                    placeholder="请输入正文内容"
                />
                {/*<div className="editor-container">*/}
                    {/*<BraftEditor id="editor-with-color-picker"/>*/}
                {/*</div>*/}
                {/*<div className="editor-wrapper">*/}
                    {/*<BraftEditor*/}
                        {/*value={editorState}*/}
                        {/*onChange={this.handleChange}*/}
                        {/*controls={controls}*/}
                        {/*fontFamilies={fontFamiies}*/}
                    {/*/>*/}
                {/*</div>*/}
                {/*<h5>输出内容</h5>*/}
                {/*<div className="output-content">{outputHTML}</div>*/}
            </div>
        );
    }
}
