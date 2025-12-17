import React, { useState } from 'react'
import {API} from "../utils/api";
import { useNavigate } from 'react-router-dom';

export default function AddProducts() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${API}/api/postproduct`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          description,
          price,
          image
        })
      });
      if (res.ok) {
        alert("Product Added Successfully!");
        navigate('/products');
      }    
    } catch (error) {
      console.log(error);
      alert("Server error");  
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 py-20">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-blue rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">📦</div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Add New Product</h1>
            <p className="text-gray-600">Fill in the details to add a new product</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Product Name
              </label>
              <input
                type="text"
                placeholder="Enter product name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all bg-gray-50 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Description
              </label>
              <textarea
                placeholder="Enter product description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                rows="4"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all bg-gray-50 focus:bg-white resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Price (₹)
              </label>
              <input
                type="number"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                min="0"
                step="0.01"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all bg-gray-50 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Image URL
              </label>
              <input
                type="url"
                placeholder="Enter image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all bg-gray-50 focus:bg-white"
              />
            </div>

            {image && (
              <div className="text-center">
                <p className="text-sm font-semibold text-gray-700 mb-2">Preview:</p>
                <img 
                  src={image} 
                  alt="Preview" 
                  className="w-32 h-32 object-cover rounded-xl border-2 border-gray-200 mx-auto"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed shadow-lg"
            >
              {loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Adding Product...</span>
                </div>
              ) : (
                "✨ Add Product"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}