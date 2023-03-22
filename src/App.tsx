import { createBrowserRouter, Outlet } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";

export const routerConfig = [
  {
    path: "/",
    element: <MainPage />,
    errorElement: <NotFoundPage />,
  },
];

export const router = createBrowserRouter(routerConfig);

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
