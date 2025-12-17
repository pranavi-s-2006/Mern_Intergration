import { Link } from 'react-router-dom';

export default function Header({ cart, isLoggedIn, user, logout }) {
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-gradient-orange text-white shadow-2xl sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-3xl font-bold hover:text-orange-200 transition-colors flex items-center space-x-2">
            <span>🍕</span>
            <span>Food Paradise</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-lg font-semibold hover:text-orange-200 transition-colors hover:scale-105 transform duration-200">
              🏠 Home
            </Link>
            <Link to="/products" className="text-lg font-semibold hover:text-orange-200 transition-colors hover:scale-105 transform duration-200">
              🍽️ Products
            </Link>
            <Link to="/add-items" className="text-lg font-semibold hover:text-orange-200 transition-colors hover:scale-105 transform duration-200">
              ➕ Add Items
            </Link>
            <Link to="/cart" className="text-lg font-semibold hover:text-orange-200 transition-colors hover:scale-105 transform duration-200">
              🛒 Cart ({cartItemCount})
            </Link>
            <Link to="/about" className="text-lg font-semibold hover:text-orange-200 transition-colors hover:scale-105 transform duration-200">
              ℹ️ About
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-3">
                <span className="text-orange-200">👋 {user}</span>
                <button 
                  onClick={logout}
                  className="btn btn-danger"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link 
                to="/login"
                className="btn btn-success"
              >
                🔐 Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}