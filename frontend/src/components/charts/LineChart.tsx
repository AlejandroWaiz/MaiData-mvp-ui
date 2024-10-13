import { Line } from 'react-chartjs-2';
import "./styles.css"

const LineChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Evolución de ventas primer semestre",
      },
    },
  };

  const labels = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];
  const productASales = [120, 135, 125, 145, 160, 150, 170];
  const productBSales = [80, 75, 95, 100, 110, 105, 120, 115];

  const data = {
    labels,
    datasets: [
      {
        label: "Producto A",
        data: productASales,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Producto B",
        data: productBSales,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="graph-container"> {/* Aplica la clase CSS aquí */}
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChart;
