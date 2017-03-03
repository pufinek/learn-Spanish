import React from 'react';
import { Link } from 'react-router';

class Word extends React.Component{
    render(){
    	const word=this.props.word; 

        let meaning = word.meaningCZ[0];
        for(let i=1; i < word.meaningCZ.length ; i++){
            meaning +=", "+word.meaningCZ[i];
        }

        return(

            <div key={word.key} className="word" >  
                <div className="word-control">
                    <span className="lnr lnr-volume-high"></span>
                     <Link to={`/view/${word.id}`}>
                        <span className="lnr lnr-cog"></span>
                    </Link>
                </div>
                <span className="meaning" data-language="es"><strong>ES: </strong>{word.meaningES}</span> 
                <span className="meaning" data-language="cz"><strong>CZ: </strong>{meaning}</span>
                <span className="meaning" data-language="en"><strong>EN: </strong>{word.meaningEN}</span> 

            </div>
            

        )
    }

}

export default Word;