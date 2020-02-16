import React, { Component } from 'react';

// const withClass = (WrappedComponent, classes) => {
//   return (props) => (
//     <div className={classes}>
//       <WrappedComponent {...props}/>
//     </div>
//   )
// };

const withClass = (WrappedComponent, classes) => {
  return class extends Component {
    render() {
      return (
        <div className={classes}>
          <WrappedComponent {...this.props}/>
        </div>
      )
    } 
  }
};


export default withClass;