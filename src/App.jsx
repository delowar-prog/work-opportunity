
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import JobDetails from './components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path: "/",
        element:<Home></Home>,
        loader:()=>fetch('data/featured-job.json'),
      },
      {
        path:"/:jobId",
        element:<JobDetails></JobDetails>,
      }
    ]
  }
]);
function App() {

  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  )
}

export default App
