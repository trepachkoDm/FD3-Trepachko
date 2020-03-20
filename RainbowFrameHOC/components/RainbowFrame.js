import React from 'react';

import Fragment from './Fragment';
import withRainbowFrame from './withRainbowFrame';


class RainbowFrame extends React.Component {
    render() {
        let colors=['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
        let FramedFragment=withRainbowFrame(colors)(Fragment);
        return (
            <FramedFragment>
                Hello!
            </FramedFragment>
        );
    }
}

export default RainbowFrame;