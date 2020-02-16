import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[Persons.js] Initializing...', props);
    }

    UNSAFE_componentWillMount() {
        console.log('[Persons.js] Mounting component...');
    }

    componentDidMount() {
        console.log('[Persons.js] Component Mounted');
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] Receiving new props...', nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[UPDATE Persons.js]', nextProps, nextState);
    //     return  nextProps.persons !== this.props.persons || 
    //             nextProps.change !== this.props.change ||
    //             nextProps.click !== this.props.click;
    // }

    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] Updating...', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('[UPDATE Persons.js] Updated');
    }

    render() {
        console.log('[Persons.js] Rendering...');
        return this.props.persons.map((person, index) => {
            return  <Person 
                      click={() => this.props.clicked(index)}
                      name={person.name}
                      position={index}
                      age={person.age}
                      key={person.id}
                      change={(event) => this.props.changed(event, person.id)} />
        });
    }
}

export default Persons;