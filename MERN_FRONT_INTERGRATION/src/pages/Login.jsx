import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ login, isLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      if (username.trim() && password.trim()) {
        login(username);
        alert(`Welcome back, ${username}! 🎉`);
        navigate('/');
      } else {
        alert('Please enter both username and password');
      }
      setLoading(false);
    }, 1000);
  };

  if (isLoggedIn) {
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-4">✅</div>
          <h1 className="text-4xl font-bold mb-4">Already Logged In!</h1>
          <p className="text-xl text-gray-600 mb-8">You're already signed in to Food Paradise</p>
          <a href="/" className="btn btn-primary">
            🏠 Go to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-md mx-auto px-4">
        <div className="card p-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🔐</div>
            <h1 className="text-4xl font-bold mb-2">Welcome Back!</h1>
            <p className="text-gray-600">Sign in to your Food Paradise account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="form-label">Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="form-input"
              />
            </div>

            <div>
              <label className="form-label">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="form-input"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full text-lg py-4"
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

          <div className="mt-8 p-4 bg-blue-50 rounded-xl">
            <h3 className="font-bold mb-2">Demo Credentials:</h3>
            <p className="text-sm text-gray-600">
              Username: <span className="font-mono">demo</span><br />
              Password: <span className="font-mono">password</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}