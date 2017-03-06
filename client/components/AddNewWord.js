import React from 'react';


import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/dictionary';


class AddNewWord extends React.Component{

addWord(e){
    e.preventDefault();
    console.log("ADD");
    const newWord = {
        meaningCZ: this.cz.value,
        meaningEN: this.en.value,
        meaningES: this.es.value,
        //type: this.type.value,
        lesson: this.lesson.value,
        theme: this.theme.value,
        //genus: this.genus.value,
        id: 123963
    }
    console.log(newWord);
    //Actions.addNewWord(newWord);
    Actions.addNewWord(newWord);
    console.log("done");
}

render(){
        console.log(Actions);
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
                    <input type="text" required ref={(input) => this.cz = input} id="cz"  defaultValue="" />
                </div>
                <div className="row">
                    <label htmlFor="en">Anglicky (EN):</label>
                    <input type="text" ref={(input) => this.en = input} id="en"  defaultValue=""/>
                </div>
                <br /><br />
                <div className="row">
                    <label htmlFor="theme">Theme:</label>
                    <input type="text" ref={(input) => this.theme = input} id="theme"  defaultValue=""/>
                </div>
                <div className="row">
                    <label title="lekce">Lesson</label>
                    <input type="number" min="1" placeholder="?" defaultValue="1"  required ref={(input) => this.lesson = input} style={{width: '150px'}}/>
                </div>

                <div className="row">
                    <label title="rod">Type</label>
                    <select name="type" placeholder="Type" required defaultValue={this.props.settings.types[1]} style={{width: '150px'}} >
                        {optionType}
                    </select> 
                </div>
                    
                <div className="row">
                    <label title="rod">Genus</label>
                    <select name="genus" placeholder="Genus" defaultValue="" style={{width: '150px'}}  >
                        <option value="">--</option>
				        <option value="m">M</option>
                        <option value="f">F</option>
                    </select> 
                </div>

                <button type="submit" className="btn btn-success" style={{position: 'absolute', right:'35px', bottom:'35px', padding:'0 15px', backgroundColor:'lightgray', textTransform:'uppercase'}}>Přidat</button>
            </form>

        </div>



    )
}
}
/**
 * Map the state to props for his children
 */
const mapStateToProps = (state) => {
    return{
        settings: state.settings
    };
};

/**
 * Map the actions to props
 */
const mapDispatchToProps = (dispatch) => {
    Actions: bindActionCreators(Actions, dispatch)
    return{
        Actions
    }
    
};



export default connect(
  mapStateToProps, mapDispatchToProps
)(AddNewWord);
//export default Dictionary;


//export default AddNewWord;