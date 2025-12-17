import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddItems({ addProduct }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      addProduct({
        ...formData,
        price: parseFloat(formData.price)
      });
      
      alert('Product added successfully! 🎉');
      navigate('/products');
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-2xl mx-auto px-4">
        <div className="card p-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">📦</div>
            <h1 className="text-4xl font-bold mb-2">Add New Product</h1>
            <p className="text-gray-600">Fill in the details to add a delicious new item</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="form-label">Product Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter product name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div>
              <label className="form-label">Description</label>
              <textarea
                name="description"
                placeholder="Enter product description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="4"
                className="form-input"
              />
            </div>

            <div>
              <label className="form-label">Price (₹)</label>
              <input
                type="number"
                name="price"
                placeholder="Enter price"
                value={formData.price}
                onChange={handleChange}
                required
                min="0"
                step="0.01"
                className="form-input"
              />
            </div>

            <div>
              <label className="form-label">Image URL</label>
              <input
                type="url"
                name="image"
                placeholder="Enter image URL"
                value={formData.image}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            {formData.image && (
              <div className="text-center">
                <p className="form-label">Preview:</p>
                <img 
                  src={formData.image} 
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
              className="btn btn-primary w-full text-lg py-4"
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
  );
}