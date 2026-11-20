import { Routes, Route, Link, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext.jsx";

import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Profile from "./pages/Profile.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

// Home Page
function Home() {
  const { user } = useAuth();

  return (
    <div>
      <h1>Welcome to React Firebase Authentication</h1>
      <p>This is the Home Page.</p>

      {user ? (
        <Link to="/dashboard">Go to Dashboard</Link>
      ) : (
        <Link to="/register">Create an Account</Link>
      )}
    </div>
  );
}

// Navbar
function Navbar() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <nav style={{ padding: "15px", background: "#eee" }}>
      <Link to="/" style={{ marginRight: "15px" }}>
        Home
      </Link>

      {user ? (
        <>
          <Link to="/dashboard" style={{ marginRight: "15px" }}>
            Dashboard
          </Link>

          <Link to="/profile" style={{ marginRight: "15px" }}>
            Profile
          </Link>

          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login" style={{ marginRight: "15px" }}>
            Login
          </Link>

          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
}

// Main App
function App() {
  const { user } = useAuth();

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={user ? <Navigate to="/dashboard" replace /> : <Login />}
        />

        <Route
          path="/register"
          element={user ? <Navigate to="/dashboard" replace /> : <Register />}
        />

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </>
  );
}

export default App;