import "./App.css";
import TimelinePage from "./pages/TimelinePage.jsx";
import StoryPage from "./pages/StoryPage.jsx";
import StoriesPage from "./pages/StoriesPage.jsx";
import FaqPage from "./pages/FaqPage.jsx";
import TagsPage from "./pages/TagsPage.jsx";
import TagPage from "./pages/TagPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import { Outlet } from "react-router-dom";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function PagesWrapper() {
  return <Outlet />;
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <TimelinePage />,
  },
  {
    path: "/stories",
    element: <PagesWrapper />,
    children: [
      {
        path: "",
        element: <StoriesPage />,
      },
      {
        path: "story",
        element: <StoryPage />,
      },
      {
        path: "faq",
        element: <FaqPage />,
      },
    ],
  },
  {
    path: "/tags",
    element: <TagsPage />,
    children: [
      {
        path: "tag",
        element: <TagPage />,
      },
    ],
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
