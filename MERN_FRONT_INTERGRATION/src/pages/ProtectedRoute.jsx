import React from 'react'
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({children}) {
    const isLoggedIn = localStorage.getItem("user");
    
    if (!isLoggedIn) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 flex items-center justify-center">
                <div className="text-center bg-white rounded-2xl shadow-lg p-12 max-w-md">
                    <div className="text-8xl mb-6">🔒</div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Access Restricted</h2>
                    <p className="text-gray-600 mb-8">Please login to access this page</p>
                    <Navigate to="/login" replace />
                </div>
            </div>
        );
    }
    
    return children;
}