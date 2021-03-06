import React from 'react';
import { Link } from 'react-router';
import * as actionCreators from '../actions/dictionary';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Main = React.createClass({

 componentWillMount() {
   console.log("nacitam z Firebase");
   this.props.actions.subscribeToDictionaryFirebase();
 },

  render() {
    // Then we go ahead and return some JSX
    return (
       <MuiThemeProvider>
         <div>
          <h1>
            <Link to="/">To learn and practice Spanish!</Link>
          </h1>
          {/* We use cloneElement here so we can auto pass down props */}
          { React.cloneElement(this.props.children, this.props) }
        </div>
       </MuiThemeProvider>
    );
  }

});

export default Main;
