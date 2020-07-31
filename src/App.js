import React from 'react';
import axios from 'axios';
import './reset.css' 
import './App.css';
import Header from './components/Header';
import Feed from './components/Feed'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      journal: []
    }
  }

  componentDidMount(){
    this.getJournal();
  };

  getJournal = () => {
    axios.get('/api/journal')
      .then( res => {
        this.setState({
          journal: res.data
        })
      }
    ).catch( err => console.log(err))
  }

  render(){
    console.log(this.state)
    return(
      <div>
        <Header/>
        <Feed journal={this.state.journal}/>
      </div>
    );
  }
}

export default App;
