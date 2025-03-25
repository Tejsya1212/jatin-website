import React from "react"
import { useState, useEffect } from 'react';
import { Globe, Home, TrendingUp, Search, Menu, X, Sun, Moon } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function NewsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const navigate = useNavigate()
  
  // Mock news data
  const newsItems = [
    {
      id: 1,
      title: "Global Climate Summit Reaches Historic Agreement",
      description: "Leaders from over 190 countries agree to ambitious new carbon reduction targets at the annual climate conference.",
      category: "international",
      source: "Global News Network",
      time: "3 hours ago",
      featured: true
    },
    {
      id: 2,
      title: "National Infrastructure Bill Passes Senate",
      description: "A $1.2 trillion bill to rebuild roads, bridges and expand broadband access has passed with bipartisan support.",
      category: "national",
      source: "Capital Report",
      time: "5 hours ago",
      featured: true
    },
    {
      id: 3,
      title: "Tech Giants Face New Antitrust Regulations",
      description: "Lawmakers introduce sweeping new legislation aimed at curbing the market power of major technology companies.",
      category: "national",
      source: "Tech Daily",
      time: "7 hours ago",
      featured: false
    },
    {
      id: 4,
      title: "Peace Talks Resume in Middle East Conflict",
      description: "Diplomatic efforts intensify as mediators work to establish a ceasefire between warring factions.",
      category: "international",
      source: "World Affairs Journal",
      time: "10 hours ago",
      featured: false
    },
    {
      id: 5,
      title: "Central Bank Signals Interest Rate Changes",
      description: "Economic forecasts suggest potential policy adjustments in response to inflation concerns.",
      category: "national",
      source: "Financial Times",
      time: "1 day ago",
      featured: false
    },
    {
      id: 6,
      title: "International Space Station Welcomes New Crew",
      description: "Three astronauts and a cosmonaut successfully dock after two-day journey to the orbital laboratory.",
      category: "international",
      source: "Space Science Today",
      time: "1 day ago",
      featured: false
    }
  ];

  const filteredNews = activeTab === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeTab);
  
  const featuredNews = newsItems.filter(item => item.featured);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      {/* Header */}
      
      
      <main className="container mx-auto px-4 py-6">
        {/* Featured News */}
        {activeTab === 'all' && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Featured News</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredNews.map(item => (
                <div 
                  key={item.id} 
                  className={`rounded-lg overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                >
                  <div className={`h-48 bg-gray-300 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}>
                    <img src={`/api/placeholder/600/300`} alt="News thumbnail" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className={`text-xs font-semibold px-2 py-1 rounded ${item.category === 'national' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}>
                        {item.category === 'national' ? 'National' : 'International'}
                      </span>
                      <span className="text-xs text-gray-500">{item.time}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {item.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        Source: {item.source}
                      </span>
                      <button className={`text-sm font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                        Read more →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
        
        {/* Latest News */}
        <section>
          <h2 className="text-2xl font-bold mb-6">
            {activeTab === 'all' ? 'Latest News' : 
             activeTab === 'national' ? 'National News' : 'International News'}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map(item => (
              <div 
                key={item.id} 
                className={`rounded-lg overflow-hidden shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
              >
                <div className={`h-40 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}>
                  <img src={`/api/placeholder/400/200`} alt="News thumbnail" className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${item.category === 'national' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}>
                      {item.category === 'national' ? 'National' : 'International'}
                    </span>
                    <span className="text-xs text-gray-500">{item.time}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {item.source}
                    </span>
                    <button className={`text-sm font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                      Read more →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className={`py-8 mt-10 border-t ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'}`}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Globe className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                <h1 className="text-xl font-bold">Global News Hub</h1>
              </div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Your trusted source for national and international news coverage.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Categories</h3>
              <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <li>National</li>
                <li>International</li>
                <li>Politics</li>
                <li>Business</li>
                <li>Technology</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <li>About Us</li>
                <li>Contact</li>
                <li>Careers</li>
                <li>Advertise</li>
                <li>Ethics Policy</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Subscribe</h3>
              <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Get the latest news delivered to your inbox
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className={`px-3 py-2 text-sm rounded-l-md w-full outline-none ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}`}
                />
                <button className="bg-blue-600 text-white px-4 py-2 text-sm rounded-r-md font-medium hover:bg-blue-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className={`mt-8 pt-6 border-t text-center text-sm ${darkMode ? 'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-600'}`}>
            <p>© 2025 Global News Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}