import React from 'react';
import {Table,Tag } from 'antd';
import Abet from '../../appComponents/abet';

class Joined extends React.Component {
    render() {
        const columns = [
            { title: '排名', key: 'sort',dataIndex: 'sort',align:'center' },
            { title: '发起者',  key: 'stater', dataIndex: 'stater',align:'center' },
            { title: '累计代币数',  key: 'betx',dataIndex: 'betx',align:'center' },
            { title: '当前助力状态', key: 'abetStatus',dataIndex: 'abetStatus',align:'center'},
            { title: '发起者竞选金额',  key: 'money',dataIndex: 'money',align:'center'},
            { title: '我的助力金额',  key: 'myAbet',dataIndex: 'money',align:'center'},
            { title: '我的权益占比',  key: 'rate',dataIndex: 'money',align:'center'},
            { title: '',  render: (text, record, index) => {
                    let ifFull=text.full;
                    return ifFull?(<Tag className="betx-tag">已满</Tag>):(<Tag className="betx-tag">助力</Tag>)
                }},
        ];

        const data = [
            {key:1, sort: 1, stater: 'John Brown', betx: '32BETX', abetStatus: '100/1000', money: '500',myAbet:'400',rate:'90%',full:true },
            {key:2, sort: 2, stater: 'Jim Green', betx: '32BETX', abetStatus: '100/1000', money: '500',myAbet:'400',rate:'90%',full:false },
            { key:3,sort: 3, stater: 'Joe Black', betx: '32BETX', abetStatus: '100/1000', money: '500',myAbet:'400',rate:'90%' ,full:false},
        ];

        return (
            <div className="betx-block">
                <div className="block-header">
                    <h4 className="block-title">我参与的超级庄家竞选</h4>
                </div>
                <div className="block-content">
                    <div className="block-bg-content">
                        <Table
                            rowKey={record=>record.key}
                            columns={columns}
                            expandedRowRender={record=><Abet row={record}/>}
                            dataSource={data}
                        />
                    </div>
                </div>
            </div>)
    }
}

export default Joined;