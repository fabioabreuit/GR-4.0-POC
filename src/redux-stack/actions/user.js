import { createAsyncThunk } from '@reduxjs/toolkit'

export const setConnectedUser = createAsyncThunk(
  'user/setConnectedUser',
  async data => {
    return data
  }
)