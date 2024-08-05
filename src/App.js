import Login from "./components/login";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "./components/dashboard";
import Employees from "./components/employees";
import Financial from "./components/financial";
import PrivateRoute from "./components/privateRoute";
import AdminRoute from "./components/adminRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={< PrivateRoute element={<Dashboard/>}/>} />
        <Route path="/dashboard/financial" element={<AdminRoute  element={<Financial/>} />} />
        <Route path="/dashboard/employees" element={<PrivateRoute element={<Employees/>} />} />
      </Routes>
    </Router>
  );
}

export default App;
