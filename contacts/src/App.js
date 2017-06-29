import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {red700} from 'material-ui/styles/colors';
import AppBar from "material-ui/AppBar";
import Form from "./form";
import "./form.css"
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const theme = getMuiTheme({
  palette:{primary1Color: red700}
});


class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={theme}>
          <div>
            <AppBar title="My Awesome Form"/>
          </div>
        </MuiThemeProvider>
        <MuiThemeProvider muiTheme={theme}>
          <div>
            <Form />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
