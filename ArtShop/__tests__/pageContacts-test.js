import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import PageContacts from '../pages/PageContacts';

test('внешний вид PageContacts', () => {

    // создаём тестовую версию компонента
    const component = renderer.create(
      <Router>
          <PageContacts />
      </Router>
    );
  
    // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
          
  });