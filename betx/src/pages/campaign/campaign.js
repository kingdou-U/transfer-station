import React from 'react';

import "../../style/css/campaign.css";
import alarm from '../../assets/imgs/alarm.png';
import EOS from '../../assets/imgs/EOS.png';
import logoGrey from '../../assets/imgs/logo-grey.png';

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
                                <div>
                                    <div className="inner-icon">
                                        <img src={EOS} alt=""/>
                                        <span>EOS</span>
                                    </div>
                                    <span>0.1234</span>
                                </div>
                                <div>
                                    <div className="inner-icon">
                                        <img src={logoGrey} alt=""/>
                                        <span>BETX</span>
                                    </div>
                                    <span>0.6666</span>
                                </div>
                            </div>
                        </div>
                        <div className="data-block">
                            <h5 className="data-title">拍卖价格</h5>
                            <div className="price">
                                <img src={logoGrey} className="price_logo" alt=""/>
                                <span>1.0324</span>
                            </div>
                        </div>

                    </div>
                    <div className="income">
                        <h5>我的超级庄家收入</h5>
                        <div>
                            <div className="data-inner-block">
                                <div>
                                    <div className="inner-icon">
                                        <img src={EOS} alt=""/>
                                        <span>EOS</span>
                                    </div>
                                    <span>0.1234</span>
                                </div>
                                <div>
                                    <div className="inner-icon">
                                        <img src={logoGrey} alt=""/>
                                        <span>BETX</span>
                                    </div>
                                    <span>0.6666</span>
                                </div>
                            </div>
                            <button className="draw_btn">领取</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Campaign;