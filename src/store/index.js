import {configureStore} from "@reduxjs/toolkit";
import CollectionReducer from "./reducers/collectionReducer";
import UserReducer from "./reducers/userReducer";
export default configureStore({
  reducer: {
    collection: CollectionReducer,
    user: UserReducer
  }
})

