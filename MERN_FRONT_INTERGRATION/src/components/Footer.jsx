export default function Footer() {
  return (
    <footer className="footer py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🍕</span>
              <span className="text-2xl font-bold">Food Paradise</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Delivering happiness, one meal at a time. Your favorite food, 
              delivered fresh and fast.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-orange-400 transition-colors">🏠 Home</a></li>
              <li><a href="/products" className="text-gray-300 hover:text-orange-400 transition-colors">🍽️ Products</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-orange-400 transition-colors">ℹ️ About</a></li>
              <li><a href="/cart" className="text-gray-300 hover:text-orange-400 transition-colors">🛒 Cart</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>📞 +91 98765 43210</li>
              <li>📧 hello@foodparadise.com</li>
              <li>📍 123 Food Street, Taste City</li>
              <li>🕒 24/7 Service</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-orange-400 transition-colors">📘</a>
              <a href="#" className="text-2xl hover:text-orange-400 transition-colors">📷</a>
              <a href="#" className="text-2xl hover:text-orange-400 transition-colors">🐦</a>
              <a href="#" className="text-2xl hover:text-orange-400 transition-colors">📺</a>
            </div>
            <p className="text-gray-300 mt-4 text-sm">
              Stay updated with our latest offers and new menu items!
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Food Paradise. Made with ❤️ for food lovers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}