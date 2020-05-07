import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter} from 'react-router-dom';

import CatalogList from '../components/Catalog/CatalogList';



test('работа кнопки Каталога листа', () => {

  // создаём тестовую версию компонента
  const component = renderer.create(

    
      <BrowserRouter>
        <CatalogList />
      </BrowserRouter>
    
  );

  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // найдём в вёрстке компонента саму кнопку "Выбрать" ***********************
  const buttonElem = component.root.find(el => el.type == 'input');
  // и "нажмём" на неё
  buttonElem.props.onClick();

  // получаем уже изменённый снэпшот
  componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // "нажмём" кнопку ещё раз
  buttonElem.props.onClick();

  // и получаем окончательный снэпшот
  componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();
});
