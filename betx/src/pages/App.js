import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect,NavLink} from 'react-router-dom';

import logo from '../assets/imgs/logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <div className="header-nav">
                        <img src={logo} alt=""/>
                        <ul className="nav-lists">
                            <li className="nav-item">
                                <NavLink to="/" >
                                    <span>首页</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/" >
                                    <span>游戏</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/" >
                                    <span>竞选庄家</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/" >
                                    <span>常见问题</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/" >
                                    <span>白皮书</span>
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                    <div className="header-control">
                        <a href="/">登录</a>
                        <div className="i18n">
                            <span>English</span>
                            <span className="current">中文</span>
                        </div>
                    </div>
                </header>
                <div className="App-view">
                    <Switch>
                        <Route path="/"></Route>
                    </Switch>
                </div>
            </div>
        </Router>

    );
  }
}

export default App;
