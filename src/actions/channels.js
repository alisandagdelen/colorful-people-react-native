import * as types from '~/src/actions/types'

export function selectChannel(name) {
  return { type: types.CHANNEL_SELECTED, payload: { name } }
}

