import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectWeight } from '../actions/index';

class WeigthsList extends React.Component {
    createListItems(){
        return (
            this.props.weights.map((item, index) => {
                return (
                    <li 
                        key={ index }
                        onClick={ () => this.props.selectWeight(item) }
                    >{ item.value } kilos</li>
                );
            })
        );
    }

    render() {
        console.log("Iniciando o container de listagem...");
        return (
            <ul>
                { this.createListItems() }
            </ul>
        );
    }
}

function mapStateToProps(state){
    console.log("Mapeando state to props da listagem");
    return {
        weights: state.weights
    }
}

function matchDispatchToProps(dispatch){
    console.log("conectando o dispatcher da listagem");
    return bindActionCreators({
        selectWeight: selectWeight
    },
    dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(WeigthsList);
