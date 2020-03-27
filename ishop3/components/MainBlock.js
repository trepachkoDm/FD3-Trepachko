﻿import React from 'react';
import PropTypes from 'prop-types';

import './MainBlock.css';

import IshopItem from './IshopItem'
import IshopInfo from './IshopInfo'
import CardEdit from './CardEdit'



class MainBlock extends React.Component {

    static displayName = "MainBlock"

    static propTypes = {
        name: PropTypes.string.isRequired,
        items: PropTypes.array.isRequired

    };

    static defaultProps () {
        return {name: "не задано"}
    }

    state =  {
        selectedItemCode: '',
        items: this.props.items,
        blockChange: false,
        mode: 0, // 0-begin, 1-view, 2-edit
        key: '0',
        add: false
    }

    itemSelected = (code) => {
        this.setState({selectedItemCode: code, mode: 1})
    }

    itemEdited = (code) => {
        this.setState({selectedItemCode: code, mode: 2, key: ++this.state.key})
    }

    setDeleteCode = (code) => {
        this.setState({selectedItemCode: code}, this.deleteElement)
    }

    deleteElement = () => {
        let answer = confirm('Delete?');
        if (answer) {
            var filterArr = this.state.items.filter(item =>
                item.code !== this.state.selectedItemCode
            );
            this.setState({items: filterArr, mode: 0, selectedItemCode: ''});
        }
    }

    onChange = () => {
        this.setState({blockChange: true});
    }

    newProduct = () => {
        let key = ++this.state.key;
        let newKey = String(key);
        this.setState({mode: 2, key: newKey, add: true});
    }

    changeItems = (newItem) => {
        let items;
        if(this.state.add) {
            let item = {...newItem, code: this.state.key};
            items=this.state.items.slice();
            items.push(item);
        }else {
            items = this.state.items.map(v => v.code==newItem.code ? newItem : v);
        }
        this.setState({items: items, blockChange: false, mode: 0, add: false});
    }

    canceled = () => {
        this.setState({mode: 0, blockChange: false, add: false});
    }
    
    render() {

        let itemsCode = this.state.items.map(v =>
            <IshopItem key={v.code} code={v.code} blockChange={this.state.blockChange} add={this.state.add}
                name={v.name} cost={v.cost} url={v.url} balance={v.balance} mode={this.state.mode}
                cbSelected={this.itemSelected} cbDeleted={this.setDeleteCode}
                cbEdited={this.itemEdited}  isSelected={v.code == this.state.selectedItemCode}
            />
        );

        let item = this.state.items.find(v => v.code == this.state.selectedItemCode);
        let   addItem = {code: this.state.key,
                    name: '',
                    cost: '',
                    url:'',
                    balance:''};

        return (
            <div className='Ishop'>
                <div className='ShopName'>{this.props.name}</div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th className='product'>Name</th>
                            <th className='product'>Price</th>
                            <th className='product'>URL</th>
                            <th className='product'>Quantity</th>
                            <th className='product'>Control</th>
                        </tr>
                    </thead>
                    <tbody className='body'>{itemsCode}</tbody>
                </table>
                <input type='button' defaultValue='New Product' onClick={this.newProduct} hidden={this.state.add==true||this.state.mode==2}/>
                {this.state.selectedItemCode && <IshopInfo item={item} mode={this.state.mode}/>}
                {(this.state.selectedItemCode||this.state.add) &&
                <CardEdit key={this.state.key} item = {this.state.add?addItem:item}
                             mode={this.state.mode} add={this.state.add} cbChanged={this.changeItems}
                             cbCanceled={this.canceled} cbOnChange={this.onChange}
                />}
            </div>
        );
    }
};

export default MainBlock;