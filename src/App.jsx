
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import JobDetails from './components/JobDetails/JobDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import allAppliedJobs from './Loader/jobsLoader';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Statistics from './components/Statistics/Statistics';
import Blogs from './components/Blogs/Blogs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('data/featured-job.json'),
      },
      {
        path: "/:jobId",
        element: <JobDetails></JobDetails>,
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: allAppliedJobs
      },
      {
        path:"/statistics",
        element:<Statistics></Statistics>
      },
      {
        path:"/blogs",
        element:<Blogs></Blogs>
      }
    ]
  }
]);
function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  )
}

export default App
