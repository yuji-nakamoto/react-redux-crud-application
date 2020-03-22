import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'
//画面遷移を行うライブラリ
import { Link } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContendAdd from 'material-ui/svg-icons/content/add'
import { readEvents } from '../actions'


class EventsIndex extends Component {
  //マウント時に呼ばれる関数
  componentDidMount() {
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <TableRow key={event.id}>
        <TableRowColumn>{event.id}</TableRowColumn>
        <TableRowColumn>
          <Link to={`/events/${event.id}`}>
            {event.title}
          </Link>
        </TableRowColumn>
        <TableRowColumn>{event.body}</TableRowColumn>
      </TableRow>
    ))
  }

  render() {
    const style = {
      position: "fixed",
      right: 12,
      bottom: 12
    }

    return (
   <React.Fragment>
     <FloatingActionButton style={style} containerElement={<Link to="/events/new" />}>
      <ContendAdd />
     </FloatingActionButton>

     <Table>
       <TableHeader
         displaySelectAll={false}
         adjustForCheckbox={false}
      >
         <TableRow>
           <TableHeaderColumn>ID</TableHeaderColumn>
           <TableHeaderColumn>Title</TableHeaderColumn>
           <TableHeaderColumn>Body</TableHeaderColumn>
         </TableRow>
       </TableHeader>

       <TableBody displayRowCheckbox={false}>
         {this.renderEvents()}
       </TableBody>
     </Table>

   </React.Fragment>
    )
  }
}

//countの値を参照する関数
const mapStateToProps = state => ({events: state.events })

//あるacitonが発生した時にreducerにtypeに応じた状態遷移を実行させる関数
const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)

