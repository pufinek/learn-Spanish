import React from 'react';
import CompositionEvent from './CompilePhrase';


const Testing = React.createClass({ 
    render() {
      let userAnswer=[];
    return (

      <div className="test">
          <h1>Testování</h1>
          <CompositionEvent {...this.props} userAnswer={userAnswer} />
      </div>
    )
}
});

export default Testing;
