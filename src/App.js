import './App.css';
import TimelinePage from './pages/TimelinePage.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:  <TimelinePage /> ,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
    // <div >
    //   <TimelinePage /> 
    // </div>
  );
}

export default App;
