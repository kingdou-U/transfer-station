import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect,NavLink} from 'react-router-dom';

import Campaign from './campaign/campaign'
import logo from '../assets/imgs/logo.png';
import './App.css';
import './antd-custom.css';

class App extends Component {
    render() {
        return (
            <Router >
                <div className="App">
                    <header className="App-header">
                        <div className="header-nav">
                            <img className="logo" src={logo} alt=""/>
                            <ul className="nav-lists">
                                <li className="nav-item">
                                    <NavLink to="/index" >
                                        <span>首页</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/game" >
                                        <span>游戏</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/campaign" >
                                        <span>竞选庄家</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/qa" >
                                        <span>常见问题</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/paper" >
                                        <span>白皮书</span>
                                    </NavLink>
                                </li>

                            </ul>
                        </div>
                        <div className="header-control">
                            <a className="login" href="/">登录</a>
                            <div className="i18n">
                                <span>English</span>
                                <span className="current">中文</span>
                            </div>
                        </div>
                    </header>
                    <div className="App-view">
                        <Switch>
                            <Route path="/camppaign" component={Campaign}></Route>
                            <Redirect from="/" to="camppaign" />
                        </Switch>
                    </div>
                </div>
            </Router>

        );
    }
}

export default App;
