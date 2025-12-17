import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import {API} from "../utils/api";

export default function BuyNow() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${API}/api/getproduct`)
            .then(res => res.json())
            .then(allproducts => {
                const foundProduct = allproducts.find((p) => p._id === id);
                setProduct(foundProduct);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 flex justify-center items-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Processing your order...</p>
                </div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 flex justify-center items-center">
                <div className="text-center bg-white rounded-2xl shadow-lg p-12 max-w-md">
                    <div className="text-8xl mb-6">😕</div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Product Not Found</h2>
                    <Link 
                        to="/products"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                        ← Back to Products
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8 text-center">
                    <div className="mb-8">
                        <div className="text-8xl mb-6 animate-bounce">🎉</div>
                        <h1 className="text-4xl font-bold text-green-600 mb-4">Order Confirmed!</h1>
                        <p className="text-gray-600 text-lg">Thank you for your purchase!</p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-xl p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Details</h2>
                        
                        <div className="flex items-center justify-center mb-6">
                            <img 
                                src={product.image} 
                                alt={product.title}
                                className="w-24 h-24 object-cover rounded-xl border-2 border-gray-200 mr-6"
                            />
                            <div className="text-left">
                                <h3 className="text-xl font-bold text-gray-800">{product.title}</h3>
                                <p className="text-gray-600 mt-2">{product.description}</p>
                            </div>
                        </div>
                        
                        <div className="border-t pt-4">
                            <div className="flex justify-between items-center text-xl">
                                <span className="font-semibold text-gray-700">Total Amount:</span>
                                <span className="font-bold text-green-600">₹{product.price}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="space-y-4">
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                            <p className="text-blue-800 font-semibold">
                                📧 Confirmation email sent to your registered email
                            </p>
                        </div>
                        
                        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                            <p className="text-yellow-800 font-semibold">
                                🚚 Your order will be delivered within 3-5 business days
                            </p>
                        </div>
                        
                        <div className="flex space-x-4 mt-8">
                            <Link 
                                to="/products"
                                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                            >
                                🛍️ Continue Shopping
                            </Link>
                            
                            <Link 
                                to="/"
                                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                            >
                                🏠 Go Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}