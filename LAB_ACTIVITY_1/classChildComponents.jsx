import React from 'react';

class ClassChildComponents extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

export default ClassChildComponents;