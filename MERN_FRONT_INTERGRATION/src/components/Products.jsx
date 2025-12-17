import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {API} from "../utils/api";

export default function Products({ setCart, cart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch(`${API}/api/getproduct`)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
    alert("Product added to cart!");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 flex justify-center items-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-600 mx-auto mb-4"></div>
          <p className="text-gray-700">Loading delicious products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
            🍽️ Our Delicious Menu
          </h1>
          <p className="text-xl text-gray-700">Discover our mouth-watering collection of fresh food items</p>
        </div>
        
        {products.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl shadow-lg max-w-2xl mx-auto border border-orange-200">
            <div className="text-8xl mb-6">🍽️</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">No products available</h3>
            <p className="text-gray-600 mb-8">Our chefs are preparing something amazing!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map(product => (
              <div key={product._id} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-200">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                    ₹{product.price}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{product.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="space-y-3">
                    <Link 
                      to={`/product/${product._id}`}
                      className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-md text-center block"
                    >
                      👁️ View Product
                    </Link>
                    
                    <button 
                      onClick={() => addToCart(product)}
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-md"
                    >
                      🛒 Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}