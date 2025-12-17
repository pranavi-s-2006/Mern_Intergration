import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      alert("Please enter your email");
      return;
    }
    
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      localStorage.setItem("user", email);
      alert("Login successful!");
      navigate("/");
      setLoading(false);
    }, 1000);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center py-12">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🔐</div>
            <h2 className="text-4xl font-bold text-gray-800 mb-2">Welcome Back!</h2>
            <p className="text-gray-600">Sign in to access your account</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all bg-gray-50 focus:bg-white"
              />
            </div>
            
            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed shadow-lg"
            >
              {loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Signing In...</span>
                </div>
              ) : (
                "🚀 Sign In"
              )}
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <p className="text-sm text-gray-700">
                New to MERN Store? 
                <span className="text-blue-600 font-semibold ml-1 cursor-pointer hover:underline">
                  Create an account
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}