import React,{ Component } from 'react';
import { connect } from 'react-redux';

import { readEvents } from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class EventsIndex extends Component {

  componentDidMount() {
    this.props.readEvents();
  }

  renderEvents() {
    return _.map(this.props.events, events => (
      <tr>
        <td>{events.id}</td>
        <td>{events.title}</td>
        <td>{events.body}</td>
      </tr>
    ))
  }

  render() {
    const props = this.props;
    return(
      <div>
        <div>{console.log(props.events)}</div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              {this.renderEvents()}
            </tbody>
          </table>
          <Link to='/events/new'>New Event</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({ events: state.events });

const mapDispatchToProps = ({ readEvents });

export default connect(mapStateToProps,mapDispatchToProps)(EventsIndex);
