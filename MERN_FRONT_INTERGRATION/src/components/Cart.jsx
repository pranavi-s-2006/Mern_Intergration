import { Link } from 'react-router-dom';

export default function Cart({ cart, setCart }) {
  const removeItem = (id) => {
    setCart(cart.filter(item => item._id !== id));
    alert("Item removed from cart!");
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price), 0);
  };

  const isLoggedIn = localStorage.getItem("user");

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            🛒 Your Food Cart
          </h1>
          <p className="text-xl text-gray-700">Review your delicious selections</p>
        </div>
        
        {cart.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl shadow-lg max-w-2xl mx-auto border border-green-200">
            <div className="text-8xl mb-6">🍽️</div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Your cart is empty</h3>
            <p className="text-gray-600 mb-8 text-lg">Add some delicious items to get started!</p>
            <Link 
              to="/products" 
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🍽️ Browse Menu
            </Link>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto space-y-6">
            {cart.map((item, index) => (
              <div key={`${item._id}-${index}`} className="bg-white rounded-2xl shadow-lg p-6 border border-green-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-6">
                  <div className="flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded-xl border-2 border-green-200 shadow-md"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-green-600">₹{item.price}</span>
                      <button 
                        onClick={() => removeItem(item._id)}
                        className="bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 text-white px-4 py-2 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-md"
                      >
                        🗑️ Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl shadow-2xl p-8">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold mb-4">🎉 Order Summary</h2>
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 inline-block">
                  <span className="text-lg font-semibold">Total Items: {cart.length}</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center mb-6 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                <span className="text-xl font-bold">Total Amount:</span>
                <span className="text-3xl font-bold">₹{getTotalPrice().toFixed(2)}</span>
              </div>
              
              {isLoggedIn ? (
                <button className="w-full bg-white text-green-600 py-4 px-6 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  🎯 Buy Now - Proceed to Checkout
                </button>
              ) : (
                <div className="text-center">
                  <p className="text-green-100 mb-4 text-lg">Please login to proceed with your order</p>
                  <Link 
                    to="/login"
                    className="inline-block bg-white text-green-600 py-4 px-8 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    🔐 Login to Buy Now
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}