import React from 'react';
import right from '../../components/betx-table/right.png';
import '../../components/betx-table/betx-table.css';

import BetxInput from '../../components/betx-input/betx-input.js';

class Join extends React.Component {
    constructor(){
        super();
        this.state={
            active:-1,
            lists:[{
                sort:1,
                stater:'xxxxx12345',
                betx:'100000BETX',
                currentStatus:'1000/1000',
                money:'500',
                status:'full',
                helpMoney:'300',
                rate:'10%'
            },{
                sort:2,
                stater:'xxxxx12345',
                betx:'100000BETX',
                currentStatus:'100/1000',
                money:'500',
                status:'',
                helpMoney:'300',
                rate:'10%'
            }]
        }
    }
    expand (index) {

        this.setState({
            active:index===this.state.active?-1:index
        });
        const expand=this.refs['expand'];

        this.refs['tr'+index].after(expand)

    }
    render() {
        const rotateStyle={
            transform:"rotate(90deg)",
            transition:"all ease .3s"
        };
        return (
            <div className="betx-table-wrapper">
                <table className="betx-table">
                    <thead className="betx-table-head">
                    <tr>
                        <th>排名</th>
                        <th>发起者</th>
                        <th>累计代币</th>
                        <th>当前助力状态</th>
                        <th>发起者金额</th>
                        <th>我的助力金额</th>
                        <th>我的权益占比</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody className="betx-table-body">
                    {this.state.lists.map((item,index)=>{
                        return (
                            <tr ref={'tr'+index} key={index}>
                                <td>{item.sort}</td>
                                <td>{item.stater}</td>
                                <td>{item.betx}</td>
                                <td>{item.currentStatus}</td>
                                <td>{item.money}</td>
                                <td>{item.helpMoney}</td>
                                <td>{item.rate}</td>
                                <td>
                                    <div className="betx-table-control">
                                        <button disabled={item.status==='full'} onClick={this.expand.bind(this,index)} className="betx-btn betx-btn-sm">{item.status==='full'?'已满':'助力'}</button>
                                        <img style={this.state.active===index?rotateStyle:{}} className="expand-ico" src={right} alt=""/>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                    <tr ref="expand" style={this.state.active===-1?{display:'none'}:{}}>
                        <td colSpan="8">
                            <div className="betx-table-expand">
                                <div className="run-for">
                                    <div className="run-declaration">
                                        <h5 className="run-title">竞选宣言</h5>
                                        <textarea defaultValue="" className="betx-textarea"></textarea>
                                    </div>
                                    <div className="run-assistance">
                                        <h5 className="run-title">竞选助力</h5>
                                        <BetxInput callback={()=>console.log('助力回调')}></BetxInput>
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

export default Join;