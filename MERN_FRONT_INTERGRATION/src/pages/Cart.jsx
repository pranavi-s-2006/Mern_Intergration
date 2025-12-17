export default function Cart({ cart, removeFromCart, isLoggedIn }) {
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-xl text-gray-600 mb-8">Add some delicious items to get started!</p>
          <a href="/products" className="btn btn-primary">
            🍽️ Browse Products
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">🛒 Your Cart</h1>
          <p className="text-xl text-gray-600">Review your order before checkout</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6 mb-8">
            {cart.map((item) => (
              <div key={item.id} className="card p-6 flex items-center gap-6">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-xl"
                />
                
                <div className="flex-grow">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-lg font-semibold text-orange-600">₹{item.price}</span>
                    <span className="text-gray-600">Quantity: {item.quantity}</span>
                    <span className="text-lg font-bold">Total: ₹{item.price * item.quantity}</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="btn btn-danger"
                >
                  🗑️ Remove
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="card p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Order Summary</h2>
            <div className="text-xl mb-6">
              <p className="mb-2">Total Items: <span className="font-bold">{totalItems}</span></p>
              <p className="text-2xl font-bold text-orange-600">Total Price: ₹{totalPrice}</p>
            </div>

            {isLoggedIn ? (
              <button className="btn btn-success text-xl px-8 py-4">
                🎉 Buy Now - Place Order
              </button>
            ) : (
              <div>
                <p className="text-red-500 mb-4 text-lg">
                  ⚠️ Please login to place your order.
                </p>
                <a href="/login" className="btn btn-primary">
                  🔐 Login to Continue
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}