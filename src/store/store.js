import Reducer from './Reducer.jsx'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer:{
      comment: Reducer
    }
  })

export default store  