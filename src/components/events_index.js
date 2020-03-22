import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'

import { readEvents } from '../actions'


class EventsIndex extends Component {
  //マウント時に呼ばれる関数
  componentDidMount() {
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render() {
    return (
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
    )
  }
}

//countの値を参照する関数
const mapStateToProps = state => ({events: state.events })

//あるacitonが発生した時にreducerにtypeに応じた状態遷移を実行させる関数
const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)

