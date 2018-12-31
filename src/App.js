import React,{ Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {count: 0}
  }

  handlePressButton = () => {
    let count = this.state.count
    this.setState({count: count + 1});
  }

  render() {
    console.log('render');
    return(
      <div>
        <div>
          Count: {this.state.count}
        </div>
        <button onClick={this.handlePressButton}>+1</button>
        <button>-1</button>
      </div>
    );
  }
}

export default App;
