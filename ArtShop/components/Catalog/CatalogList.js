import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { activeStatus } from '../../redux/catalogAC'
import './CatalogList.css';

class CatalogList extends React.PureComponent {

    static propTypes = {
        info: PropTypes.shape({
            id: PropTypes.number.isRequired,
            type: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            model: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            status: PropTypes.bool.isRequired,
        }),
    };

    addProduct = () => {
        if (this.props.info.status) {
            this.switchStatus(this.props.info.id, false);
        } else {
            this.switchStatus(this.props.info.id, true);
        }
    };
    switchStatus = (id, status) => { this.props.dispatch(activeStatus(id, status)) };

    render() {
        
        return (

            <div className="wrapper_catalogList">
                <div className="catalogList">
                    
                    <div className="catalogList_img">
                        <div className={this.props.info.status ? "addActive" : "addBlock"}></div>
                        <img className="img" src={this.props.info.img} />  
                    </div>
                       
                    <div className="row_op">
                         <div className="catalogList_model">{this.props.info.model}</div>
                        <div className="price">{this.props.info.price}</div>
                        <div className="btn_price">
                            <input type="button" className="btn_price_add" value="ВЫБРАТЬ"
                                onClick={this.addProduct} />
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


export default connect(mapStateToProps)(CatalogList);

