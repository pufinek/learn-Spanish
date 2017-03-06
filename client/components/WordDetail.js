import React from 'react';
import Word from './Word';
import ReactPlayer from 'react-player';

const WordDetail = React.createClass({

  render() {
    const i = this.props.dictionary.findIndex((word)=> word.id == this.props.params.wordId);
    const word=this.props.dictionary[i];

    const optionType = Object
					.keys(this.props.settings.types)
					.map((type) => {
						return <option value={this.props.settings.types[type].typeId} key={this.props.settings.types[type].typeId}>{this.props.settings.types[type].name}</option>
					});

const moreInfoUrl = "http://www.spanishdict.com/conjugate/"+word.meaningES;
console.log(moreInfoUrl);         

    return (
      <div  key={i} i={i} className="word-detail">
        <Word key={i} i={i} word={this.props.dictionary[i]} {...this.props} />
        <div className="box">
            <div className="word-control">
            <a target="_blank" title="spanish dictionary" href={moreInfoUrl}><span className="lnr lnr-question-circle"></span></a>
            </div>
            <div className="row">
                <label >Lesson:</label>
                <input type="number" min="1" name="lesson" ref={(input) => this.lesson = (input)} value={word.lesson} />
            </div>

            <div className="row">
                <label>Theme:</label>
                <input type="text" name="theme" ref={(input) => this.theme = (input)} value={word.theme} />
            </div>

            <div className="row">
                <label>Type: </label>
                <select name="type" placeholder="Type" value={word.type} >
				    {optionType}
                </select>
            </div>

            <div className="row">
                <label>Genus: </label>
                <select name="type" placeholder="Genus" value={word.genus} >
                    <option value="">--</option>
				    <option value="m">M</option>
                    <option value="f">F</option>
                </select>                
            </div>

            <div className="row">
                
            </div>
            
        
        
            
        </div>
        
      </div>
    );
  }
});

export default WordDetail;