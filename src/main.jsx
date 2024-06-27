import React from 'react'
import ReactDOM from 'react-dom/client'
 
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/root/Root';
import Home from './component/home/Home';
import AppliedJobs from './header/AppliedJobs/AppliedJobs';
import ErrorPage from './ErrorPage/ErrorPage';
import JobDetails from './component/Job/jobDetails/JobDetails';
 

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[

      {
        path: '/' ,
        element :<Home></Home>
      },
      {
       path :'/applied',
       element :<AppliedJobs></AppliedJobs>
      },
      {
        path:'/job/:id',
        element:<JobDetails></JobDetails>,
        loader:()=>fetch('../jobs.json')  
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
