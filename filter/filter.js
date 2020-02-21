var FilterComponent = React.createClass({

    displayName: 'FilterComponent',

    propTypes: {
        strings: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    },


    getInitialState: function () {
        return {
            stringArr: this.props.strings,
            filtered: false,
            text: "",
            checked: false,
        };
    },


    checkBoxClicked: function (EO) {
        console.log('checkBox: checkbox изменен - ' + EO.target.value);
        this.setState({ checked: EO.target.checked }, this.writingChar);
    },


    textChanged: function (EO) {
        console.log('text: текст свободного ответа изменён - ' + EO.target.value);
        this.setState({ filtered: true, text: EO.target.value }, this.writingChar);
    },


    delAll: function () {
        this.setState({ stringArr: this.props.strings, filtered: false, text: "", checked: false });
    },


    writingChar: function () {
        let word = this.props.strings;
        if (this.state.filtered) {
            word = word.filter(v => v.includes(this.state.text));
            console.log(word);
        }
        if (this.state.checked) {
            word.sort()
        }
        this.setState({ stringArr: word });
    },


    render: function () {
        var stringOfArr = this.state.stringArr.map((v, index) =>
            React.DOM.option({ key: index }, v));

        return React.DOM.div({ className: 'FilterComponent' },
            React.DOM.input({ type: 'checkbox', checked: this.state.checked, onClick: this.checkBoxClicked }),
            React.DOM.input({ type: 'text', className: 'textInput', onChange: this.textChanged, value: this.state.text }),
            React.DOM.input({ type: 'button', value: 'Сброс', onClick: this.delAll }),
            React.DOM.div({ className: 'selectBlock' },
                React.DOM.select({ name: 'select', size: '6', className: 'select' }, stringOfArr)
            )
        );

    },
});