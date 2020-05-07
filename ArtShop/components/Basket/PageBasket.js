import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import isoFetch from 'isomorphic-fetch';
import BasketList from './BasketList';
import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from "../../redux/catalogAC";
import './PageBasket.css';

class PageBasket extends React.PureComponent {

    state = {
        summProducts: 0,
        name: null,
        patronimic: null,
        surname: null,
        adress: null,
        tel: null,
        email: null,
        comment: null,
        successOrder: false
    };

    componentDidMount = () => {
        if (localStorage.startPriceList !== undefined) {
            this.props.dispatch({ type: FETCH_DATA_SUCCESS, priceList: JSON.parse(localStorage.startPriceList) });
        }
        this.closeWindow();
    };

    closeWindow = () => {

    };

    PushNewItemData = () => {
        let sp1 = new URLSearchParams();
        this.updatePassword = Math.random();
        sp1.append('f', 'LOCKGET');
        sp1.append('n', 'TREPACHKO_ORDER_PRODUCT');
        sp1.append('p', this.updatePassword);
        isoFetch("http://fe.it-academy.by/AjaxStringStorage2.php", {
            method: 'POST',
            headers: {
                "Accept": "application/json",
            },
            body: sp1,
        })
            .then((response) => { // response - HTTP-ответ
                if (!response.ok) {
                    let Err = new Error("fetch error " + response.status);
                    Err.userMessage = "Ошибка связи";
                    throw Err; // дальше по цепочке пойдёт отвергнутый промис
                }
                else
                    return response.json(); // дальше по цепочке пойдёт промис с пришедшими по сети данными
            })
            .then((data) => {
                try {
                    this.fetchSuccess(data, this.updatePassword); // передаём полезные данные в fetchSuccess, дальше по цепочке пойдёт успешный пустой промис
                }
                catch (error) {
                    this.fetchError(error.message); // если что-то пошло не так - дальше по цепочке пойдёт отвергнутый промис
                }
            })
            .catch((error) => {
                this.fetchError(error.userMessage || error.message);
            });
    };
    fetchSuccess = (callresult, updatePassword) => {
        if (callresult.error !== undefined) {
        }
        else {
            let message = {
                name: this.state.nameValue,
                product: this.state.productValue,
                order: this.props.startPriceList
            };
            let sp2 = new URLSearchParams();
            sp2.append('f', 'UPDATE');
            sp2.append('n', 'TREPACHKO_ORDER_PRODUCT');
            sp2.append('v', JSON.stringify(message));
            sp2.append('p', updatePassword);
            isoFetch("http://fe.it-academy.by/AjaxStringStorage2.php", {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                },
                body: sp2,
            })
                .then((response) => { // response - HTTP-ответ
                    if (!response.ok) {
                        let Err = new Error("fetch error " + response.status);
                        Err.userMessage = "Ошибка связи";
                        throw Err; // дальше по цепочке пойдёт отвергнутый промис
                    }
                    else
                        this.successOrder(); // дальше по цепочке пойдёт промис с пришедшими по сети данными
                })
        }
    };
    fetchError = (errorMessage) => {
        console.error(showStr);
    };

    successOrder = () => {
        $(window).on("click", () => {
            location.reload()
        });
        localStorage.clear();
        this.setState({ successOrder: true });
    };

    orderName = (e) => {
        this.setState({ name: e.target.value });
    };

    orderPatronimic = (e) => {
        this.setState({ patronimic: e.target.value });
    };

    orderSurname = (e) => {
        this.setState({ surname: e.target.value });
    };

    orderAdress = (e) => {
        this.setState({ adress: e.target.value });
    };

    orderTel = (e) => {
        this.setState({ tel: e.target.value });
    };

    orderEmail = (e) => {
        this.setState({ email: e.target.value });
    };

    orderComments = (e) => {
        this.setState({ comment: e.target.value });
    };

    summProducts = () => {
        let summProducts = this.props.startPriceList.reduce((curr, prev) => {
            return curr + (prev.cnt * parseInt(prev.price));
        }, 0);
        this.setState({ summProducts: summProducts });
    };


    render() {

        let basketList = this.props.startPriceList.map(item =>
            <BasketList key={item.id}
                info={item} />
        );

        return (
            (this.props.startPriceList.length) ?

                <div className="wrapper_basket">
                    <div className="basket_order">
                        <h2 className="basketPage_header">Ваш выбор</h2>
                        <div className="row_add">
                            <NavLink to="/catalog" className="btn_basket_add">ДОБАВИТЬ</NavLink>
                        </div>
                    </div>
                    <div>
                        <div className="wrapper_basketList">
                            {basketList}
                        </div>

                        <div className="modal fade bd-example-modal-sm" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="false">
                            <div className="order_wrapper">
                                {
                                    this.state.successOrder ?
                                        <div className="success_order">
                                            <h2 className="success_order_text">Ваш заказ принят!</h2>
                                            <div className="order_ok">
                                                <input type="button" className="btn_order_ok" defaultValue="- ok -" />
                                            </div>
                                        </div>
                                        :

                                        <div className="order_form_wrapper">
                                            <div className="order_titlle"><h2 id="order_titlle">Оформление заказа:</h2></div>
                                            <div className="order_form">
                                                <div>
                                                    <label htmlFor="order_name" className="order_name">Ваше имя *</label><br />
                                                    <input type="text" className="input_form"
                                                        onChange={this.orderName} />
                                                </div>

                                                <div>
                                                    <label htmlFor="order_adress" className="order_adress">Адрес проживания *</label><br />
                                                    <input type="text" className="input_form"
                                                        onChange={this.orderAdress} />
                                                </div>

                                                <div>
                                                    <label htmlFor="order_comment" className="order_comment-title">Комментарий к заказу</label><br />
                                                    <textarea name="order-order_comment" id="order_comment-text" className="input_form"></textarea>
                                                </div>
                                                <div>
                                                    <label htmlFor="order_patronimic" className="order_patronimic">Ваше Отчество *</label><br />
                                                    <input type="text" className="input_form"
                                                        onChange={this.orderPatronimic} />
                                                </div>

                                                <div>
                                                    <label htmlFor="order_tel" className="order_tel">Ваш телефон для связи *</label><br />
                                                    <input type="number" className="input_form"
                                                        onChange={this.orderTel} />
                                                </div>
                                                <div className="row_buy">
                                                    <button type="button" className="btn_basket_buy" data-toggle="modal" data-target=".bd-example-modal-sm"
                                                        onClick={this.summProducts}>РАССЧИТАТЬ ОБЩУЮ СТОИМОСТЬ</button>
                                                    <div className="form_price">Общая сумма: {this.state.summProducts}$</div>
                                                </div>

                                                <div>
                                                    <label htmlFor="order_surname" className="order_surname">Ваша Фамилия *</label><br />
                                                    <input type="text" className="input_form"
                                                        onChange={this.orderSurname} />
                                                </div>

                                                <div>
                                                    <label htmlFor="order_email" className="order_email">Ваш email </label><br />
                                                    <input type="text" className="input_form"
                                                        onChange={this.orderEmail} />
                                                </div>

                                                <div className="col-12">
                                                    <input type="button" className="btn_basket_buy_activity" value="ЗАКАЗАТЬ"
                                                        onClick={this.PushNewItemData}
                                                        disabled={!this.state.name
                                                            || !this.state.patronimic
                                                            || !this.state.surname
                                                            || !this.state.adress
                                                            || !this.state.tel
                                                            || !this.state.email
                                                            ? true : null} />
                                                </div>
                                            </div>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="emty_basket">
                    <div className="btn_basket">
                        <h3 className="basket_empty">У Вас нет выбранных заказов. Добатьте пожалуйста товар для оформления заказа.</h3>
                        <NavLink to="/catalog" className="btn_addProduct">ДОБАВИТЬ</NavLink>
                    </div>
                </div>
        );
    }
}

const mapStateToProps = function (state) {
    return {
        startPriceList: state.catalogList.startPriceList.filter((item) => {
            return item.status === true;
        }),
    };
};


export default connect(mapStateToProps)(PageBasket);

