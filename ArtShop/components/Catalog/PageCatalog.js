import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import isoFetch from 'isomorphic-fetch';
import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, filterPopart, filterAbstraction, filterImpressionism, filterClassicism, filterCubism, filterModernism, filterAll, filterSearch } from '../../redux/catalogAC';
import CatalogList from './CatalogList';
import './PageCatalog.css';

class PageCatalog extends React.PureComponent {

    static propTypes = {
        isLoaded: PropTypes.bool.isRequired,
        checkedRadio: PropTypes.number.isRequired,
        foundNull: PropTypes.bool.isRequired,
        priceList: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                type: PropTypes.string.isRequired,
                img: PropTypes.string.isRequired,
                model: PropTypes.string.isRequired,
                price: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                status: PropTypes.bool.isRequired,
            })
        ),
        startPriceList: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                type: PropTypes.string.isRequired,
                img: PropTypes.string.isRequired,
                model: PropTypes.string.isRequired,
                price: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                status: PropTypes.bool.isRequired,
            })
        ),
    };

    state = {
        searchValue: null,
    };

    componentDidMount = () => {
        if (localStorage.startPriceList === undefined) {
            this.loadData();
        } else {
            this.props.dispatch({ type: FETCH_DATA_SUCCESS, priceList: JSON.parse(localStorage.startPriceList) });
        }
        this.scrollTop();
        
    };

    componentWillUnmount = () => { };

    componentDidUpdate = () => {
        localStorage['startPriceList'] = JSON.stringify(this.props.startPriceList);
    };

    scrollTop = () => {
        window.scrollTo(0, 0);
    };

    loadData = () => {
        let sp1 = new URLSearchParams();
        sp1.append('f', 'READ');
        sp1.append('n', 'TREPACHKO_PRICE_LIST');
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
                    this.fetchSuccess(JSON.parse(data.result)); // передаём полезные данные в fetchSuccess, дальше по цепочке пойдёт успешный пустой промис
                }
                catch (error) {
                    this.fetchError(error.message); // если что-то пошло не так - дальше по цепочке пойдёт отвергнутый промис
                }
            })
            .catch((error) => {
                this.fetchError(error.userMessage || error.message);
            })
            ;

    };
    fetchSuccess = (loadedData) => {
        this.props.dispatch({ type: FETCH_DATA_SUCCESS, priceList: loadedData.priceList });
    };
    fetchError = (errorMessage) => {
        this.props.dispatch({ type: FETCH_DATA_FAILURE });
    };

    setSearchValue = (e) => {
        this.setState({ searchValue: e.target.value });
    };
    searchFilterPriceList = () => {
        this.props.dispatch(filterSearch(this.state.searchValue))
    };
    searchKeyPressEnter = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            this.props.dispatch(filterSearch(this.state.searchValue))
        }
    };


    showPopart = () => { this.props.dispatch(filterPopart('PopArt')) };
    showAbstraction = () => { this.props.dispatch(filterAbstraction('Abstraction')) };
    showImpressionism = () => { this.props.dispatch(filterImpressionism('Impressionism')) };
    showClassicism = () => { this.props.dispatch(filterClassicism('Classicism')) };
    showCubism = () => { this.props.dispatch(filterCubism('Cubism')) };
    showModernism = () => { this.props.dispatch(filterModernism('Modernism')) };
    showAll = () => { this.props.dispatch(filterAll()) };

    render() {

        let catalogList;
        this.props.foundNull
            ? catalogList = <h1 className="error">...нет выбранных продуктов</h1>
            : catalogList = this.props.priceList.map(item =>
                <CatalogList key={item.id}
                    info={item} />
            );

        return (

            <div className="wrapper_catalog">
                <div className="catalog_header">
                    <div>
                        <h2 className="headr_name">Каталог</h2>
                    </div>
                    <div className="header_form">
                        <input type="text" className="form_search" placeholder="search"
                            onChange={this.setSearchValue}
                            onKeyPress={this.searchKeyPressEnter} />

                        <input type="button" className="btn_go" value="GO"
                            onClick={this.searchFilterPriceList} />
                    </div>
                </div>

                <div className="product">
                    <div className="filter">
                        <label className="radio" htmlFor="SHOW_ALL_RADIO">
                            <input id="SHOW_ALL_RADIO" name="SHOW_ALL_RADIO" type="radio" value="SHOW ALL" onChange={this.showAll}
                                checked={(this.props.checkedRadio === 0) ? true : false} />
                            Все
                        </label><br /> <hr />
                        <label className="radio" htmlFor="POPART_RADIO">
                            <input id="POPART_RADIO" name="POPART_RADIO" type="radio" value="POPART" onChange={this.showPopart}
                                checked={(this.props.checkedRadio === 1) ? true : false} />
                            Поп-Арт
                        </label><br /><hr />
                        <label className="radio" htmlFor="ABSTRACTION_RADIO">
                            <input id="ABSTRACTION_RADIO" name="ABSTRACTION_RADIO" type="radio" value="ABSTRACTION" onChange={this.showAbstraction}
                                checked={(this.props.checkedRadio === 2) ? true : false} />
                            Абстракционизм
                        </label><br /><hr />
                        <label className="radio" htmlFor="IMPRESSIONISM_RADIO">
                            <input id="IMPRESSIONISM_RADIO" name="IMPRESSIONISM_RADIO" type="radio" value="IMPRESSIONISM" onChange={this.showImpressionism}
                                checked={(this.props.checkedRadio === 3) ? true : false} />
                            Импрессионизм
                        </label><br /><hr />
                        <label className="radio" htmlFor="CLASSICISM_RADIO">
                            <input id="CLASSICISM_RADIO" name="CLASSICISM_RADIO" type="radio" value="CLASSICISM" onChange={this.showClassicism}
                                checked={(this.props.checkedRadio === 4) ? true : false} />
                            Классицизм
                        </label><br /><hr />
                        <label className="radio" htmlFor="CUBISM_RADIO">
                            <input id="CUBISM_RADIO" name="CUBISM_RADIO" type="radio" value="CUBISM" onChange={this.showCubism}
                                checked={(this.props.checkedRadio === 5) ? true : false} />
                            Кубизм
                        </label><br /><hr />
                        <label className="radio" htmlFor="MODERNISM_RADIO">
                            <input id="MODERNISM_RADIO" name="MODERNISM_RADIO" type="radio" value="MODERNISM" onChange={this.showModernism}
                                checked={(this.props.checkedRadio === 6) ? true : false} />
                            Модернизм
                        </label><br /><hr />

                        <div className="btn_filter">
                            <NavLink to="/basket" className="btn_buy">КУПИТЬ</NavLink>
                        </div>
                    </div>

                    <div className="catalog_list">
                        {
                            (this.props.isLoaded) ?
                                <div className="row_catalog_list">
                                    {catalogList}
                                </div>
                                :
                                <div className="col-12">
                                    <h1 className="CatalogPage-Text-Loading">...Loading
                                                    <div className="loader-container">
                                            <div className="loader-1"></div>
                                        </div>
                                    </h1>
                                </div>
                        }
                    </div>
                </div>
            </div >
        );
    }
}

const mapStateToProps = function (state) {
    return {
        isLoaded: state.catalogList.isLoaded,
        priceList: state.catalogList.priceList,
        checkedRadio: state.catalogList.checkedRadio,
        foundNull: state.catalogList.foundNull,
        startPriceList: state.catalogList.startPriceList,
    };
};


export default connect(mapStateToProps)(PageCatalog);
