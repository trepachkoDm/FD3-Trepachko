import React from 'react';

function withRainbowFrame(colors) {
    return function(Component) {
        return props => {
            let code = <Component {...props} />;
            colors.forEach(color => {
                code = <div style={{border: "solid 3px " + color, padding: "5px"}}>{code}</div>
            });
            return code;
        }
    };
}

export default withRainbowFrame;