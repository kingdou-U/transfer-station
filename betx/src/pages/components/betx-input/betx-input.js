import React from 'react';

import logoGrey from '../../../assets/imgs/logo-grey.png';
import './betx-input.css';

class Input extends React.Component {
    render() {
        return (
            <div className="betx-input-item">
                <img className="input-logo" src={logoGrey} alt=""/>
                <input type="text"/>
                <button>{this.props.btn}</button>
            </div>)
    }
}
Input.defaultProps={
    btn:'助力'
};

export default Input;