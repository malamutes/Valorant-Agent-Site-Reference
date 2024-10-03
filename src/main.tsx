import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import AgentPage from './Components/AgentDescriptionScreen/AgentPage.tsx'
import 'bootstrap/dist/css/bootstrap.css'

//DOM STUFF
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Components/ErrorPage/ErrorDisplay.tsx'

const DOMroot = ReactDOM.createRoot(document.getElementById('root')!);
//this lets me keep a referencing to DOM root so i can use it later for router i think?
//dont fully get it though need to look up more 

DOMroot.render(
  <StrictMode>
    <App />
  </StrictMode>,
)

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, //this renders APP as its root, or initial render path like starting point
    //for navhost/navgraph
    errorElement: <ErrorPage />

    //KEEP IN MIND APP IS THE ROOT, probaly need to refractor to 
    //error parsing later too 
  },
  {
    path: "Agents/:Agent",
    element: <AgentPage />,
    errorElement: <ErrorPage />
  },

]);

DOMroot.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
//strictmode causes page to render twice
//https://stackoverflow.com/questions/61254372/my-react-component-is-rendering-twice-because-of-strict-mode