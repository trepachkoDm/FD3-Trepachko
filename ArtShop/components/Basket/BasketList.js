import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { activeStatus, cntChange, cntStart } from '../../redux/catalogAC'
import './BasketList.css';

class BasketList extends React.PureComponent {

    static propTypes = {
        info: PropTypes.shape({
            id: PropTypes.number.isRequired,
            type: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            model: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            status: PropTypes.bool.isRequired,
            cnt: PropTypes.number.isRequired,
        }),
    };

    cntPlus = () => {
        this.props.dispatch(cntChange(this.props.info.id, +1));
    };

    cntMinus = () => {
        if (this.props.info.cnt >= 2) {
            this.props.dispatch(cntChange(this.props.info.id, -1));
        }
    };

    deleteItemFromBasket = () => {
        let changeStatusStartList = JSON.parse(localStorage.startPriceList);
        changeStatusStartList[this.props.info.id - 1].status = false;
        localStorage['startPriceList'] = JSON.stringify(changeStatusStartList);
        this.props.dispatch(activeStatus(this.props.info.id, false));
        this.props.dispatch(cntStart(this.props.info.id, 1));
    };


    render() {

        return (
            <div className="basketList_wrapper">

                <div className="basketList_row">
                    <div className="basket_first">
                        <div className="basketList_img">
                            <img className="basketList_img" src={this.props.info.img} />
                        </div>
                        <div className="basketList_model">{this.props.info.model}</div>
                        <div className="basketList_description">{this.props.info.description}</div>
                    </div>

                    <div className="basket_two">
                        <div className="basketList_count_wrap">
                            <div className="basketList_price">{parseInt(this.props.info.price) * this.props.info.cnt}$</div>
                            <div className="basketList_count">
                                <div className="count_min">
                                    <span className="basketList_count_minus" onClick={this.cntMinus}>-</span>
                                </div>
                                <input type="text" className="basketList_count_inp" value={this.props.info.cnt} disabled={true} />
                                <div className="count_plus">
                                    <span className="basketList_count_plus" onClick={this.cntPlus}>+</span>
                                </div>
                            </div>
                            <div className="basketList_del">
                                <input type="button" className="btn_del" value="delete"
                                    onClick={this.deleteItemFromBasket} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = function (state) {
    return {};
};


export default connect(mapStateToProps)(BasketList);