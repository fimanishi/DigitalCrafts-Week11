import React, { Component } from 'react';
import './App.css';
import MyForm from "./myform";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {red700} from 'material-ui/styles/colors';

const theme = getMuiTheme({
  palette:{primary1Color: red700}
});


class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <MyForm/>
      </MuiThemeProvider>
    );
  }
}

export default App;
