import React from 'react';

// page-component
import Illustrate from './component/illustrate'
import Banker from './component/banker'
import Next from './component/next'
import Joined from './component/Joined'
import Stater from './component/start-own'
import RunFor from './component/run-for';

import "./campaign.css";

class Campaign extends React.Component {
    render() {

        return (
            <div className="campaign">
                {/*庄家数据*/}
                <h3 className="page-title">超级庄家</h3>
                <Banker />
                {/*下轮*/}
                <Next />
                {/*我参与*/}
                <Joined />
                {/*我发起*/}
                <Stater />
                {/*发起竞选*/}
                <RunFor />
                <Illustrate></Illustrate>
            </div>
        )
    }
}

export default Campaign;