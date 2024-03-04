import { Route, Routes } from "react-router-dom";
import Register from "./pages/register";
import Posts from "./components/Posts";
import Login from "./pages/Login";
import Navbar from "./components/NavBar";
import TitleBar from "./components/TitleBar";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import NewPostForm from "./components/NewPostForm";
import { useContext } from "react";
import AuthContext from "./contexts/AuthContext";
// import Activation from "./components/Activation";

function App() {

  const user = useContext(AuthContext);

  return (
    <div className="App">
      <TitleBar/>
      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Posts/></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/posts" element={<ProtectedRoute><Posts/></ProtectedRoute>} />
          <Route path="/profile/me" element={<ProtectedRoute><Profile user={user}/></ProtectedRoute>}/>
          <Route path="/posts/create" element={<ProtectedRoute><NewPostForm/></ProtectedRoute>} />
        </Routes>

        {/* <UtilsBar /> */}
      </div>
    </div>
  );
}

export default App;
