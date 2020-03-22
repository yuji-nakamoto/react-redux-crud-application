import React, { Component } from 'react';
import { connect } from 'react-redux'
//画面遷移を行うライブラリ
import { Link } from 'react-router-dom'
// import { postEvent } from '../actions'


class EventsNew extends Component {
  render() {
    return (
   <React.Fragment>
   </React.Fragment>
    )
  }
}

// const mapDispatchToProps = ({ postEvent })

export default connect(null, null)(EventsNew)

