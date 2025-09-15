import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ContractDetail = () => {
  const { id } = useParams(); // get contract id from URL (/contracts/:id)
  const [contract, setContract] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showEvidence, setShowEvidence] = useState(false);

  useEffect(() => {
    fetch("/contractDetail.json") // mock detail JSON in public folder
      .then((res) => res.json())
      .then((data) => {
        // Example: find contract by id
        if (data.id === "c1") {
          setContract(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading contract detail:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="p-6">Loading contract details...</p>;
  if (!contract) return <p className="p-6">Contract not found</p>;

  return (
    <div className="p-6 space-y-8">
      {/* Metadata */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">{contract.name}</h2>
        <p><span className="font-semibold">Parties:</span> {contract.parties}</p>
        <p><span className="font-semibold">Start:</span> {contract.start}</p>
        <p><span className="font-semibold">Expiry:</span> {contract.expiry}</p>
        <p><span className="font-semibold">Status:</span> {contract.status}</p>
        <p><span className="font-semibold">Risk:</span> {contract.risk}</p>
      </div>

      {/* Clauses Section */}
      <div>
        <h3 className="text-xl font-bold mb-4">Clauses</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {contract.clauses.map((clause, i) => (
            <div key={i} className="p-4 border rounded-lg shadow-sm bg-gray-50">
              <h4 className="font-semibold">{clause.title}</h4>
              <p className="text-gray-700 text-sm">{clause.summary}</p>
              <p className="text-xs text-gray-500">
                Confidence: {(clause.confidence * 100).toFixed(1)}%
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* AI Insights Section */}
      <div>
        <h3 className="text-xl font-bold mb-4">AI Insights</h3>
        <ul className="space-y-2">
          {contract.insights.map((insight, i) => (
            <li
              key={i}
              className={`p-3 rounded border ${
                insight.risk === "High"
                  ? "border-red-400 bg-red-50"
                  : insight.risk === "Medium"
                  ? "border-yellow-400 bg-yellow-50"
                  : "border-green-400 bg-green-50"
              }`}
            >
              <span className="font-semibold">{insight.risk} Risk:</span>{" "}
              {insight.message}
            </li>
          ))}
        </ul>
      </div>

      {/* Evidence Panel Trigger */}
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => setShowEvidence(true)}
      >
        View Evidence
      </button>

      {/* Evidence Side Drawer */}
      {showEvidence && (
        <div className="fixed top-0 right-0 w-96 h-full bg-white shadow-lg p-6 overflow-y-auto">
          <button
            className="mb-4 text-red-500 font-semibold"
            onClick={() => setShowEvidence(false)}
          >
            Close ✖
          </button>
          <h3 className="text-xl font-bold mb-4">Evidence</h3>
          {contract.evidence.map((ev, i) => (
            <div key={i} className="mb-3 p-3 border rounded bg-gray-50">
              <p>
                <span className="font-semibold">Source:</span> {ev.source}
              </p>
              <p className="text-sm italic">"{ev.snippet}"</p>
              <p className="text-xs text-gray-500">
                Relevance: {(ev.relevance * 100).toFixed(1)}%
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContractDetail;
