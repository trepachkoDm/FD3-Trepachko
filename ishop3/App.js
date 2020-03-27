"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import MainBlock from './components/MainBlock';
import itemsArr from './items.json';


var shopName = 'ROBOT';

ReactDOM.render(
    <MainBlock name={shopName} items={itemsArr}/>,
    document.getElementById('container')
);

