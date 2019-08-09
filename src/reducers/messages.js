import { ALL_MESSAGES } from '../actions'

export default function messages (state = [], action = {}) {
  switch (action.type) {
    case ALL_MESSAGES:
      return action.payload
    default:
      return state
  }
}
