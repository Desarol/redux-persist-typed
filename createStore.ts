import { createStore, Reducer } from 'redux'
import { persistStore } from 'redux-persist'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import reducerConfig from './reducer-config'
import { RootReducer } from './types'

const initialState: RootReducer = {
  foo: 'bar',
  subType: {
    withSomeMoreThings: 'hello, world!'
  }
}

const reducer: Reducer = (state = initialState, action): RootReducer => {
  switch (action.type) {
    case 'SET_BAZ':
      return {
        ...state,
        foo: 'baz',
      }
    
    case 'SET_BAR':
      return {
        ...state,
        foo: 'bar',
      }

    default:
      return state
  }
}

const persistedReducer = persistReducer({
  key: 'root',
  storage,
  version: reducerConfig.version,
}, reducer)

export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)

  return {
    store,
    persistor,
  }
}
