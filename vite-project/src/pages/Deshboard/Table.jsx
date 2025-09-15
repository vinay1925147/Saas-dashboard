import React, { useEffect, useState } from "react";

function App() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [riskFilter, setRiskFilter] = useState("");

  useEffect(() => {
    fetch("/Contracts.json") // ✅ your JSON API
      .then((res) => res.json())
      .then((data) => {
        setColumns(Object.keys(data.contract[0])); // Extract column names
        setRecords(data.contract);                 // Extract data rows
      });
  }, []);


  const filteredRecords = records
    .filter(
      (r) =>
        r.name.toLowerCase().includes(search.toLowerCase()) ||
        r.parties.toLowerCase().includes(search.toLowerCase())
    )
    .filter((r) => (statusFilter ? r.status === statusFilter : true))
    .filter((r) => (riskFilter ? r.risk === riskFilter : true));

  return (
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-4"> Table Data </h3>

      {/* 🔍 Search & Filters */}
      <div className="flex gap-4 mb-6">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by name or parties..."
          className="border px-3 py-2 rounded w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Status Filter */}
        <select
          className="border px-3 py-2 rounded"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="" className="bg-gray-700">All Status</option>
          <option value="Active" className="bg-gray-700">Active</option>
          <option value="Expired" className="bg-gray-700">Expired</option>
          <option value="Renewal Due" className="bg-gray-700">Renewal Due</option>
        </select>

        {/* Risk Filter */}
        <select
          className="border px-3 py-2 rounded"
          value={riskFilter}
          onChange={(e) => setRiskFilter(e.target.value)}
        >
          <option value="" className="bg-gray-700">All Risk</option>
          <option value="Low" className="bg-gray-700">Low</option>
          <option value="Medium" className="bg-gray-700">Medium</option>
          <option value="High" className="bg-gray-700">High</option>
        </select>
      </div>

      {/* 📊 Table */}
      <table className="min-w-full border border-gray-700">
        <thead className="bg-gray-700">
          <tr>
            {columns.map((c, i) => (
              <th key={i} className="px-4 py-2 border">
                {c}
              </th>
            ))}
              <th className="px-4 py-2 border">Contract Details</th>
          </tr>
        </thead>
        <tbody>
          {filteredRecords.length > 0 ? (
            filteredRecords.map((record, i) => (
              <tr key={i} className="hover:bg-gray-500 border">
                {columns.map((c, j) => (
                  <td key={j} className="px-4 py-2 border">
                    {record[c]}
                  </td>  
                ))}
               <div className="m-4 p-1 bg-green-600 ">
                     <a href="http://localhost:5173/contract"><td>details</td></a> 
               </div>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center py-4 text-gray-500"
              >
                No matching contracts found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
