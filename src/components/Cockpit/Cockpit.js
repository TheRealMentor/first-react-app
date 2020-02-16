import React from 'react';
import './Cockpit.css';
import Aux from '../../hoc/Auxiliary';

const cockpit = (props) => {
  const assignedClasses = [];
  let btnClasses = 'btn';

  if(props.showPersons) {
    btnClasses = ['btn', 'red'].join(' ');
  }

  if( props.persons.length <= 2 ) {
    assignedClasses.push('red'); // classes = ['red']
  }

  if( props.persons.length <= 1 ) {
    assignedClasses.push('bold'); // classes = ['red', 'bold']
  }

  return (
    <Aux>
      <h1>Welcome {props.appTitle}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!!!</p>
      <button
        className={btnClasses} 
        onClick={props.toggle}>Toggle Persons</button>
    </Aux>
  );
};

export default cockpit;