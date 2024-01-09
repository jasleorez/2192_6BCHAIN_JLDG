import React from 'react'
import ClassChildComponents from './classChildComponents';

class ClassParentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          message: 'Hello from Parent!',
        };
      }
    
      render() {
        return (
          <div>
            <ClassChildComponents message={this.state.message} />
          </div>
        );
      }
    }

export default ClassParentComponent