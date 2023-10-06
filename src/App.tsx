// eslint-disable-next-line no-unused-vars
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Images from "./pages/Images/Images";
import Videos from "./pages/Videos/Videos";
// import Layout from "./Layout/Layout";
// import About from "./pages/About/About";
// import Home from "./pages/Home/Home";
// import NotFound from "./pages/NotFound/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "images",
          element: <Images />,
        },
        {
          path: "videos",
          element: <Videos />,
        },
      ],
    },
    // {
    //   path: "*",
    //   element: <NotFound />,
    // },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
