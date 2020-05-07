import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import PageAbout from './PageAbout';
import PageCatalog from '../components/Catalog/PageCatalog';
import PageBasket from '../components/Basket/PageBasket';
import PageContacts from './PageContacts';

class PagesRouter extends React.Component {

  render() {

    return (
      <div>
          <Route path="/" render={()=> <PageAbout />} exact />
          <Route path="/catalog" render={()=> <PageCatalog exact/>} />
          <Route path="/basket"  render={()=> <PageBasket exact/>} />
          <Route path="/contacts"  render={()=> <PageContacts exact/>} />
      </div>

    );

  }

}

export default PagesRouter;
