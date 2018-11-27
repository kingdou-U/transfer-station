import React from 'react';
import {Table,Input } from 'antd';

import alarm from "../../../assets/imgs/alarm.png";
import greyLogo from '../../../assets/imgs/logo-grey.png';
const { TextArea } = Input;

function Abet(record){
    const expand = (<div className="betx-table-expand">
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
                    <button>助力</button>
                </div>

                <div className="run-last">
                    <span>可用</span>
                    <span>5000BETX</span>
                </div>
            </div>
        </div>
    </div>)
    return expand;
}

class Next extends React.Component {
    render() {
        const columns = [
            { title: '排名', key: 'sort',dataIndex: 'sort',align:'center' },
            { title: '发起者',  key: 'stater', dataIndex: 'stater',align:'center' },
            { title: '累计代币数',  key: 'betx',dataIndex: 'betx',align:'center' },
            { title: '当前助力状态', key: 'abetStatus',dataIndex: 'abetStatus',align:'center'},
            { title: '发起者竞选金额',  key: 'money',dataIndex: 'money',align:'center'},
            { title: '',  render: (text, record, index) => {
                    let ifFull=text.full;
                    return ifFull?(<button className="betx-btn">已满</button>):(<button className="betx-btn">助力</button>)
                }},
        ];

        const data = [
            {key:1, sort: 1, stater: 'John Brown', betx: '32BETX', abetStatus: '100/1000', money: '500',full:true },
            {key:2, sort: 2, stater: 'Jim Green', betx: '32BETX', abetStatus: '100/1000', money: '500',full:false },
            { key:3,sort: 3, stater: 'Joe Black', betx: '32BETX', abetStatus: '100/1000', money: '500' ,full:false},
        ];


        return (
            <div className="betx-block">
                <div className="block-header">
                    <h4 className="block-title">下轮超级庄家权益竞选</h4>
                    <div className="alarm">
                        <img src={alarm} className="alarm_logo" alt=""/>
                        <span>00,39,16</span>
                    </div>
                </div>
                <div className="block-content">
                    <div className="block-bg-content">
                        <Table
                            rowKey={record=>record.key}
                            columns={columns}
                            expandedRowRender={Abet}
                            dataSource={data}
                        />
                    </div>
                </div>
            </div>)
    }
}

export default Next;