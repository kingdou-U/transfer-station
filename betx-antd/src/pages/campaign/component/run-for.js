import React from 'react';
import {Input} from 'antd'
import greyLogo from "../../../assets/imgs/logo-grey.png";
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
            <div className="betx-block">
                <div className="block-header">
                    <h4 className="block-title">发起竞选</h4>
                </div>
                <div className="block-content">
                    <div className="run-for">
                        <div className="run-declaration">
                            <h5 className="run-title">竞选宣言</h5>
                            <Input.TextArea className="betx-textarea"></Input.TextArea>
                        </div>
                        <div className="run-assistance">
                            <h5 className="run-title">竞选出价</h5>
                            <div className="betx-input-item">
                                <img className="input-logo" src={greyLogo} alt=""/>
                                <Input type="text"/>
                                <button>竞选</button>
                            </div>
                            <div className="run-last">
                                <span>可用</span>
                                <span>5000BETX</span>
                            </div>
                        </div>
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