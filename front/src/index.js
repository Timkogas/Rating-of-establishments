import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import usersReducer from './store/reducers/usersReducer';
import postsReducer from './store/reducers/postsReducer';
import axios from './axiosInstance'
import reviewsReducer from './store/reducers/reviewsReducer';


const localStorageMiddleware = ({getState}) => (next) => (action) => {
  const result = next(action);
  localStorage.setItem("user", JSON.stringify(getState().users.user));
  return result;
};
const loadFromLocalStorage = () => {
  if (localStorage.getItem("user") !== null) {
      return {users: {user: JSON.parse(localStorage.getItem("user"))}}
  }
  return undefined;
};


const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    reviews: reviewsReducer
  },
  preloadedState: loadFromLocalStorage(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware)
})

axios.interceptors.request.use(config=>{
  try{
      config.headers['Authenticate']=store.getState().users.user.token;
  } catch(e){
  }
  return config;
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
