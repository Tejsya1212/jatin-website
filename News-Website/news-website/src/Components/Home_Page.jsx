// Home.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Globe, TrendingUp, Search, Menu, X, Sun, Moon } from 'lucide-react';



// Sample news data
const featuredNews = {
  title: "Global Summit to Address Climate Change in Geneva",
  summary: "World leaders gather to discuss new emissions targets and green initiatives.",
  image: "/api/placeholder/800/500",
  category: "technology",
};

const topStories = [
  {
    id: 1,
    title: "Tech Giant Unveils Revolutionary AI Assistant",
    summary: "The new AI can understand complex contexts and generate human-like responses.",
    image: "/api/placeholder/400/250",
    category: "business",
  },
  {
    id: 2,
    title: "National Team Advances to World Cup Semi-Finals",
    summary: "Historic victory sets up showdown with defending champions next week.",
    image: "/api/placeholder/400/250",
    category: "sports",
  },
  {
    id: 3,
    title: "Award-Winning Director Announces New Film Project",
    summary: "Production set to begin next month with an all-star cast.",
    image: "/api/placeholder/400/250",
    category: "entertainment",
  },
];

const recentNews = [
  {
    id: 1,
    title: "Stock Market Reaches All-Time High",
    time: "2 hours ago",
    category: "business",
    name :"Business",
  },
  {
    id: 2,
    title: "City Council Approves New Infrastructure Plan",
    time: "3 hours ago",
    category: "technology",
    name : "National",
  },
  {
    id: 3,
    title: "Famous Actor Wins Prestigious Award",
    time: "5 hours ago",
    category: "entertainment",
    name:"Entertainment"
  },
  {
    id: 4,
    title: "Scientists Discover New Species in Amazon",
    time: "6 hours ago",
    category: "technology",
    name:"International",
  },
  {
    id: 5,
    title: "Local Team Signs Star Player in Record Deal",
    time: "8 hours ago",
    category: "sports",
    name:"Sports",
  },
];

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="container mx-auto px-4 py-8">

<header className={`sticky top-0 z-10 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
  <div className="container mx-auto px-4">
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center space-x-2">
        <Globe className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
        <h1 className="text-xl font-bold">Global News Hub</h1>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6">
        <Link to="/" className="hover:text-blue-500 font-medium">Home</Link>
        <Link to="/technology" className="hover:text-blue-500 font-medium">National</Link>
        <Link to="/technology" className="hover:text-blue-500 font-medium">International</Link>
        <Link to="/business" className="hover:text-blue-500 font-medium">Business</Link>
        <Link to="/entertainment" className="hover:text-blue-500 font-medium">Entertainment</Link>
      </nav>

      <div className="flex items-center space-x-4">
        <div className="hidden md:flex items-center border rounded-full px-3 py-1 bg-gray-100">
          <Search className="h-4 w-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search news..."
            className={`ml-2 outline-none bg-transparent ${darkMode ? 'placeholder-gray-400' : 'placeholder-gray-500'}`}
          />
        </div>

        {/* Toggle Button */}
        <button 
          className="p-2 rounded-full hover:bg-gray-200" 
          onClick={toggleDarkMode}
        >
          {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>

        {/* Menu Button */}
        <button 
          className="md:hidden p-2" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    {menuOpen && (
      <div className="md:hidden py-4 border-t">
        <div className="flex items-center border rounded px-3 py-2 bg-gray-100 mb-4">
          <Search className="h-4 w-4 text-gray-500" />
          <input 
            type="text" 
            placeholder="Search news..." 
            className={`ml-2 w-full outline-none bg-transparent ${darkMode ? 'placeholder-gray-400' : 'placeholder-gray-500'}`} 
          />
        </div>
        <nav className="flex flex-col space-y-3">
          <Link to="#" className="hover:text-blue-500 font-medium">Home</Link>
          <Link to="#" className="hover:text-blue-500 font-medium">National</Link>
          <Link to="#" className="hover:text-blue-500 font-medium">International</Link>
          <Link to="#" className="hover:text-blue-500 font-medium">Business</Link>
          <Link to="#" className="hover:text-blue-500 font-medium">Technology</Link>
        </nav>
      </div>
    )}

    {/* Category Tabs */}
    <div className="flex space-x-4 py-2 overflow-x-auto">
      <button 
        onClick={() => setActiveTab('all')} 
        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${activeTab === 'all' ? 'bg-blue-600 text-white' : darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-800'}`}
      >
        All News
      </button>

      {/* Use div or span instead of button inside button */}
      <div 
        onClick={() => navigate("technology")} 
        className={`cursor-pointer px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap flex items-center ${activeTab === 'national' ? 'bg-blue-600 text-white' : darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-800'}`}
      >
        <Globe className="h-4 w-4 mr-1" /> National
      </div>

      <div 
        onClick={() => navigate("technology")} 
        className={`cursor-pointer px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap flex items-center ${activeTab === 'international' ? 'bg-blue-600 text-white' : darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-800'}`}
      >
        <Globe className="h-4 w-4 mr-1" /> International
      </div>

      <div 
        className={`cursor-pointer px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap flex items-center ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-800'}`}
      >
        <TrendingUp className="h-4 w-4 mr-1" /> Trending
      </div>
    </div>
  </div>
</header>



      {/* Featured News */}
      <div className="mb-12">
        <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
          <div className="md:flex">
            <div className="md:w-2/3">
              <img
                src={featuredNews.image}
                alt="Featured news"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="md:w-1/3 p-6 flex flex-col justify-center">
              <span className="text-blue-600 uppercase tracking-wider text-sm font-semibold">
                {featuredNews.category}
              </span>
              <h1 className="text-3xl font-bold mt-2 mb-4">
                {featuredNews.title}
              </h1>
              <p className="text-gray-600 mb-6">{featuredNews.summary}</p>
              <Link
                to={`/${featuredNews.category}`}
                className="text-blue-600 font-semibold hover:underline"
              >
                Read more →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Top Stories */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">
          Top Stories
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {topStories.map((story) => (
            <div key={story.id} className="bg-white rounded-lg overflow-hidden shadow">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <span className="text-blue-600 uppercase tracking-wider text-xs font-semibold">
                  {story.category}
                </span>
                <h3 className="text-xl font-semibold mt-2 mb-2">
                  {story.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{story.summary}</p>
                <Link
                  to={`/${story.category}`}
                  className="text-blue-600 text-sm font-semibold hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent News */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">
          Recent Updates
        </h2>
        <div className="bg-white shadow rounded-lg">
          {recentNews.map((item, index) => (
            <div
              key={item.id}
              className={`p-4 flex items-center justify-between ${
                index !== recentNews.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              <div>
                <span className="text-blue-600 uppercase tracking-wider text-xs font-semibold">
                  {item.name}
                </span>
                <h3 className="text-lg font-medium mt-1">{item.title}</h3>
              </div>
              <div className="flex items-center">
                <span className="text-gray-500 text-sm mr-4">{item.time}</span>
                <Link
                  to={`/${item.category}`}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="bg-blue-50 rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
        <p className="text-gray-600 mb-6">
          Subscribe to our newsletter to receive the latest news directly in
          your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;