import React from 'react';
import WeightsList from '../containers/weigths-list';
import WeightDetail from '../containers/weight-details';

export default class App extends React.Component {
    
    render() {
        console.log("Iniciando o App...");
        return (
            <div>
                <h2>Pesos</h2>
                <WeightsList />
                <hr/>
                <h3>Detalhes</h3>
                <WeightDetail />
            </div>
        )
    }
}