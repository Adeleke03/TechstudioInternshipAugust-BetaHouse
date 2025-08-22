import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Login from "./auth/Login.jsx";
import SignUp from "./auth/Signup.jsx";
import { AuthProvider } from "./context/AuthContext"; 

function App() {
  return (
    <AuthProvider> {/* ✅ Wrap the app with AuthProvider */}
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
