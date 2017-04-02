import React from 'react';
import Word from './Word';
import Filtr from './Filtr';


import AddNewWord from './AddNewWord';


const Dictionary= React.createClass({

  render() {
    return (

      <div className="dictionary-grid">
        <AddNewWord settings={this.props.settings} actions={this.props.actions}/>

        <div className="filtr" style={{display:'block', width:'100%'}}>Filtr: <Filtr /></div>
        {
         
            //this.props.dictionary.map((word,i) => <Word {...this.props} key={i} i={i} word={word} />)
            Object.keys(this.props.dictionary)
                    .map((key => <Word key={key} index={key} actions={this.props.actions} word={this.props.dictionary[key]} />))
        }

      </div>
    )

}
});

export default Dictionary;