import React from 'react';
import PropTypes from 'prop-types';

import './Br2jsx.css';

class BR2JSX extends React.Component {

    static propTypes = {
        text: PropTypes.string.isRequired,
    };

    render() {
        let strArr = this.props.text.split(/(?:<br>|<br\/>|<br\s+\/>)+/);
        let res=[];
        for (let i=0;i<=strArr.length-1;i++) {
            if(i==strArr.length-1) {
                res.push(strArr[i]);
            } else {
                let elem=<br key={i}/>
                res.push(strArr[i], elem);
            }
        }
        return (
            <div className='br2jsx'>
                {res}
            </div>
        );
    }

}

export default BR2JSX;