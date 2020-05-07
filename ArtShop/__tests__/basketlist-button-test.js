import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import combinedReducer from '../redux/reducers'
import { createStore } from 'redux';
import BasketList from '../components/Basket/BasketList';


const store = createStore(combinedReducer);


test('работа кнопки Каталога корзина', () => {

  // создаём тестовую версию компонента
  const component = renderer.create(
    <Provider store={store}>
      <Router>
        <BasketList />
      </Router>
    </Provider>
  );

  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // найдём в вёрстке компонента саму кнопку "Выбрать" ***********************
  const buttonElemDell = component.root.find(el => el.value == 'delete');
  // и "нажмём" на неё
  buttonElemDell.props.onClick();

  // получаем уже изменённый снэпшот
  componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // "нажмём" кнопку ещё раз
  buttonElemDell.props.onClick();

  // и получаем окончательный снэпшот
  componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();
});
