import Login from "./pages/login/login";
import Register from "./pages/register/register";
import NavBar from "./components/navbar/navbar";
import LeftBar from "./components/leftBar/leftBar";
import RightBar from "./components/rightBar/rightBar";
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";
import './style.scss';
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext"; 
import { AuthContext } from "./context/authContext";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

function App() {

  const currentUser = useContext(AuthContext);

  const {darkMode} = useContext(DarkModeContext)

  const Layout= ()=>{
    return(
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <NavBar/>
        <div style={{display: "flex"}}>
          <LeftBar/>
          <div style={{ flex: 6}}>
            <Outlet/>
          </div>
          <RightBar/>
        </div>
      </div>
    )
  }

  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/login"/>;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
