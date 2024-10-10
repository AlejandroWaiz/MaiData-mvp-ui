import React from 'react';
import Card from './Card';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <Card title="Inicio" content="Bienvenido a la página de inicio" className="title-card" />
      <div className="middle-cards">
        <Card title="Ventas" content="Datos de ventas: 1000 unidades" />
        <Card title="Inventario" content="Inventario actual: 500 productos" />
        <Card title="Clientes" content="Clientes registrados: 300" />
      </div>
      <div className="bottom-cards">
        <Card title="Proveedores" content="Proveedores activos: 50" />
        <Card title="Finanzas" content="Balance financiero: $10,000" />
      </div>
    </div>
  );
};

export default Dashboard;
