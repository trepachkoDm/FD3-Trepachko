﻿import React from 'react';
import PropTypes from 'prop-types';

import './Rainbow.css';

class RainbowFrame extends React.Component {
    static propTypes = {
        colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    };
    render () {
        let code =this.props.children;
        this.props.colors.forEach( color => {
            code = <div style={{border:"solid 3px "+color,padding:"5px"}}>{code}</div>
        } );
        return (
            code
        )
    }
}

export default RainbowFrame;