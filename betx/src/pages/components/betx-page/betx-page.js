import React from 'react';

import './betx-page.css';

class Test extends React.Component {
    render() {
        return (
            <div className="pagination">
                <div className="page-num">1/1</div>
                <div className="page-nav">
                    <button className="page-btn page-btn-prev"></button>
                    <button className="page-btn page-btn-next"></button>
                </div>
            </div>)
    }
}

export default Test;