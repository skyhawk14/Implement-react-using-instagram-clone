import Signup from "./Components/SignUp";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Route,
} from "react-router-dom";
import Login from "./Components/Login";
import { AuthProvider } from "./Context/AuthContext";
import Feed from "./Components/Feed";
import NotFound from "./Components/NotFound";
import PrivateRoute from "./Components/PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute component={Feed} />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />;
    </AuthProvider>
  );
}

export default App;
