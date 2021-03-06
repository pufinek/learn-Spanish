import React from 'react';
import { Link } from 'react-router';
import CompilePhrase from './CompilePhrase';
import OfferOtherWords from './OfferOtherWords';


const Testing = React.createClass({ 

    render() {
        let testId = Date.now();
      let phrase = "Quiero matarte en el parque 123";
    return (

      <div className="test">
          <h1>Testování</h1>
          {/*<Link to={{pathname:`/tests/${testId}`, phrase:phrase}}  >
              Seskládání fráze
          </Link>*/}
            <CompilePhrase {...this.props} phrase={phrase} />     
            <hr />
            <hr />
            <OfferOtherWords {...this.props} showKey="-KfpavMOqCy7JPldA9ZU"/>   
         
          
      </div>
    )
}
});

export default Testing;
