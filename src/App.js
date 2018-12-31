import React,{ Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {count: 0}
  }

  handlePlus = () => {
    let count = this.state.count
    this.setState({count: count + 1});
  }

  handleMinus = () => {
    let count = this.state.count;
    this.setState({count: count - 1});
  }

  render() {
    console.log('render');
    return(
      <div>
        <div>
          Count: {this.state.count}
        </div>
        <button onClick={this.handlePlus}>+1</button>
        <button onClick={this.handleMinus}>-1</button>
      </div>
    );
  }
}

export default App;
