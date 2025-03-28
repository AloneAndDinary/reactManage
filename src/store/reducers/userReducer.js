import {createSlice} from "@reduxjs/toolkit";

const user = createSlice({
  name: 'user',
  initialState: {
    userInfo: JSON.parse(localStorage.getItem('userInfo')) || {}
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload))
    }
  }
})
export const {setUserInfo} = user.actions;
export default user.reducer;
