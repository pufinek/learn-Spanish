import React from 'react';
import * as slovicka from '../SlovickaJSON';
import {convertStringToArray} from '../helpers/dictionary';


class AddNewWord extends React.Component{


addWord(e){
    e.preventDefault();
    const newWord = {
        meaningCZ: convertStringToArray(this.cz.value),
        meaningEN: this.en.value,
        meaningES: this.es.value,
        type: this.type.value,
        lesson: this.lesson.value,
        theme: this.theme.value,
        genus: this.genus.value,
        id: Date.now()
    }

    console.log(newWord);
     this.props.actions.addNewWord(newWord);

}



loadJSON(e){
    e.preventDefault();
    let arrayJSON=[];
    console.log(slovicka);
    Object
        .keys(slovicka)
        .map((word) => function(){
            console.log(word);
            let newWordTransformed = {
                meaningCZ: convertStringToArray(word.cz),
                meaningEN: word.en,
                meaningES: word.es,
                //type: this.type.value,

                //lesson: this.lesson.value,
                theme: word.theme,
                genus: word.genus,
                id: Date.now()
            }
            if(word.lesson==""|| word.lesson == undefined){
                newWord.lesson = 0
            }
            if(word.type==""|| word.type == undefined){
                newWord.type= "?"
            }
            arrayJSON.push(newWordTransformed);

            //console.log(newWordTransformed);
            //this.props.actions.addNewWord(newWordTransformed);
        })


    

}

render(){

    const optionType = Object
					.keys(this.props.settings.types)
					.map((type) => {
						return <option value={this.props.settings.types[type].typeId} key={this.props.settings.types[type].typeId}>{this.props.settings.types[type].name}</option>
					});
                
    return (

        <div className="add-new-word">

            <form ref={(input) => this.addForm = (input)} className="add-form" onSubmit={(e) => this.addWord(e)}>
                <div className="row">
                    <label htmlFor="es">Španělsky (ES):</label>
                    <input type="text" required ref={(input) => this.es = input} id="es"  defaultValue="" />
                </div>
                <div className="row">
                    <label htmlFor="cz">Česky (CZ):</label>
                    <input type="text" required ref={(input) => this.cz = input} id="cz" placeholder="Jednotlivé významy oddělte STŘEDNÍKEM"  defaultValue="" />
                </div>
                <div className="row">
                    <label htmlFor="en">Anglicky (EN):</label>
                    <input type="text" ref={(input) => this.en = input} id="en"  defaultValue=""/>
                </div>
                <br /><br />
                <div className="row">
                    <label htmlFor="theme">Téma:</label>
                    <input type="text" ref={(input) => this.theme = input} id="theme"  defaultValue=""/>
                </div>
                <div className="row">
                    <label title="lekce">Lekce</label>
                    <input type="number" min="1" placeholder="?" defaultValue="1"  required ref={(input) => this.lesson = input} style={{width: '150px'}}/>
                </div>

                <div className="row">
                    <label title="rod">Typ</label>
                    <select name="type" ref={(input) => this.type = input}  placeholder="Type" required defaultValue={this.props.settings.types[1]} style={{width: '150px'}} >
                        {optionType}
                    </select> 
                </div>
                    
                <div className="row">
                    <label title="rod">Rod</label>
                    <select name="genus" ref={(input) => this.genus = input}  placeholder="Genus" defaultValue="" style={{width: '150px'}}  >
                        <option value="">--</option>
				        <option value="el">el</option>
                        <option value="la">la</option>
                    </select> 
                </div>

                <button type="submit" className="btn btn-success" style={{position: 'absolute', right:'35px', bottom:'35px'}}>Přidat</button>
            </form>
            <div style={{margin: '20px 0'}}><button type="submit" onClick={() => this.loadWords()}>Nahrát slovíčka ze souboru</button></div>

        </div>



    )
}
}



export default AddNewWord;