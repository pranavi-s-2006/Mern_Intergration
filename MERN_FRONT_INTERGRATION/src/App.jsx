import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import AddItems from './pages/AddItems';
import Cart from './pages/Cart';
import About from './pages/About';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';

function App() {
  // Initial products data
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Margherita Pizza",
      description: "Classic pizza with fresh tomatoes, mozzarella, and basil",
      price: 299,
      image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400"
    },
    {
      id: 2,
      name: "Chicken Burger",
      description: "Juicy grilled chicken with lettuce, tomato, and special sauce",
      price: 199,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400"
    },
    {
      id: 3,
      name: "Pasta Carbonara",
      description: "Creamy pasta with bacon, eggs, and parmesan cheese",
      price: 249,
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400"
    }
  ]);

  // Cart state
  const [cart, setCart] = useState([]);

  // Authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState('');

  // Add product function
  const addProduct = (newProduct) => {
    const product = {
      ...newProduct,
      id: Date.now() // Simple ID generation
    };
    setProducts([...products, product]);
  };

  // Delete product function
  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
    setCart(cart.filter(item => item.id !== id));
  };

  // Add to cart function
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remove from cart function
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Login function
  const login = (username) => {
    setIsLoggedIn(true);
    setUser(username);
  };

  // Logout function
  const logout = () => {
    setIsLoggedIn(false);
    setUser('');
  };

  return (
    <div className="min-h-screen bg-gradient-food">
      <Header 
        cart={cart} 
        isLoggedIn={isLoggedIn} 
        user={user} 
        logout={logout} 
      />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/products" 
            element={
              <Products 
                products={products} 
                addToCart={addToCart} 
                deleteProduct={deleteProduct} 
              />
            } 
          />
          <Route 
            path="/add-items" 
            element={<AddItems addProduct={addProduct} />} 
          />
          <Route 
            path="/cart" 
            element={
              <Cart 
                cart={cart} 
                removeFromCart={removeFromCart} 
                isLoggedIn={isLoggedIn} 
              />
            } 
          />
          <Route path="/about" element={<About />} />
          <Route 
            path="/login" 
            element={<Login login={login} isLoggedIn={isLoggedIn} />} 
          />
          <Route 
            path="/product/:id" 
            element={
              <ProductDetail 
                products={products} 
                addToCart={addToCart} 
              />
            } 
          />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;