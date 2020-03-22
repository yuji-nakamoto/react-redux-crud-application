import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
//入力フォームを作成するライブラリ
import { Field, reduxForm } from 'redux-form'

import { postEvent } from '../actions'

class EventsNew extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field

    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    )
  }
  //非同期処理はasyncを使う
  async onSubmit(values) {
    await this.props.postEvent(values)
    this.props.history.push('/')
  }

  render() {
    //pristine →ボタンが押せないように submitting →連続で押せないように
    const { handleSubmit, pristine, submitting } = this.props

    return (
   <form onSubmit={handleSubmit(this.onSubmit)}>
      <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
      <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>

      <div>
        <input type="submit" value="Submit" disabled={pristine || submitting} />
        <Link to="/" >Cancel</Link>
      </div>
   </form>
    )
  }
}

const validate = values => {
  const errors = {}

  if (!values.title) errors.title = "Enter a title, please."
  if (!values.body) errors.body = "Enter a body, please."

  return errors
}

const mapDispatchToProps = ({ postEvent })

export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventNewForm' })(EventsNew)
)

