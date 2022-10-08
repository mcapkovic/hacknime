import "./App.css";
import TimelinePage from "./pages/TimelinePage.jsx";
import StoryPage from "./pages/StoryPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TimelinePage />,
  },
  {
    path: "/story",
    element: <StoryPage />,
  },
  {
    path: "/tags",
    element: <StoryPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
