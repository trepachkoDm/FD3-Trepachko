var IshopItem = React.createClass({

    displayName: "IshopItem",

    propTypes: {
        name: React.PropTypes.string.isRequired,
        cost: React.PropTypes.string.isRequired,
        url: React.PropTypes.string.isRequired,
        code: React.PropTypes.string.isRequired,
        balance: React.PropTypes.string.isRequired,
        cbSelected: React.PropTypes.func.isRequired,
        cbDeleted:  React.PropTypes.func.isRequired,
        isSelected: React.PropTypes.bool.isRequired
    },

    itemClicked: function () {
        this.props.cbSelected(this.props.code);
    },

    deleteItem: function() {
        this.props.cbDeleted(this.props.code)
    },

    render: function () {

        return React.DOM.tr({key: this.props.code, className: 'item',
                onClick: this.itemClicked, style: {background: this.props.isSelected ? 'red' : 'white'}},
            React.DOM.td({className: 'product'}, this.props.name),
            React.DOM.td({className: 'product'}, this.props.cost),
            React.DOM.td({className: 'product'}, this.props.url),
            React.DOM.td({className: 'product'}, this.props.balance),
            React.DOM.td({className: 'product'},
                React.DOM.input({type:'button',value:'Delete', onClick: this.deleteItem})
            ),
        );

    },
}) ;
