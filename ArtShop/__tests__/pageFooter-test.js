import React from 'react';
import renderer from 'react-test-renderer';

import PageFooter from '../components/Footer/PageFooter'

test('внешний вид PageFooter', () => {

// создаём тестовую версию компонента
  const component = renderer.create(
    <PageFooter />
  );

  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
    
});
