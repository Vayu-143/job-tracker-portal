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
      },
    ],
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "auto",
      }}
    >
      <Pie data={data} />
    </div>
  );
}

export default StatsChart;