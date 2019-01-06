import React,{ Component } from 'react';
import { connect } from 'react-redux';

import { readEvents } from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import '../styles/eventsIndex.css';

class EventsIndex extends Component {

  componentDidMount() {
    this.props.readEvents();
  }

  renderEvents() {
    return _.map(this.props.events, events => (
      <tr>
        <td className='list-body'>{events.id}</td>
        <td className='list-body'>{events.title}</td>
        <td className='list-body'>{events.body}</td>
      </tr>
    ))
  }

  render() {
    const props = this.props;
    return(
      <div className='container'>
          <table className='event-list'>
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
          <div className='btn-cont'>
            <Link to='/events/new'>New Event</Link>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ events: state.events });

const mapDispatchToProps = ({ readEvents });

export default connect(mapStateToProps,mapDispatchToProps)(EventsIndex);
