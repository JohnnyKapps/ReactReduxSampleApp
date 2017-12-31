import React from 'react';
import { connect } from 'react-redux';

class WeightDetails extends React.Component {
    render() {
        console.log("Iniciando o Container de detalhes...");
        if (!this.props.user){
            return (
                <div>
                    Selecione um peso...
                </div>
            );
        }
        else{
            return (
                <div>
                    <p>Peso: {this.props.weight.value}</p>
                    <p>Em: { this.props.weight.date_of_measure }</p>
                </div>
            );
        }
        
    }
}

function mapStateToProps(state){
    console.log("Mapeando o state para o props nos detalhes");
    return {
        weight: state.activeWeight
    }
}

export default connect(mapStateToProps)(WeightDetails);