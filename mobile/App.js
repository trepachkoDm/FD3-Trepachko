"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';

let companyName = 'Velcom';
let clientsArr = [
  { id: 1, clientSurname: "Иванов", clientName: "Иван", clientPatronimic: "Иванович", balance: 200 },
  { id: 2, clientSurname: "Сидоров", clientName: "Сидор", clientPatronimic: "Сидорович", balance: 250 },
  { id: 3, clientSurname: "Петров", clientName: "Пётр", clientPatronimic: "Петрович", balance: 180 },
  { id: 4, clientSurname: "Григорьев", clientName: "Григорий", clientPatronimic: "Григорьевич", balance: -220 },
];

ReactDOM.render(
  <MobileCompany
    name={companyName}
    clients={clientsArr}
  />
  , document.getElementById('container')
);

