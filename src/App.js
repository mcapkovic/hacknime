import "./App.css";
import TimelinePage from "./pages/TimelinePage.jsx";
import StoryPage from "./pages/StoryDefaultPage.jsx";
import StoriesPage from "./pages/StoriesPage.jsx";
import FaqPage from "./pages/FaqPage.jsx";
import TagsPage from "./pages/TagsPage.jsx";
import StoryExamplePage from "./pages/StoryExamplePage.jsx";
import FaqExamplePage from './pages/FaqExamplePage.jsx'

import TagPage from "./pages/TagPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import DetailPage from './pages/DetailPage.jsx'
import { Outlet } from "react-router-dom";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function PagesWrapper() {
  return <Outlet />;
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <TimelinePage />,
    children:[
      {
        
      }
    ]
  },
  {
    path: "/timeline",
    element: <PagesWrapper />,
    children:[
      {
        path: "",
        element: <TimelinePage />,
      },
      {
        path: "detail",
        element: <DetailPage />,
      }
    ]
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
        path: ":tags",
        element: <StoryExamplePage />,
      },
      {
        path: "faq",
        element: <FaqPage />,
      },
    ],
  },
  {
    path: "/tags",
    element: <TimelinePage/>,
    children: [
      {
        path: "tag",
        element: <TagPage />,
      },
    ],
  },
  {
    path: "/faq",
    element: <FaqExamplePage />,
    children: [
      {
        path: ":id",
        element: <FaqExamplePage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
