import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

export default function AdminDash() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/logs")
      .then(res => res.json())
      .then(data => setLogs(data));
  }, []);

  return (
    <div className="pt-16">
      <Sidebar/>
      <h1 className="text-2xl font-bold mb-4 text-black">Activity Log</h1>
      <div className="grid gap-4">
        {logs.map((log) => (
          <div key={log._id} className="p-4 border rounded-lg shadow bg-white">
            <p className="text-gray-800">
              <strong>{log.action.toUpperCase()}</strong> in{" "}
              <span className="text-blue-600">{log.collectionName}</span>
            </p>
            <p className="text-sm text-gray-600">
              {new Date(log.timestamp).toLocaleString()}
            </p>

            {/* Agar img ya content h to dikhaye */}
            {log.data?.images && (
              <div className="flex gap-2 mt-2">
                {log.data.images.map((img, i) => (
                  <img
                    key={i}
                    src={`http://localhost:5000/upload/${img}`}
                    alt="update"
                    className="w-20 h-20 object-cover rounded"
                  />
                ))}
              </div>
            )}
            {log.data?.content && (
              <p className="mt-2 text-gray-700">{log.data.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
