import { CALL_API } from '../middleware/api'

export const QUARAN_REQUEST = 'QUARAN_REQUEST'
export const QUARAN_SUCCESS = 'QUARAN_SUCCESS'
export const QUARAN_FAILURE = 'QUARAN_FAILURE'

const fetchQuaran = () => ({
  [CALL_API]: {
    types: [ QUARAN_REQUEST, QUARAN_SUCCESS, QUARAN_FAILURE ],
    endpoint: `quarantines`
  }
})

export const loadQuaran = () => (dispatch, getState) => {
  return dispatch(fetchQuaran()) 
}

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'

// Resets the currently visible error message.
export const resetErrorMessage = () => ({
    type: RESET_ERROR_MESSAGE
})
