import React from 'react';
import Illustrate from './component/illustrate'

import "../../style/css/campaign.css";
import alarm from '../../assets/imgs/alarm.png';
import EOS from '../../assets/imgs/EOS.png';
import logoGrey from '../../assets/imgs/logo-grey.png';

import BetxTable from '../components/betx-table/betx-table'
import BetxPage from '../components/betx-page/betx-page'
import RunFor from './component/run-for';
import StartOwn from './component/start-own';
import Next from './component/next';
import Join from './component/join';

class Campaign extends React.Component {
    constructor() {
        super();
        this.state={
        }
    }
    componentDidMount() {

    }
    render() {

        return (
            <div className="campaign">
                {/*庄家数据*/}
                <h3 className="page-title">超级庄家</h3>
                <div className="banker section">
                    <div className="real_time_data">
                        <div className="data-block">
                            <h5 className="data-title">本轮庄家实时数据</h5>
                            <span>发起人：豌豆</span>
                        </div>
                        <div className="data-block">
                            <h5 className="data-title">本轮庄家实时数据</h5>
                            <div className="alarm">
                                <img src={alarm} className="alarm_logo" alt=""/>
                                <span>00,39,16</span>
                            </div>
                        </div>
                        <div className="data-block">
                            <h5 className="data-title">本轮累计收益</h5>
                            <div className="data-inner-block">
                                <div className="row">
                                    <div className="inner-icon">
                                        <img className="EOS" src={EOS} alt=""/>
                                        <span>EOS</span>
                                    </div>
                                    <span className="data-count">0.1234</span>
                                </div>
                                <div className="row">
                                    <div className="inner-icon">
                                        <img className="betx"  src={logoGrey} alt=""/>
                                        <span>BETX</span>
                                    </div>
                                    <span className="data-count">0.6666</span>
                                </div>
                            </div>
                        </div>
                        <div className="data-block">
                            <h5 className="data-title">拍卖价格</h5>
                            <div className="data-block-row">
                                <div className="inner-icon">
                                    <img src={logoGrey} className="betx" alt=""/>
                                    <span>BETX</span>
                                </div>
                                <span>1.0324</span>
                            </div>


                        </div>

                    </div>
                    <div className="income">
                        <h5>我的超级庄家收入</h5>
                        <div className="income_block">
                            <div className="data-inner-block">
                                <div className="row">
                                    <div className="inner-icon">
                                        <img className="EOS" src={EOS} alt=""/>
                                        <span>EOS</span>
                                    </div>
                                    <span className="data-count">0.1234</span>
                                </div>
                                <div className="row">
                                    <div className="inner-icon">
                                        <img className="betx" src={logoGrey} alt=""/>
                                        <span>BETX</span>
                                    </div>
                                    <span className="data-count">0.6666</span>
                                </div>
                            </div>
                            <button className="draw_btn">领<br/>取</button>
                        </div>
                    </div>
                </div>
                {/*庄家数据*/}
                {/*下轮*/}
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
                            <Next></Next>
                            <BetxPage></BetxPage>
                        </div>
                    </div>
                </div>
                {/*我参与*/}
                <div className="betx-block">
                    <div className="block-header">
                        <h4 className="block-title">我参与的超级庄家竞选</h4>
                    </div>
                    <div className="block-content">
                        <div className="block-bg-content">
                            <Join></Join>
                        </div>
                    </div>
                </div>
                {/*我发起*/}
                <div className="betx-block">
                    <div className="block-header">
                        <h4 className="block-title">我发起的竞选</h4>
                    </div>
                    <div className="block-content">
                        <div className="block-bg-content">
                            <StartOwn></StartOwn>
                        </div>
                    </div>
                </div>
                {/*发起竞选*/}
                <div className="betx-block">
                    <div className="block-header">
                        <h4 className="block-title">发起竞选</h4>
                    </div>
                    <div className="block-content">
                        <RunFor
                            title="竞选出价" btn="竞选" last={5000}
                        ></RunFor>
                    </div>
                </div>
                <Illustrate></Illustrate>
            </div>
        )
    }
}

export default Campaign;