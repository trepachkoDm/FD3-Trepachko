import React from 'react';
import PropTypes from 'prop-types';
import { voteEvents } from './events';
import './ClientInfo.css';

class ClientInfo extends React.PureComponent {

    static propTypes = {
        id: PropTypes.number.isRequired,
        clientInfoMode: PropTypes.number.isRequired,  //1 - add product, 2 - edit product
        actualClient: PropTypes.object,
    };

    state = {
        clientInfoMode: this.props.clientInfoMode,
        actualClient: this.props.actualClient
    };

    componentWillReceiveProps = (newProps) => {
        this.setState({
            clientInfoMode: newProps.clientInfoMode,
            actualClient: newProps.actualClient
        });
    };

    newNameRef = null;
    newSurnameRef = null;
    newPatronimicRef = null;
    newBalanceRef = null;

    setNewNameRef = (ref) => {
        this.newNameRef = ref;
    };
    setNewSurnameRef = (ref) => {
        this.newSurnameRef = ref;
    };
    setNewPatronimicRef = (ref) => {
        this.newPatronimicRef = ref;
    };
    setNewBalanceRef = (ref) => {
        this.newBalanceRef = ref;
    };

    save = () => {
        let newClient = {
            ...this.state.actualClient,
            id: this.props.id,
            clientSurname: this.newSurnameRef.value,
            clientName: this.newNameRef.value,
            clientPatronimic: this.newPatronimicRef.value,
            balance: parseInt(this.newBalanceRef.value),
        };

        voteEvents.emit('SaveData', newClient);
    }

    cancel = () => {
        voteEvents.emit('CancelData');
    }

    render() {

        console.log("ClientInfo id=" + this.props.id + " render");

        if (this.props.clientInfoMode == 0)
            return null;

        return (
            <div className='ClientInfo' key={this.props.id}>
                <h1> {this.props.clientInfoMode == 2 ? "Изменить данные клиента:" : "Добавить клиента:"} </h1>
                <label>
                    <span>ID: {this.props.id} </span>
                </label>
                <br />
                <label>
                    <span>Фамилия: </span>
                    {this.props.clientInfoMode == 1 && <input id='family' type='text' ref={this.setNewSurnameRef} />}
                    {this.props.clientInfoMode == 2 && <input type='text' defaultValue={this.state.actualClient.clientSurname} ref={this.setNewSurnameRef} />}
                </label>
                <br />
                <label>
                    <span>Имя: </span>
                    {this.props.clientInfoMode == 1 && <input id='name' type='text' ref={this.setNewNameRef} />}
                    {this.props.clientInfoMode == 2 && <input type='text' defaultValue={this.state.actualClient.clientName} ref={this.setNewNameRef} />}
                </label>
                <br />
                <label>
                    <span>Отчевство: </span>
                    {this.props.clientInfoMode == 1 && <input id='otch' type='text' ref={this.setNewPatronimicRef} />}
                    {this.props.clientInfoMode == 2 && <input type='text' defaultValue={this.state.actualClient.clientPatronimic} ref={this.setNewPatronimicRef} />}
                </label>
                <br />
                <label>
                    <span>Баланс: </span>
                    {this.props.clientInfoMode == 1 && <input id='balance' type='text' ref={this.setNewBalanceRef} />}
                    {this.props.clientInfoMode == 2 && <input type='text' defaultValue={this.state.actualClient.balance} ref={this.setNewBalanceRef} />}

                </label>
                <br />
                {this.props.clientInfoMode == 1 && <input id='addNewClient' type='button' value="Add" onClick={this.save} />}
                {this.props.clientInfoMode == 2 && <input type='button' value="Save" onClick={this.save} />}
                <input type='button' value="Cancel" onClick={this.cancel} />
            </div>
        )
    }
}

export default ClientInfo;
