import React, { Component } from 'react';

//Create Context

const Context = React.createContext();

const reducer = (state, action) => {

    switch(action.type){
        case 'DELETE_CONTACT': 
            return { ...state, contacts: state.contacts.filter(contact => contact.id !== action.payload)}
        default :
            return state;
    }
}

export class Provider extends Component {
   state ={ 
        contacts: [
            { 
                id : 1,
                name: "John Doe",
                email: "me@example.com",
                phone: "555-555-555"
            },
            { 
                id : 2,
                name: "Prateek Madaan",
                email: "prince.cenation@gmail.com",
                phone: "222-222-222"
            },
            { 
                id : 3,
                name: "Somewhere",
                email: "some@where.com",
                phone: "232-232-232"
            }
        ],
        dispatch: action => this.setState(state => reducer(state,action))
    }
    render(){
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>

        )
    }
}

//Export consumer here
export const Consumer = Context.Consumer;
