import React, {Component} from 'react';
import User from './User';

class Users extends Component {
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <User>John</User>
                <User age="30"></User>
                <User age="40">Jingleheimerschmit</User>
            </div>
        )
    }
}

export default Users;