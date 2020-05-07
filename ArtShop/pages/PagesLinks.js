import React from 'react';
import { NavLink } from 'react-router-dom';

import './PagesLinks.css';

class PagesLinks extends React.Component {
          
  render() {

    return (
      <div className="wrapper_nav">
        <NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink">Главная</NavLink>
        <NavLink to="/catalog" exact className="PageLink" activeClassName="ActivePageLink">Каталог</NavLink>
        <NavLink to="/contacts" exact className="PageLink" activeClassName="ActivePageLink">Контакты</NavLink>
        <NavLink to="/basket" exact className="PageLink" activeClassName="ActivePageLink">Мои заказы</NavLink>
      </div>
    );
    
  }

}
    
export default PagesLinks;
    