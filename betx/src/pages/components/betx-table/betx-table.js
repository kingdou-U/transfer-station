import React from 'react';
import './betx-table.css';

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
                                <button className="betx-btn betx-btn-sm">已满</button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>xxxxx12345</td>
                            <td>10000BETX</td>
                            <td>100/1000</td>
                            <td>500</td>
                            <td>
                                <button className="betx-btn betx-btn-sm">助力</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>)
    }
}

export default table;