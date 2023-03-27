import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import Editor from './components/Editor';
import About from './components/About';

const editor = {
  path: "/task/:id",
  element: <Editor/>,
  errorElement: <ErrorPage/>
};

const about = {
  path: "/about/",
  element: <About/>,
  errorElement: <ErrorPage/>
};

const home= {
  path: "/",
  element: <App/>,
  errorElement: <ErrorPage/>,
};

const router = createBrowserRouter([
  home, editor, about
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
