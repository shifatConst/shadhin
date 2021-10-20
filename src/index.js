import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom"
import { AdminProvider } from './components/Context/AdminContext';
import { EmployeeProvider } from './components/Context/EmployeeContext';
ReactDOM.render(
  <React.StrictMode>
    <AdminProvider>
      <EmployeeProvider>
        <Router>
          <App />
        </Router>
      </EmployeeProvider>
    </AdminProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
