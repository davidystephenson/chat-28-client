/* global EventSource */

import React from 'react'
import { allMessages } from './actions'
import { connect } from 'react-redux'
import MessageForm from './components/MessageForm'
import UserForm from './components/UserForm'

class App extends React.Component {
  state = { message: '' }

  source = new EventSource('https://immense-mountain-94323.herokuapp.com/stream')

  componentDidMount () {
    this.source.onmessage = (event) => {
      console.log('event.data test:', event.data)

      const messages = JSON.parse(event.data)

      this.props.allMessages(messages)
    }
  }

  render () {
    const messages = this
      .props
      .messages
      .map((message, index) => <p key={index}>
        {message.user}: {message.text}
      </p>)

    return <main>
      <MessageForm user={this.props.user} />

      <UserForm user={this.props.user} />

      {messages}
    </main>
  }
}

function mapStateToProps (state) {
  return {
    messages: state.messages,
    user: state.user
  }
}

const mapDispatchToProps = {
  allMessages
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(App)
