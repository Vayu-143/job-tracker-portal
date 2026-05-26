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
      },
    ],
  };

  return (
    <div
      className="card p-3 mb-4"
      style={{
        maxWidth: "500px",
      }}
    >
      <h5>
        Application Analytics
      </h5>

      <Pie data={data} />
    </div>
  );
}

export default StatsChart;