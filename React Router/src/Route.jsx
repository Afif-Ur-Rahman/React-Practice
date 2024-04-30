import {Header, Footer} from "./components"
import { Outlet } from "react-router-dom";

function Route() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Route;
