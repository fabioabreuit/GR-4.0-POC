import { createSlice } from '@reduxjs/toolkit'
import {
  setConnectedUser,
} from '../actions/user'

var init = {
  isLogged: false,
}

export const user = createSlice({
  name: 'user',
  initialState: init,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setConnectedUser.fulfilled, (state, action) => {
      state.isLogged = true
    })

    builder.addCase(setConnectedUser.rejected, (state, action) => {
      state.isLogged = false
    })
  }
})

export default user.reducer
