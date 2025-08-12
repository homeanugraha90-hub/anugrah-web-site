export default function StatsCard({ icon, title, value }) {
  return (
    <div className="flex items-center gap-3 p-4 bg-white rounded shadow">
      <div className="p-2 bg-purple-100 text-purple-600 rounded">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{value}</h3>
        <p className="text-sm text-gray-500">{title}</p>
      </div>
    </div>
  );
}
