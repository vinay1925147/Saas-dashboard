import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (password === "test123") {
      const mockJWT = "mock-jwt-token-12345";

      localStorage.setItem("token", mockJWT);
      localStorage.setItem("username", username);

      // Navigate to dashboard
      navigate("/dashboard");
    } else {
      setError("Invalid password. Hint: use 'test123'");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-slate-900">
      <div className="bg-white shadow-md rounded-lg p-8 w-96">
        <h2 className="text-2xl text-slate-500 font-bold  text-center mb-6">Login</h2>
        {error && <p className="text-red-500 text-lg mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-800 mb-1">Username </label>
            <input
              type="text"
              className=" text-slate-500 w-full border text-sm px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-800 mb-1">Password</label>
            <input
              type="password"
              className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login ;
