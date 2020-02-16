import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Auxiliary';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Initializing...', props);
  }

  UNSAFE_componentWillMount() {
    console.log('[Person.js] Mounting component...');
  }

  componentDidMount() {
    console.log('[Person.js] Component Mounted');
    if(this.props.position === 0) {
      this.inputEl.focus();
    }
    
  }

  render() {
    console.log('[Person.js] Rendering...');
    return (
      <Aux>
        <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input 
            ref={(inp) => { this.inputEl = inp }}
            type='text' 
            onChange={this.props.change} 
            value={this.props.name}/>
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  change: PropTypes.func 
};


export default withClass(Person, 'Person');