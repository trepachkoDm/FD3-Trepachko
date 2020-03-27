import React from 'react';
import PropTypes from 'prop-types';

class IshopItem extends React.Component {

    static displayName =  "IshopItem"

    static propTypes = {
        code: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        cost: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        balance: PropTypes.string.isRequired,
        cbSelected: PropTypes.func.isRequired,
        cbEdited: PropTypes.func.isRequired,
        cbDeleted:  PropTypes.func.isRequired,
        isSelected: PropTypes.bool.isRequired,
        mode: PropTypes.number.isRequired,
        add: PropTypes.bool.isRequired
    }

    itemClicked = (e) => {
        this.props.cbSelected(this.props.code);
    }

    deleteItem = () => {
        this.props.cbDeleted(this.props.code)
    }

    editItem = (e) => {
            e.stopPropagation();
            this.props.cbEdited(this.props.code);
    }

    render() {
        return (
            <tr key={this.props.code} className='item'
                onClick={(this.props.blockChange || this.props.add) ? null : this.itemClicked}
                style={{background: this.props.isSelected && !(this.props.add) && this.props.mode!==0 ? 'red' : 'white'}}>
                <td className='product'>{this.props.name}</td>
                <td className='product'>{this.props.cost}</td>
                <td className='product'>{this.props.url}</td>
                <td className='product'>{this.props.balance}</td>
                <td className='product'>
                    <input type='button' defaultValue='Edit' onClick={this.editItem} disabled={this.props.blockChange || this.props.add}/>
                    <input type='button' defaultValue='Delete' onClick={this.deleteItem} disabled={this.props.blockChange || this.props.add || this.props.mode==2}/>
                </td>
            </tr>
        );
    }
};

export default IshopItem;