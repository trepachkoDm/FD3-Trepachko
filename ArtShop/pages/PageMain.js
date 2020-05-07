import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import combinedReducer from '../redux/reducers'
import PagesLinks from '../pages/PagesLinks'
import PagesRouter from './PagesRouter';
import PageFooter from '../components/Footer/PageFooter';

let store = createStore(combinedReducer);

class PageMain extends React.PureComponent {

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <PagesLinks />
                        <PagesRouter />
                        <PageFooter />
                    </div>
                </BrowserRouter>
            </Provider>

        );
    }
}

export default PageMain;