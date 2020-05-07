import React from 'react';
import renderer from 'react-test-renderer';

import PageAbout from '../pages/PageAbout'

test('внешний вид PageAbout', () => {
// создаём тестовую версию компонента
  const component = renderer.create(
    <PageAbout />
  );

  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
    
});
