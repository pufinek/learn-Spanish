import React from 'react';
import Word from './Word';

const WordDetail = React.createClass({

  render() {
    const i = this.props.dictionary.findIndex((word)=> word.id == this.props.params.wordId);
    const word=this.props.dictionary[i];

    const optionType = Object
					.keys(this.props.settings.types)
					.map((type) => {
						return <option value={this.props.settings.types[type].typeId} key={this.props.settings.types[type].typeId}>{this.props.settings.types[type].name}</option>
					});

                

    return (
      <div  key={i} i={i} className="word-detail">
        <Word key={i} i={i} word={this.props.dictionary[i]} {...this.props} />
        <div className="box">
            <label>Lesson:
                <input type="text" name="lesson" ref={(input) => this.lesson = (input)} value={word.lesson} />
            </label>

            <label>Theme:
                <input type="text" name="theme" ref={(input) => this.theme = (input)} value={word.theme} />
            </label>
            <label>Type: 
                <select name="type" placeholder="Type" value={word.type} >
				    {optionType}
                </select>
            </label>

            <label>Genus: 
                <select name="type" placeholder="Genus" value={word.genus} >
				    <option value="m">M</option>
                    <option value="f">F</option>
                </select>
            </label>

            
        </div>
        
      </div>
    );
  }
});

export default WordDetail;