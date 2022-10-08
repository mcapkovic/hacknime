import "./App.css";
import TimelinePage from "./pages/TimelinePage.jsx";
import StoryPage from "./pages/StoryPage.jsx";
import StoriesPage from "./pages/StoriesPage.jsx";
import FaqPage from './pages/FaqPage.jsx'
import TagsPage from './pages/TagsPage.jsx'
import TagPage from './pages/TagPage.jsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TimelinePage />,
  },
  {
    path: "/stories",
    element: <StoriesPage />,
    children: [
      {
        path: "story",
        element: <StoryPage />,
      },
      {
        path: "faq",
        element: <FaqPage />,
      },
    ]
  },
  {
    path: "/tags",
    element: <TagsPage />,
    children:[
      {
        path: "tag",
        element: <TagPage />,
      }
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
