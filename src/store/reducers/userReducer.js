import {createSlice} from "@reduxjs/toolkit";

const user = createSlice({
  name: 'user',
  initialState: {
    userInfo: localStorage.getItem('userInfo') || {}
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem('userInfo', action.payload)
    }
  }
})
export const {setUserInfo} = user.actions;
export default user.reducer;
