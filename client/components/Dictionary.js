import React from 'react';
import Word from './Word';
import Photo from './Photo';

const Dictionary= React.createClass({
  render() {
    return (
      <div className="dictionary-grid">
        {
            //this.props.dictionary.map((word,i) => <Word {...this.props} key={i} i={i} word={word} />)
            Object.keys(this.props.dictionary)
                    .map((key => <Word key={key} i={key} word={this.props.dictionary[key]} />))
        }
      </div>
    )

}
})

export default Dictionary;