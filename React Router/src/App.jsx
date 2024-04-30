import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Route from "./Route";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: <Route />,
    children: [{
      path: "",
      element: <Home />
    }, {
      path: "about",
      element: <About />
    }, {
      path: "contact",
      element: <Contact />
    }
  ]
  }])
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
