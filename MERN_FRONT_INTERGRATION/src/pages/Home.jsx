import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-orange text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl font-bold mb-6">
              Welcome to Food Paradise 🍕
            </h1>
            <p className="text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
              Discover delicious food from the comfort of your home. 
              Fresh ingredients, amazing flavors, delivered fast!
            </p>
            <Link 
              to="/products" 
              className="btn btn-secondary text-xl px-8 py-4 animate-bounce"
            >
              🍽️ Order Your Favorite Food
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Food Paradise?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-6 text-center animate-slide-up">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4">Fast Delivery</h3>
              <p className="text-gray-600">Get your food delivered in 30 minutes or less!</p>
            </div>
            
            <div className="card p-6 text-center animate-slide-up">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold mb-4">Quality Food</h3>
              <p className="text-gray-600">Fresh ingredients and authentic recipes every time.</p>
            </div>
            
            <div className="card p-6 text-center animate-slide-up">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-4">Best Prices</h3>
              <p className="text-gray-600">Affordable prices without compromising on quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-food py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Order?</h2>
          <p className="text-xl mb-8">Browse our delicious menu and place your order now!</p>
          <Link 
            to="/products" 
            className="btn btn-primary text-xl px-8 py-4"
          >
            🛒 Browse Menu
          </Link>
        </div>
      </section>
    </div>
  );
}