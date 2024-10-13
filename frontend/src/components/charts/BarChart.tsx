import { Bar } from "react-chartjs-2"
import "./styles.css"

const BarChart = () => {

  const options = {

    responsive: true,

    plugins: {

      legend: {

        position: "top" as const,

      },

      title: {

        display: true,

        text: "Porcentaje de adquisición de producto según público",

      },

    },

  }



const labels = ["Público A", "Público B", "Público C", "Público D", "Público E"]

  const data1 = [45, 75, 55, 90, 60]

  const data2 = [65, 40, 70, 80, 50]



const data = {

    labels,

    datasets: [

      {

        label: "Producto 1",

        data: data1,

        backgroundColor: "rgba(75, 192, 192)",

        borderColor: "rgb(75, 192, 192)",

        borderWidth: 1,

      },

      {

        label: "Producto 2",

        data: data2,

        backgroundColor: "rgba(255, 159, 64)",

        borderColor: "rgb(255, 159, 64)",

        borderWidth: 1,

      },

    ],

  }

  return (
    <div className="graph-container"> {/* Aplica la clase CSS aquí */}
      <Bar options={options} data={data} />
    </div>
  );

}



export default BarChart


