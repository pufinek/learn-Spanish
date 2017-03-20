import React from 'react';
import Word from './Word';
import ReactPlayer from 'react-player';
import {convertArrayToString, convertStringToArray} from '../helpers/dictionary';

const WordDetail = React.createClass({

handleChange(e, key){
    e.preventDefault();
    console.clear();
    console.log("WORD-DETAIL / handleChange")
    console.log("došlo k uprave slova");
    const actualWord = this.props.dictionary[key];
    console.log("upravene slovo: ", actualWord);

    /*let updatedWord = (     
        (e.target.name === 'meaningCZ' | e.target.name === 'theme') ?
            {
                ...actualWord,
                [e.target.name]:convertStringToArray(e.target.value)
            } :
            {
                ...actualWord,
                [e.target.name]:e.target.value
            } //pokud checkbox
    )*/
    let processValue = (element) =>  
        {
            switch (element.name) {
                case 'favorite':
                    return element.checked;
                case 'meaningCZ':
                case 'theme':
                    return convertStringToArray(element.value);
                default:
                    return element.value;
            }
        };
      let updatedWord = {
                ...actualWord,
                [e.target.name]:processValue(e.target)
        }; 

   


    console.log("změna na: ", updatedWord);
    console.log("key: ", key);
    this.props.actions.updateWordFirebase(key, updatedWord);
},

  render() {
      const index = this.props.params.wordKey;
    //const i = this.props.dictionary.findIndex((word)=> word.id == this.props.params.wordId);
    const word=this.props.dictionary[index];

    const optionType = Object
					.keys(this.props.settings.types)
					.map((type) => {
						return <option value={this.props.settings.types[type].typeId} key={this.props.settings.types[type].typeId}>{this.props.settings.types[type].name}</option>
					});

const moreInfoUrl = "http://www.spanishdict.com/conjugate/"+word.meaningES;
      

    return (
      /*<form  key={i} i={i} className="word-detail" onChange={(e) => this.props.actions.updateValue(i,e.target.name, e.target.type === 'checkbox' ? e.target.checked : e.target.value )}>*/
<form  key={index} className="word-detail" onChange={(e) => this.handleChange(e, index)}>
        <div className="box">
            <div className="word-control">
            <a target="_blank" title="spanish dictionary" href={moreInfoUrl}><span className="lnr lnr-question-circle"></span></a>
            </div>
            <div className="row">
                <label >ES:</label>
                <input type="text" name="meaningES" ref={(input) => this.meaningES = (input)} defaultValue={word.meaningES}/>
            </div>
            <div className="row">
                <label >CZ:</label>
                <input type="text" name="meaningCZ" placeholder="oddělit významy ; " ref={(input) => this.meaningCZ = (input)} defaultValue={convertArrayToString(word.meaningCZ)}/>
            </div>
            <div className="row">
                <label >EN:</label>
                <input type="text" name="meaningEN" ref={(input) => this.meaningEN = (input)} defaultValue={word.meaningEN}/>
            </div>
        </div>
        <div className="box">
            <div className="row">
                <label >userFavorite:</label>
                 <input type="checkbox" name="favorite" ref={(input) => this.favorite = input}  checked={word.favorite}/>
            </div>

            <div className="row">
                <label>Theme:</label>
                <input type="text" name="theme" ref={(input) => this.theme = (input)} defaultValue={convertArrayToString(word.theme)} />
            </div>

            <div className="row">
                <label>Type: </label>
                <select name="type" placeholder="Type" defaultValue={word.type} >
				    {optionType}
                </select>
            </div>

            <div className="row">
                <label>Genus: </label>
                <select name="genus" placeholder="Genus" defaultValue={word.genus} >
                    <option value="">--</option>
				    <option value="el">el</option>
                    <option value="la">la</option>
                </select>                
            </div>

            <div className="row">
               
            </div>
              
            
        </div>
        
      </form>
    );
  }
});

export default WordDetail;