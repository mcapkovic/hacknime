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
    path: "/stories",
    element: <StoryPage />,
    children: [
      {
        path: "story",
        element: <StoryPage />,
      },
    ]
  },
  {
    path: "/tags",
    element: <StoryPage />,
    children:[
      {
        path: "tag",
        element: <StoryPage />,
      },
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
