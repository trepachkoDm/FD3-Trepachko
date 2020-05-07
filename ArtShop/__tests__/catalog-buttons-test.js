import React from 'react';
import renderer from 'react-test-renderer';
import PageCatalog from '../components/Catalog/PageCatalog';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import combinedReducer from '../redux/reducers'
import { createStore } from 'redux';

const store = createStore(combinedReducer);


test('работа кнопок Каталога', () => {

  // создаём тестовую версию компонента
  const component = renderer.create(
    <Provider store={store}>
      <Router>
        <PageCatalog />
      </Router>
    </Provider>
  );

  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // найдём в вёрстке компонента саму кнопку SHOW ALL ***********************
  const buttonElemShowAll = component.root.find(el => el.props.value === "SHOW ALL");

  // и "нажмём" на неё
  buttonElemShowAll.props.onChange();

  // получаем уже изменённый снэпшот
  componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // "нажмём" кнопку ещё раз
  buttonElemShowAll.props.onChange();

  // и получаем окончательный снэпшот
  componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // найдём в вёрстке компонента саму кнопку POPART ***********************
  const buttonElemPopart = component.root.find(el => el.props.value === "POPART");

  // и "нажмём" на неё
  buttonElemPopart.props.onChange();

  // получаем уже изменённый снэпшот
  componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // "нажмём" кнопку ещё раз
  buttonElemPopart.props.onChange();

  // и получаем окончательный снэпшот
  componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // найдём в вёрстке компонента саму кнопку ABSTRACTION ***********************
  const buttonElemAbstraction = component.root.find(el => el.props.value === "ABSTRACTION");

  // и "нажмём" на неё
  buttonElemAbstraction.props.onChange();

  // получаем уже изменённый снэпшот
  componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // "нажмём" кнопку ещё раз
  buttonElemAbstraction.props.onChange();

  // и получаем окончательный снэпшот
  componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // найдём в вёрстке компонента саму кнопку IMPRESSIONISM ***********************
  const buttonElemImpressionism = component.root.find(el => el.props.value === "IMPRESSIONISM");

  // и "нажмём" на неё
  buttonElemImpressionism.props.onChange();

  // получаем уже изменённый снэпшот
  componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // "нажмём" кнопку ещё раз
  buttonElemImpressionism.props.onChange();

  // и получаем окончательный снэпшот
  componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // найдём в вёрстке компонента саму кнопку CLASSICISM ***********************
  const buttonElemClassicism = component.root.find(el => el.props.value === "CLASSICISM");

  // и "нажмём" на неё
  buttonElemClassicism.props.onChange();

  // получаем уже изменённый снэпшот
  componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // "нажмём" кнопку ещё раз
  buttonElemClassicism.props.onChange();

  // и получаем окончательный снэпшот
  componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // найдём в вёрстке компонента саму кнопку CUBISM ***********************
  const buttonElemCubism = component.root.find(el => el.props.value === "CUBISM");

  // и "нажмём" на неё
  buttonElemCubism.props.onChange();

  // получаем уже изменённый снэпшот
  componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // "нажмём" кнопку ещё раз
  buttonElemCubism.props.onChange();

  // и получаем окончательный снэпшот
  componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // найдём в вёрстке компонента саму кнопку MODERNISM ***********************
  const buttonModernism = component.root.find(el => el.props.value === "MODERNISM");

  // и "нажмём" на неё
  buttonModernism.props.onChange();

  // получаем уже изменённый снэпшот
  componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // "нажмём" кнопку ещё раз
  buttonModernism.props.onChange();

  // и получаем окончательный снэпшот
  componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();

});
