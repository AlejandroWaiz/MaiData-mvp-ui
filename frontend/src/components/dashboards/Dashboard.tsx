import React from 'react';
import Card from './Card';
import "./styles.css"
import LineChart from '../charts/LineChart';
import BarChart from '../charts/BarChart';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <Card title="Inicio" content="Bienvenido a la página de inicio" className="title-card" />
      <div className="middle-cards">
        <Card title="Ventas" content="Datos de ventas: 1000 unidades" />
        <Card title="Inventario" content="Inventario actual: 500 productos" />
        <Card title="Clientes" content="Clientes registrados: 300" />
      </div>
      <div className="charts-container"> {/* Nuevo contenedor para los gráficos */}
        <LineChart />
        <BarChart />
      </div>
    </div>
  );
};

export default Dashboard;
