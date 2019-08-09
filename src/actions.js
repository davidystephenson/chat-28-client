export const ALL_MESSAGES = 'ALL_MESSAGES'

export function allMessages (payload) {
  return {
    type: ALL_MESSAGES,
    payload
  }
}

export const SET_NAME = 'SET_NAME'

export function setName (payload) {
  return {
    type: SET_NAME,
    payload
  }
}
