import React,{ Component } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { postEvent } from '../actions';
import { Field, reduxForm } from 'redux-form';

class EventsNew extends Component {
  renderField (field) {
    const { input, label, type, meta: { touched, error } } = field;
    return (<div></div>)
  }

  render() {
    return(
      <div>
        <form>
          <div>
            <Field label='Title' name='title' type='text' component={this.renderField} />
          </div>
          <div>
            <Field label='Body' name='body' type='text' component={this.renderField} />
          </div>
          <div>
            <input type='submit' value='submit' disabled='false' />
            <Link to='/'>cancel</Link>
          </div>
        </form>
      </div>
    );
  }
}

// const mapDispatchToProps = ({ postEvent });

const validate = values => {
  const errors = {}

  return errors
}

export default connect(null, null)(
  reduxForm({ validate, form: 'eventsNewForm' })(EventsNew)
  );