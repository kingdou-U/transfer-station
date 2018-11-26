import React from 'react';
import BetxInput from "../../components/betx-input/betx-input";
/*
* Run组件说明：
* props:
*   title:竞选标题
*   btn:竞选输入按钮文字
*   last: 竞选可用余额
* */
class Run extends React.Component {
    render() {
        return (
                <div className="run-for">
                    <div className="run-declaration">
                        <h5 className="run-title">竞选宣言</h5>
                        <textarea className="betx-textarea"></textarea>
                    </div>
                    <div className="run-assistance">
                        <h5 className="run-title">{this.props.title}</h5>
                        <BetxInput btn={this.props.btn}></BetxInput>
                        <div className="run-last">
                            <span>可用</span>
                            <span>{this.props.last}BETX</span>
                        </div>
                    </div>
                </div>
           )
    }
}

Run.defaultProps={
    title:'竞选助力',
    btn:'助力',
    last:0
};

export default Run;