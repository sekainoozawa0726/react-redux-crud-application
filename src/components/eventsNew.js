import React,{ Component } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { postEvent } from '../actions';
import { Field, reduxForm } from 'redux-form';
import '../styles/eventsNew.css';

class EventsNew extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }


  renderField (field) {
    const { input, label, type, meta: { touched, error } } = field;
    return (
    <div>
      <input className='text-form' {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>)
  }

  async onSubmit(values) {
    await this.props.postEvent(values);
    this.props.history.push('/');
  }

  render() {
    const { handleSubmit } = this.props;
    return(
      <div className='container'>
        <form className='submit-form' onSubmit={handleSubmit(this.onSubmit)}>
          <div>
            <Field label='Title' name='title' type='text' component={this.renderField} />
          </div>
          <div>
            <Field label='Body' name='body' type='text' component={this.renderField} />
          </div>
          <div>
            <input className='submit-btn' type='submit' value='submit' disabled={false} />
            <Link to='/'>cancel</Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = ({ postEvent });

const validate = values => {
  const errors = {}

  if(!values.title) errors.title = '入力してください！';
  if(!values.body) errors.body = '入力してください！';


  return errors
}

export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventsNewForm' })(EventsNew)
  );