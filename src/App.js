import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

//Main app component
class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Raju', age: 21 },
      { id: 2, name: 'Mitansh', age: 19 },
      { id: 3, name: 'Jay', age: 12 }
    ],
    showPersons: false 
  };

  // Method to toggle the person card in UI
  togglePersonsHandler = () => {
    // Get the showPersons variable from state
    const doesShow = this.state.showPersons;
    // Toggle by setting opposite of doesShow in the setState
    this.setState({showPersons: !doesShow})
  };

  // Method to change the name of the person using the input from the user
  nameChangedHandler = (event, id) => {
    // Get the id of the person in the array using the unique key passed 
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // Copy the person from the persons array. Do NOT get the reference.
    const person = {
      ...this.state.persons[personIndex]
    };

    // Change the name to the user input
    person.name = event.target.value;

    // Copy the whole persons array, so as to maintain immutability
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // Update the persons using setState method
    this.setState({ persons: persons });
  };

  // Method to delete the person card on click
  deletePersonHandler = (personIndex) => {
    // First, copy all of the persons array
    const persons = [...this.state.persons];
    // Then, delete the person using the personIndex 
    persons.splice(personIndex, 1);
    // Update the state using setState method
    this.setState({persons: persons});
  };

  // This render the virtual DOM and finally react updates/re-render the actual DOM
  render() {
    // Style for button
    const style = {
      backgroundColor: '#27ae60',
      color: 'white',
      font: 'inherit',
      border: '1px solid #27ae60',
      padding: '16px',
      cursor: 'pointer'
    };

    let persons = null;

    if( this.state.showPersons ) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
            return <Person 
                    click={this.deletePersonHandler.bind(this, index)}
                    name={person.name} 
                    age={person.age}
                    key={person.id}
                    change={(event) => this.nameChangedHandler(event, person.id)} />
          }) }
        </div>
      );

      style.backgroundColor = 'red';
      style.border = '1px solid red';

    }
    
    // Adding classes dynamically
    const classes = [];

    if( this.state.persons.length <= 2 ) {
      classes.push('red'); // classes = ['red']
    }

    if( this.state.persons.length <= 1 ) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    // This is the main part. All of the code which is written is returned from here!!!
    return (
      <div className="App">
        <h1>Welcome to my page!</h1>
        <p className={classes.join(' ')}>This is really working!!!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        
        { persons }

      </div>
    );
  }
}

export default App;