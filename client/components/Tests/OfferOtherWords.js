import React from 'react';

class OfferOtherWords extends React.Component{

    render(){

        let word = this.props.dictionary[this.props.showKey];
        return(
            <div>
            <h3>Zvol správnou variantu</h3>
            {word.meaningCZ}
            </div>
        )
    }

}

export default OfferOtherWords;