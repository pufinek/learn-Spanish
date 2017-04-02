import React from 'react';
import TextField from 'material-ui/TextField';

const Filtr = React.createClass({

render(){
    return(
    <form className="filtr-form" onSubmit={(e) => this.handleFiltr(e)}>
        <TextField name="meaningCZ" defaultValue="" hintText="odděl středníkem" />
        <input type="submit" />
    </form>
    )
}
});

export default Filtr;