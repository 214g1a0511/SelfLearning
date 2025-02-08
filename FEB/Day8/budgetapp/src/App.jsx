import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";
import Main, { MainLoader } from "./layouts/Main";
import Logout from "./actions/Logout";
import { ToastContainer, toast } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: MainLoader,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        loader: dashboardLoader,
      },
    ],
  },
  { path: "/logout" ,
    action:Logout
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />

    </div>
  );
}

export default App;
