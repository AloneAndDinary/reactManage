import {createSlice} from "@reduxjs/toolkit";

const collection = createSlice({
  name: 'collectionFlag',
  initialState: {
    isCollapse: false
  },
  reducers: {
    changeCollapse: state => {
      state.isCollapse = !state.isCollapse
    }
  }
});


export const {changeCollapse} = collection.actions;
export default collection.reducer;


