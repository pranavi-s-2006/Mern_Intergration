export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🍕</div>
            <h1 className="text-5xl font-bold mb-4">About Food Paradise</h1>
            <p className="text-xl text-gray-600">Your favorite food delivery destination</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Food Paradise was born from a simple idea: everyone deserves access to delicious, 
                high-quality food delivered right to their doorstep. We started as a small team 
                of food enthusiasts who believed that great taste shouldn't be compromised by convenience.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we're proud to serve thousands of happy customers with our carefully curated 
                menu of mouth-watering dishes, prepared with love and delivered with care.
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To bring people together through amazing food experiences, 
                one delivery at a time.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="card p-6 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">30 minutes or less, guaranteed!</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="text-4xl mb-4">👨‍🍳</div>
              <h3 className="text-xl font-bold mb-2">Expert Chefs</h3>
              <p className="text-gray-600">Prepared by culinary professionals</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold mb-2">Fresh Ingredients</h3>
              <p className="text-gray-600">Only the finest, freshest ingredients</p>
            </div>
          </div>

          <div className="card p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-bold mb-2 text-orange-600">🎯 Quality First</h3>
                <p className="text-gray-600 mb-4">
                  We never compromise on quality. Every dish is prepared with care and attention to detail.
                </p>
                
                <h3 className="text-xl font-bold mb-2 text-orange-600">💰 Great Value</h3>
                <p className="text-gray-600">
                  Delicious food at prices that won't break the bank. Quality doesn't have to be expensive.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-orange-600">🤝 Customer First</h3>
                <p className="text-gray-600 mb-4">
                  Your satisfaction is our priority. We're here to make your food experience amazing.
                </p>
                
                <h3 className="text-xl font-bold mb-2 text-orange-600">🌍 Community</h3>
                <p className="text-gray-600">
                  We're proud to be part of your community, bringing people together through food.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}