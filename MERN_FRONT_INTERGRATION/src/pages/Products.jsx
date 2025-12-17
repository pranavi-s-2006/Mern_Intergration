import { Link } from 'react-router-dom';

export default function Products({ products, addToCart, deleteProduct }) {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">🍽️ Our Delicious Menu</h1>
          <p className="text-xl text-gray-600">Choose from our amazing selection of food</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="card p-6 hover:shadow-2xl transition-all flex flex-col items-center">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-50 h-50 object-cover rounded-xl mb-4"
              />
              
              <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
              
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-orange-600">₹{product.price}</span>
              </div>
              
              <div className="flex gap-2">
                <Link 
                  to={`/product/${product.id}`}
                  className="btn btn-secondary flex-1 text-center"
                >
                  👁️ View Product
                </Link>
                
                <button 
                  onClick={() => {
                    addToCart(product);
                    alert(`${product.name} added to cart! 🛒`);
                  }}
                  className="btn btn-primary flex-1"
                >
                  🛒 Add to Cart
                </button>
              </div>
              
              <button 
                onClick={() => deleteProduct(product.id)}
                className="btn btn-danger w-full mt-2"
              >
                🗑️ Delete
              </button>
            </div>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🍽️</div>
            <h2 className="text-3xl font-bold mb-4">No products available</h2>
            <p className="text-xl text-gray-600 mb-8">Add some delicious items to get started!</p>
            <Link to="/add-items" className="btn btn-primary">
              ➕ Add Your First Product
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}