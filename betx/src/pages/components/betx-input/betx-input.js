import React from 'react';

import logoGrey from '../../../assets/imgs/logo-grey.png';
import './betx-input.css';

class Test extends React.Component {
    render() {
        return (
            <div className="betx-input-item">
                <img className="input-logo" src={logoGrey} alt=""/>
                <input type="text"/>
                <button>助力</button>
            </div>)
    }
}

export default Test;