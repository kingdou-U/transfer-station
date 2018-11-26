import React from 'react';
import right from './right.png';
import './betx-table.css';

import BetxInput from '../betx-input/betx-input';
class table extends React.Component {
    render() {
        return (
            <div className="betx-table-wrapper">
                <table className="betx-table">
                    <thead className="betx-table-head">
                        <tr>
                            <th>排名</th>
                            <th>发起者</th>
                            <th>累计代币数</th>
                            <th>当前助力状态</th>
                            <th>发起者竞选金额</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="betx-table-body">
                        <tr>
                            <td>1</td>
                            <td>xxxxx12345</td>
                            <td>10000BETX</td>
                            <td>100/1000</td>
                            <td>500</td>
                            <td>
                                <div className="betx-table-control">
                                    <button className="betx-btn betx-btn-sm">已满</button>
                                    <img className="expand-ico" src={right} alt=""/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>xxxxx12345</td>
                            <td>10000BETX</td>
                            <td>100/1000</td>
                            <td>500</td>
                            <td>
                                <div className="betx-table-control">
                                    <button className="betx-btn betx-btn-sm">已满</button>
                                    <img className="expand-ico" src={right} alt=""/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="6">
                                <div className="betx-table-expand">
                                    <div className="run-for">
                                        <div className="run-declaration">
                                            <h5 className="run-title">竞选宣言</h5>
                                            <textarea className="betx-textarea">
                                            </textarea>
                                        </div>
                                        <div className="run-assistance">
                                            <h5 className="run-title">竞选助力</h5>
                                            <BetxInput></BetxInput>
                                            <div className="run-last">
                                                <span>可用</span>
                                                <span>5000BETX</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>)
    }
}

export default table;