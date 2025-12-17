import { useParams, Link } from 'react-router-dom';

export default function ProductDetail({ products, addToCart }) {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-4">😕</div>
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <Link to="/products" className="btn btn-primary">
            🍽️ Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="card p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Product Image */}
              <div>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* Product Details */}
              <div>
                <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="text-3xl font-bold text-orange-600 mb-8">
                  ₹{product.price}
                </div>

                <div className="space-y-4">
                  <button 
                    onClick={() => addToCart(product)}
                    className="btn btn-primary w-full text-xl py-4"
                  >
                    🛒 Add to Cart
                  </button>
                  
                  <Link 
                    to="/products"
                    className="btn btn-secondary w-full text-center"
                  >
                    ← Back to Products
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="card p-6 text-center">
              <div className="text-3xl mb-2">🚀</div>
              <h3 className="font-bold mb-2">Fast Delivery</h3>
              <p className="text-sm text-gray-600">Delivered in 30 minutes</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="text-3xl mb-2">🌟</div>
              <h3 className="font-bold mb-2">Fresh & Hot</h3>
              <p className="text-sm text-gray-600">Made with fresh ingredients</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="text-3xl mb-2">💰</div>
              <h3 className="font-bold mb-2">Best Price</h3>
              <p className="text-sm text-gray-600">Great value for money</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}