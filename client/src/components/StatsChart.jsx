import {
  Pie
} from "react-chartjs-2";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function StatsChart({
  applied,
  interview,
  offer,
  rejected,
}) {
  const data = {
    labels: [
      "Applied",
      "Interview",
      "Offer",
      "Rejected",
    ],

    datasets: [
      {
        label: "Applications",
        data: [
          applied,
          interview,
          offer,
          rejected,
        ],

        backgroundColor: [
          "#0d6efd",
          "#ffc107",
          "#198754",
          "#dc3545",
        ],

        borderColor: [
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
        ],

        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,

    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "white",
        },
      },

      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div
      className="card p-3 mb-4"
      style={{
        maxWidth: "500px",
        margin: "auto",
      }}
    >
      <h4 className="text-center mb-3">
        Job Analytics
      </h4>

      <Pie
        data={data}
        options={options}
      />
    </div>
  );
}

export default StatsChart;