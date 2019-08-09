/* global EventSource */

import React from 'react'
import { allChannels } from '../actions'
import { connect } from 'react-redux'
import UserForm from './UserForm'
import ChannelForm from './ChannelForm'
import { url } from '../constants'
import { Link } from 'react-router-dom'

class App extends React.Component {
  state = { message: '' }

  source = new EventSource(`${url}/stream`)

  componentDidMount () {
    this.source.onmessage = (event) => {
      const channels = JSON.parse(event.data)

      console.log('channels test:', channels)

      this.props.allChannels(channels)
    }
  }

  render () {
    console.log('this.props test:', this.props)
    const channels = this
      .props
      .channels
      .map(channel => <Link
        key={channel.id}
        to={`/channel/${channel.id}`}
      >
        <div>{channel.name}</div>
      </Link>)

    console.log('channels test:', channels)

    return <main>
      <ChannelForm />

      <UserForm user={this.props.user} />

      {channels}
    </main>
  }
}

function mapStateToProps (state) {
  return {
    channels: state.channels,
    user: state.user
  }
}

const mapDispatchToProps = {
  allChannels
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(App)
