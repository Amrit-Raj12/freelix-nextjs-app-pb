import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage" // defaults to localStorage for web
import userReducer from "./userSlice"
import email from "./emailSlice"
import myListReducer from "./myLIstSlice"
import searchReducer from "./moviesSlice"
import filterReducer from "./filerSlice"

const rootReducer = combineReducers({
  mail: email,
  user: userReducer,
  myList: myListReducer,
  search: searchReducer,
  filter: filterReducer,
  // Add other reducers here if needed
})

const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
})

export const persistor = persistStore(store)

export default store
