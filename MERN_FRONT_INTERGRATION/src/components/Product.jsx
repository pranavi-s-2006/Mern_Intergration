import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API } from "../utils/api";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API}/api/getproduct`)
      .then((res) => res.json())
      .then((allproducts) => {
        const foundProduct = allproducts.find((p) => p._id === id);
        setProduct(foundProduct);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-100">
        <div className="animate-spin h-14 w-14 rounded-full border-b-4 border-pink-500"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-100">
        <div className="bg-white p-10 rounded-2xl shadow-xl text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Product Not Found 😕
          </h2>
          <Link
            to="/products"
            className="inline-block mt-4 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-2xl p-10 relative">
          
          {/* Price badge */}
          <span className="absolute top-6 right-6 bg-green-500 text-white px-4 py-1 rounded-full font-semibold">
            ₹{product.price}
          </span>

          <div className="flex flex-col md:flex-row items-center gap-10">
            
            {/* Image */}
            <div className="w-64 h-64 rounded-full overflow-hidden border-8 border-pink-100 shadow-lg">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                {product.title}
              </h1>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {product.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to={`/buynow/${product._id}`}
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg text-center transition transform hover:scale-105"
                >
                  🛒 Buy Now
                </Link>

                <Link
                  to="/products"
                  className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-center transition"
                >
                  ← Back to Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
