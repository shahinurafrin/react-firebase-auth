import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { user } = useAuth();

  return (
    <div>
      <h1>Welcome to Dashboard</h1>
      <h3>Email: {user?.email}</h3>
    </div>
  );
}

export default Dashboard;