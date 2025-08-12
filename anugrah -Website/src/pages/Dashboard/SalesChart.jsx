import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function SalesChart() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Total Sales',
        data: [12, 19, 15, 25, 22, 30],
        borderColor: '#8b5cf6',
        backgroundColor: '#8b5cf6',
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-4">Sales Report</h2>
      <Line data={data} />
    </div>
  );
}
