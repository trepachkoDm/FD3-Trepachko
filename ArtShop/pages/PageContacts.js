"use strict";
import React from 'react';

import './PageContacts.css';

class PageContacts extends React.PureComponent {

  state = {
    name: '',
    email: '',
    tel: '',
    comment: '',
    nameError: 'error',
    emailError: 'error',
    telError: 'error',
    commentError: 'error',

  }

  inputChanged = (e) => {

    if (e.target.value == '') {
      this.validFunc(e, true);
    } else {
      this.validFunc(e, false);
    }
  }

  validFunc = (e, error) => {
    switch (e.target.name) {
      case 'itemName':
        this.setState({ name: e.target.value, nameError: error });
        break;
      case 'itemEmail':
        this.setState({ email: e.target.value, emailError: error });
        break;
      case 'itemTel':
        this.setState({ tel: e.target.value, telError: error });
        break;
      case 'itemComment':
        this.setState({ comment: e.target.value, commentError: error });
        break;
    }
  }


  render() {

    return (
      <div className="wrapper_contact">
        <h1 className="page_title">Контакты:</h1>
        <div className="form_contact">

          <div className="content_contacts">
            <h3 className="page_subtitle"> Время работы магазина:</h3>
            <p className="text">понедельник - суббота: с 10.00 до 19.00 </p>
            <h3 className="page_subtitle"> Адрес магазина:</h3>
            <p className="text">г. Пинск, пр-т. Жолтовского, 23А</p>
            <h3 className="page_subtitle"> Телефон:</h3>
            <p className="text">+375 (25) 555-00-88</p>
            <p className="text">Прием заказов по телефону с 10.00 до 16.00</p>
            <h3 className="text">Заказы через сайт принимаются круглосуточно.</h3>
          </div>

          <div className="contacts_feedback">
            <h2 className="contacts_subtitle">Обратная связь</h2>
            <hr />
            <form className="contacts_feedback_form"  >
              <div className="feedback_form_container">

                <div className="feedback_name_wrapper">
                  <label htmlFor="feedback_name" className="contacts_title"> Имя *</label><br />
                  <input type="text" name="itemName" className="feedback_input" onChange={this.inputChanged} defaultValue={this.state.name} />
                  <span className='error' hidden={!this.state.nameError}> Введите Ваше имя</span>
                </div>

                <div className="feedback_email_wrapper">
                  <label htmlFor="feedback_email" className="contacts_title"> email *</label><br />
                  <input type="text" name="itemEmail" className="feedback_input" onChange={this.inputChanged} defaultValue={this.state.email} />
                  <span className='error' hidden={!this.state.emailError}> Укажите Ваш email</span>
                </div>

                <div className="feedback_tel_wrapper">
                  <label htmlFor="feedback_tel" className="contacts_title"> Телефон *</label><br />
                  <input type="number" name="itemTel" className="feedback_input" onChange={this.inputChanged} defaultValue={this.state.tel} />
                  <span className='error' hidden={!this.state.telError}> Укажите Ваш контактный номер телефона</span>
                </div>

                <div className="feedback_comm_wrapper">
                  <label htmlFor="feedback_text" className="contacts_title"> Комментарий *</label><br />
                  <input type="text" name="itemComment" className="feedback_input" onChange={this.inputChanged} defaultValue={this.state.comment} />
                  <span className='error' hidden={!this.state.commentError}> Изложите текст Вашего обращения</span>
                </div>
              </div> <br />

              <div className="feedback_submit_container">

                <input type="submit" value="ОТПРАВИТЬ" className="feedback_submit" onClick={this.inputChanged}
                  disabled={this.state.nameError||this.state.emailrror||this.state.telError||this.state.commentError ? true : ''} />

              </div>
              <br />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PageContacts;
