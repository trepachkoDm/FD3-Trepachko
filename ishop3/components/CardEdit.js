import React from 'react';
import PropTypes from 'prop-types';

import './CardEdit.css'

class CardEdit extends React.Component {

    static displayName =  "CardEdit"

    static propTypes = {
        item: PropTypes.object.isRequired,
        mode: PropTypes.number.isRequired,
        add: PropTypes.bool.isRequired,
        cbChanged: PropTypes.func.isRequired,
        cbCanceled: PropTypes.func.isRequired,
        cbOnChange: PropTypes.func.isRequired
    }

    state = {
        name: this.props.item.name,
        cost: this.props.item.cost,
        url: this.props.item.url,
        quantity: this.props.item.balance,
        nameError: this.props.add,
        costError: this.props.add,
        urlError: this.props.add,
        quantityError: this.props.add
    }

    inputChanged = (e) => {
        this.props.cbOnChange();
        if(e.target.value=='') {
            this.validFunc(e, true);
        } else {
            this.validFunc(e, false);
        }
    }

    validFunc = (e, error) => {
        switch (e.target.name) {
            case 'itemName':
                this.setState({name: e.target.value, nameError: error});
                break;
            case 'itemCost':
                this.setState({cost: e.target.value, costError: error});
                break;
            case 'itemURL':
                this.setState({url: e.target.value, urlError: error});
                break;
            case 'itemQuantity':
                this.setState({quantity: e.target.value, quantityError: error});
                break;
        }
    }

    changeItems = (e) => {
        if (e.target.value=='Save') {
            this.props.cbChanged({
                ...this.props.item,
                name: this.state.name,
                cost: this.state.cost,
                url: this.state.url,
                balance: this.state.quantity
            });
        } else {
            this.props.cbChanged({
                ...this.props.item,
                code: this.props.item.code,
                name: this.state.name,
                cost: this.state.cost,
                url: this.state.url,
                balance: this.state.quantity
            });
        }
    }

    render() {

        return (
            <div className='cardEdit' hidden={this.props.mode!==2}>

                <h3>{this.props.add?"Add new product":"Edit Existing Product"}</h3>

                <span>ID: {this.props.item.code}</span>
                <label className='inputArea'>
                    <span className="fieldName">Name</span>
                    <input type="text" name="itemName" onChange={this.inputChanged} defaultValue={this.state.name}/>
                    <span className='error' hidden={!this.state.nameError}>Пожалуйста заполните корректно поле.</span>
                </label>
                <label className='inputArea'>
                    <span className="fieldName">Cost</span>
                    <input type="text" name="itemCost" onChange={this.inputChanged} defaultValue={this.state.cost}/>
                    <span className='error' hidden={!this.state.costError}>Пожалуйста заполните корректно поле.</span>
                </label>
                <label className='inputArea'>
                    <span className="fieldName">URL</span>
                    <input type="text" name="itemURL" onChange={this.inputChanged} defaultValue={this.state.url}/>
                    <span className='error' hidden={!this.state.urlError}>Пожалуйста заполните корректно поле.</span>
                </label>
                <label className='inputArea'>
                    <span className="fieldName">Quantity</span>
                    <input type="text" name="itemQuantity" onChange={this.inputChanged} defaultValue={this.state.quantity}/>
                    <span className='error' hidden={!this.state.quantityError}>Пожалуйста заполните корректно поле.</span>
                </label>
                <input type="button" value={this.props.add?"Add":"Save"} onClick={this.changeItems}
                       disabled={(this.state.nameError || this.state.costError || this.state.urlError || this.state.quantityError)}/>
                <input type="button" value="Cancel" onClick={this.props.cbCanceled}/>
            </div>
        )
    }
}

export default CardEdit;
