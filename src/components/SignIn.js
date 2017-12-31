import React from 'react';
import ReactDom from 'react-dom';

export default class SignIn extends React.Component {
    render(){
        return (
            <div>
                <h2>Login</h2>
                <form action="/auth" method="post">

                </form>
            </div>
        )
    }
}