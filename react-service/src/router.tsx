import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Page1 from "./pages/page1/Page1";
import Page2 from "./pages/page2/Page2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "page1/",
        element: <Page1 />,
      },
      {
        path: "page2/",
        element: <Page2 />,
      },
    ],
  },
  // {
  //   path: "login/",
  //   element: <LoginPage />,
  // },
]);

export default router;
