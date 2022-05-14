import { FC, lazy } from "react";
import './App.css'
import { Navigate, Route, Routes } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from "./hooks/useAuth";
import Navbar from "./components/Navbar";

const HomePage = lazy(() => import("./screens/homepage"))
const Forfaits = lazy(() => import("./screens/forfaits"))
const Contact = lazy(() => import("./screens/contact"))
const Dashboard = lazy(() => import("./screens/dashboard"))
const Profile = lazy(() => import("./screens/profile"))
const Settings = lazy(() => import("./screens/settings"))
const NotFound = lazy(() => import("./screens/notFound"))
const Sign = lazy(() => import("./screens/sign"))
const CheckEmail = lazy(() => import("./screens/checkEmail"))
const ForgotPassword = lazy(() => import("./screens/forgotPassword"))

toast.configure();

const App: FC = () => {
  return (
        <Routes>
          {/* PUBLIC ROUTE */}
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<HomePage />} />
          <Route path="profile/:username" element={<Profile />} />
          <Route path="check-email" element={<CheckEmail />} />
          <Route path="forgot-password" element={<ForgotPassword />} />

          {/* ONLY PUBLIC ROUTE */}
          <Route path="sign" element={<PublicRouteOnly component={Sign} />} />

          {/* PRIVATE ROUTE */}
          <Route path="settings" element={<PrivateRoute component={Settings} />} />
          <Route path="home" element={<PrivateRoute component={Dashboard} />} />
          <Route path="contact" element={<PrivateRoute component={Contact} />} />
          <Route path="forfaits" element={<PrivateRoute component={Forfaits} />} />


        </Routes>
  );
}


const PrivateRoute = ({ component: Component }:any) => {
	const auth = useAuth()
	const user = auth.loggedIn() && auth.user
  if (user) {
    return (
      <>
        <Navbar />
        <Component />
      </>
    )
  } else {
      return <Navigate replace to="/sign"/>
  }
};

const PublicRouteOnly = ({ component: Component }:any) => {
	const auth = useAuth()
	const user = auth.loggedIn() && auth.user

  if (!user) {
    return (
      <>
        <Component />
      </>
    )
  } else {
      return <Navigate replace to="/home"/>
  }
};


export default App;