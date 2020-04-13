import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import ValidationComponent from './components/ValidationComponent';
import CharComponent from './components/CharComponent';

class App extends Component {
  state = {
    text: ''
  }

  textChangeHandler = (event) => {
    this.setState({
      text: event.target.value
    });
  }

  removeChar = (index) => {
    const textArray = [...this.state.text]
    textArray.splice(index, 1);
    this.setState({
      text: textArray.join('')
    })
  }

  characters = null;  

  render() {

    this.characters = (
      (this.state.text.length >= 5) 
      ?
        Array.from(this.state.text).map((c, index) => {
          return (<CharComponent removeChar={() => this.removeChar(index)} key={c+index} char={c} />);
        })
      :
        null
      
    );

    return (
      <div className="App container">
        <div className="row">
          <input onChange={(event) => this.textChangeHandler(event)} value={this.state.text} className="form-control"></input>
          <div className="panel">
            <div className="panel-title">Number of characters: {this.state.text.length}</div>
            <ValidationComponent textLength={this.state.text.length} />
            {this.characters}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
