var MyIshop = React.createClass ({

    displayName: 'MyIshop',

    getDefaultProps: function () {

        return {name: "нет"}
    },

    render: function () {

         var itemsCode = [];

        this.props.items.forEach(function (item) {
            var itemCode =
                React.DOM.div({key: item.code, className: 'Item'},
                    React.DOM.img({src: item.url, alt:'imageItem', className: 'itemImg'}),
                    React.DOM.div({className: 'itemInfo'},
                        React.DOM.span({className: 'itemName'}, item.name),
                        React.DOM.span({className: 'itemCost'}, 'Цена: ' + item.cost + ' р.'),
                        React.DOM.span({className: 'itemBalance'}, 'В наличии ' + item.balance + ' шт.')
                    ),
                );
            itemsCode.push(itemCode);
        });


        return React.DOM.div ( {className: 'MyIshop'},
            React.DOM.div ( {className: 'ShopName'}, this.props.name),
            React.DOM.div ( {className: 'Items'}, itemsCode ),
        );
},



});