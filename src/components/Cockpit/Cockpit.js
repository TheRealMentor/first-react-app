import React from 'react';
import './Cockpit.css';

const cockpit = (props) => {
  const assignedClasses = [];
  let btnClasses = '';

  if(props.showPersons) {
    btnClasses = 'red';
  }

  if( props.persons.length <= 2 ) {
    assignedClasses.push('red'); // classes = ['red']
  }

  if( props.persons.length <= 1 ) {
    assignedClasses.push('bold'); // classes = ['red', 'bold']
  }

  return (
    <div className='Cockpit'>
      <h1>Welcome to my page!</h1>
      <p className={assignedClasses.join(' ')}>This is really working!!!</p>
      <button
        className={btnClasses} 
        onClick={props.toggle}>Toggle Persons</button>
    </div>
  );
};

export default cockpit;