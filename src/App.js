
import React from 'react';
import './App.css';
import { client } from './client';
import Posts from './components/Posts'

class App extends React.Component {
  state = {
    articles: []
  }

  componentDidMount() {
    client.getEntries()
      .then((res) => {
        console.log(res)
        this.setState({
          articles: res.items
        })
      })
      .catch(console.error)
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <header>
            <div className="wrapper">
              <span>React and Contentful</span>
            </div>
          </header>
          <main>
            <div className="wrapper">
              <Posts posts={this.state.articles} />
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
