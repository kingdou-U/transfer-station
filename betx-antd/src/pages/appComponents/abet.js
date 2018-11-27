import React from 'react';
import {Input} from 'antd'
import greyLogo from "../../assets/imgs/logo-grey.png";

const {TextArea} = Input;
class Abet extends React.Component {
    AbetNow(row){
        console.log(row)
    }
    render() {
        return (
            <div className="betx-table-expand">
                <div className="run-for">
                    <div className="run-declaration">
                        <h5 className="run-title">竞选宣言</h5>
                        <TextArea rows={4} className="betx-textarea"></TextArea>
                    </div>
                    <div className="run-assistance">
                        <h5 className="run-title">竞选助力</h5>
                        <div className="betx-input-item">
                            <img className="input-logo" src={greyLogo} alt=""/>
                            <input type="text"/>
                            <button onClick={this.AbetNow.bind(this,this.props.row)}>助力</button>
                        </div>

                        <div className="run-last">
                            <span>可用666</span>
                            <span>5000BETX</span>
                        </div>
                    </div>
                </div>
            </div>)
    }
}

export default Abet;