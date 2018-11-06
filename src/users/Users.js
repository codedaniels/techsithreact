import React, {Component} from 'react';
import User from './User';

class Users extends Component {
    state = {
        users: [
            {name:"John", age:20},
            {name:"Jacob", age:30},
            {name:"Jingleheimerschmit", age:40},
        ],
        title:"Users List"
    }

    render(){
        return (
            <div>
                <button>Make Us 10 Years Younger</button>
                <br/>
                <h1>{this.state.title}</h1>
                <User age={this.state.users[0].age}>{this.state.users[0].name}</User>
                <User age="30">Jacob</User>
                <User age="40">Jingleheimerschmit</User>
            </div>
        )
    }
}

export default Users;