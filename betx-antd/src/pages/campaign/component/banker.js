import React from 'react';
import {Row,Col} from 'antd';

import alarm from "../../../assets/imgs/alarm.png";
import EOS from "../../../assets/imgs/EOS.png";
import logoGrey from "../../../assets/imgs/logo-grey.png";

class Banker extends React.Component {
    render() {
        return (
                <Row gutter={20} className="banker">
                    <Col className="gutter-row" span={14}>
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
                    </Col>
                    <Col className=" gutter-row" span={10}>
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

                    </Col>
                </Row>
            )
    }
}

export default Banker;