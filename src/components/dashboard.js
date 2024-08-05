import React from "react";
import { Link, Outlet, useNavigate  } from 'react-router-dom';
import './dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('isAdmin');

    navigate('/login');
  };
  


    return (
      <div className="dashboard-container">
        <div className="sidebar">
          <h2>Menu</h2>
          <ul>
            <li><Link to="/dashboard/financial">Financeiro</Link></li>
            <li><Link to="/dashboard/employees">Funcionários</Link></li>
          </ul>
          <button onClick={handleLogout}>Logout</button>
        </div>
        <div className="main-content">
          <Outlet /> {/* Aqui o conteúdo das páginas filhas será renderizado */}
        </div>
      </div>
    );
}

export default Dashboard;