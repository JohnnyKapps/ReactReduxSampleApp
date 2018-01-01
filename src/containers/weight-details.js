import React from 'react';
import { connect } from 'react-redux';

class WeightDetails extends React.Component {
    render() {
        console.log("Iniciando o Container de detalhes...", this.props.weight);
        if (!this.props.weight){
            console.log("eh nulo")
            return (
                <div>
                    Selecione um peso...
                </div>
            );
        }
        console.log("nao eh nulo")
        return (
            <div key={ this.props.weight.id }>
                <h3>Peso: { this.props.weight.value }</h3>
            </div>
            );
        }
        

}

function mapStateToProps(state){
    console.log("Mapeando o state para o props nos detalhes");
    return {
        weight: state.activeWeight
    }
}

export default connect(mapStateToProps)(WeightDetails);