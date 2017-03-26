import React from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router';
import {convertArrayToString} from '../helpers/dictionary';

class Word extends React.Component{

    render(){
    	const word=this.props.word; 
        const playerUrl = "http://audio1.spanishdict.com/audio?lang=es&text="+word.meaningES;

        return(

            <div key={this.props.index} className="word" >  
                <div className="word-control">
                <label className="favorite"> 
                        <input type="checkbox" name="favorite" ref={(input) => this.favorite = input}  checked={word.favorite} onChange={(e) => this.props.actions.changeValue(this.props.index,word, e.target.name, e.target.checked)}/>
                        <span className="fa fa-star-o"></span>
                </label>

                   <ReactPlayer className="spanish-player" url={playerUrl} controls />
                     <Link to={`/view/${this.props.index}`}>
                        <span className="fa fa-wrench"></span>
                    </Link>
                </div>
                <span className="meaning" data-language="es"><strong>ES: </strong>{word.meaningES}</span> 
                <span className="meaning" data-language="cz"><strong>CZ: </strong>{convertArrayToString(word.meaningCZ)}</span>
                <span className="meaning" data-language="en"><strong>EN: </strong>{word.meaningEN}</span> 
                {/*<span className="lnr lnr-trash"  onClick={(e)=> this.props.actions.removeWordFirebase(this.props.index)}></span>*/}

            </div>
            

        )
    }

}

export default Word;