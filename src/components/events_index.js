import React,{ Component } from 'react';
import { connect } from 'react-redux';

import { readEvents } from '../actions';

class Events_index extends Component {

  componentDidMount() {
    this.props.readEvents();
  }

  render() {
    const props = this.props;
    return(
      <div>
        <div>
          Count: { props.value }
        </div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = ({ readEvents });

export default connect(mapStateToProps,mapDispatchToProps)(Events_index);
