import React from 'react';

import '../campaign.css'

class Illustrate extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return (
            <div className="illustrate">
                <h4>节制性博彩声明</h4>
                <div className="illustrate_block">
                    <div className="illu_item">
                        <p>什么是超级庄家？</p>
                        <p>
                            受科斯定理的启发，我们决定将平台收益权赋予市场，由市场竞选出最优平台运营决策者，从而达到平台效益的最大化，实现真正得共赢市场。此机制将超级庄家用户的收益与自身运营宣传有机挂钩。通过市场自筛选超级庄家用户可为平台带来更高可信度，增强品牌属性，以及获得潜在客户。让用户能为自己经营的平台出谋划策并获得巨额收益。
                            如果您是QQ微信群的群主，企业家，自媒体人，行业达人那么竞选超级庄家并将平台介绍给你们的粉丝，平台将会给您带来巨额财富。
                        </p>
                    </div>
                    <div  className="illu_item">
                        <p>超级庄家收益说明</p>
                        <p>平台每12小时会依据竞价排名产生1位超级庄家用户，该用户将获得平台12小时10%的巨额收益权。（考虑到平台启动阶段应流通代币少，权益使用时长设定暂定为3小时）
                        </p>
                    </div>
                    <div className="illu_item">
                        <p>超级庄家竞选逻辑</p>
                        <p>BETX平台超级庄家竞选逻辑为竞选时间为0时，竞选价格最高者获得平台超级庄家权益。</p>
                    </div>
                    <div className="illu_item">
                        <p>超级庄家收益发放</p>
                        <p>超级庄家收益将在用户行驶完本轮超级庄家权益后，立即结算收益并发放至用户账户。</p>

                    </div>
                    <div className="illu_item">
                        <p> 超级庄家扣费逻辑</p>
                        <p>用户当选超级庄家后系统将扣除当选用户的质押代币（代币将回流至矿池），其余参与竞选但未竞选成功的用户，平台将立即释放其所质押的代币。</p>
                    </div>

                </div>
            </div>)
    }
}

export default Illustrate;