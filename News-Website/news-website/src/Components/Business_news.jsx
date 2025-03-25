// Business.jsx
import React from "react";
import { Link } from "react-router-dom";

// Sample business news data
const featuredBusinessNews = {
  title: "Global Markets Rally as Economic Outlook Improves",
  summary: "Major stock indices reach record highs as inflation concerns ease and central banks signal supportive policies.",
  image: "/api/placeholder/800/500",
  author: "Michael Richardson",
  time: "Today, 10:30 AM"
};

const businessNews = [
  {
    id: 1,
    title: "Tech Giant Unveils Revolutionary AI Platform for Businesses",
    summary: "New system promises to automate complex processes and reduce operational costs by up to 40%.",
    image: "/api/placeholder/400/250",
    time: "2 hours ago",
    category: "Technology",
    author: "Sarah Johnson"
  },
  {
    id: 2,
    title: "Renewable Energy Startups Attract Record Investment in Q1",
    summary: "Venture capital firms poured $15.8 billion into clean energy innovations as the sector continues to boom.",
    image: "/api/placeholder/400/250",
    time: "4 hours ago",
    category: "Startups",
    author: "David Chen"
  },
  {
    id: 3,
    title: "Major Retail Chain Announces Ambitious Expansion Plan",
    summary: "The company plans to open 200 new locations nationwide and create over 10,000 jobs.",
    image: "/api/placeholder/400/250",
    time: "6 hours ago",
    category: "Retail",
    author: "Emma Thompson"
  },
  {
    id: 4,
    title: "Supply Chain Challenges Ease as Global Shipping Costs Decline",
    summary: "Businesses report improved delivery times and lower logistics expenses as bottlenecks clear.",
    image: "/api/placeholder/400/250",
    time: "9 hours ago",
    category: "Logistics",
    author: "Robert Williams"
  },
];

const marketIndices = [
  { name: "S&P 500", value: "5,246.85", change: "+34.57", changePercent: "+0.66%", trend: "up" },
  { name: "Dow Jones", value: "39,875.24", change: "+145.92", changePercent: "+0.37%", trend: "up" },
  { name: "Nasdaq", value: "16,742.39", change: "+151.06", changePercent: "+0.91%", trend: "up" },
  { name: "Russell 2000", value: "2,105.67", change: "-3.45", changePercent: "-0.16%", trend: "down" },
];

const topStocks = [
  { symbol: "AAPL", name: "Apple Inc.", price: "192.53", change: "+3.14", changePercent: "+1.66%", trend: "up" },
  { symbol: "MSFT", name: "Microsoft Corp", price: "415.28", change: "+7.56", changePercent: "+1.85%", trend: "up" },
  { symbol: "NVDA", name: "NVIDIA Corp", price: "925.17", change: "+31.92", changePercent: "+3.57%", trend: "up" },
  { symbol: "AMZN", name: "Amazon.com Inc.", price: "182.45", change: "+2.83", changePercent: "+1.58%", trend: "up" },
  { symbol: "TSLA", name: "Tesla Inc.", price: "175.34", change: "-3.46", changePercent: "-1.93%", trend: "down" },
];

const Business = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Business & Finance</h1>
        <p className="text-gray-600">
          Latest market updates, company news, and economic trends
        </p>
      </div>

      {/* Market Overview Banner */}
      <div className="bg-blue-50 rounded-lg p-4 mb-8 shadow-sm">
        <div className="flex flex-wrap justify-between">
          {marketIndices.map((index) => (
            <div key={index.name} className="p-2 text-center flex-1 min-w-min">
              <h3 className="text-gray-700 font-medium text-sm md:text-base">{index.name}</h3>
              <p className="text-lg font-bold">{index.value}</p>
              <p className={`text-sm font-medium ${index.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {index.change} ({index.changePercent})
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Business News */}
      <div className="mb-12">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="md:flex">
            <div className="md:w-3/5">
              <img
                src={featuredBusinessNews.image}
                alt="Featured business news"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="md:w-2/5 p-6 flex flex-col justify-center">
              <h1 className="text-3xl font-bold mb-4">{featuredBusinessNews.title}</h1>
              <p className="text-gray-600 mb-6">{featuredBusinessNews.summary}</p>
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                <div>
                  <p className="font-medium">{featuredBusinessNews.author}</p>
                  <p className="text-gray-500 text-sm">{featuredBusinessNews.time}</p>
                </div>
              </div>
              <Link
                to="#"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Read full analysis
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Top Stocks and Business News */}
      <div className="flex flex-col lg:flex-row gap-8 mb-12">
        {/* Top Stocks */}
        <div className="lg:w-1/3">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">
            Top Movers
          </h2>
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Symbol
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Change
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {topStocks.map((stock) => (
                  <tr key={stock.symbol} className="hover:bg-gray-50 transition">
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-blue-600">{stock.symbol}</div>
                        <div className="text-xs text-gray-500">{stock.name}</div>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${stock.price}
                    </td>
                    <td className={`px-4 py-4 whitespace-nowrap text-sm text-right ${stock.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      <div className="font-medium">{stock.changePercent}</div>
                      <div className="text-xs">{stock.change}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="bg-gray-50 px-4 py-3 text-right">
              <Link to="#" className="text-blue-600 text-sm font-medium hover:underline">
                View complete market data →
              </Link>
            </div>
          </div>
        </div>

        {/* Business News List */}
        <div className="lg:w-2/3">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">
            Latest Business News
          </h2>
          <div className="space-y-6">
            {businessNews.map((news) => (
              <div key={news.id} className="bg-white rounded-lg overflow-hidden shadow flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-4 flex flex-col">
                  <div className="flex items-center text-sm mb-2">
                    <span className="text-blue-600 font-semibold">{news.category}</span>
                    <span className="mx-2 text-gray-300">|</span>
                    <span className="text-gray-500">{news.time}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 flex-grow">{news.summary}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gray-200 mr-2"></div>
                      <span className="text-sm font-medium">{news.author}</span>
                    </div>
                    <Link
                      to="#"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industry Analysis */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">
          Industry Analysis
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">Technology Sector Overview</h3>
            <p className="text-gray-600 mb-4">
              AI and chip companies continue to lead market growth as demand for computing power increases. Regulatory concerns remain a challenge for major platforms.
            </p>
            <Link to="#" className="text-blue-600 font-medium hover:underline">Read analysis →</Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">Banking & Finance Report</h3>
            <p className="text-gray-600 mb-4">
              Interest rate stability has improved lending outlook. Regional banks show stronger-than-expected performance in latest earnings reports.
            </p>
            <Link to="#" className="text-blue-600 font-medium hover:underline">Read analysis →</Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">Energy Transition Watch</h3>
            <p className="text-gray-600 mb-4">
              Traditional oil & gas companies accelerate renewable investments. Battery technology breakthroughs promise to reduce EV production costs.
            </p>
            <Link to="#" className="text-blue-600 font-medium hover:underline">Read analysis →</Link>
          </div>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="bg-gray-50 rounded-lg p-6 shadow-md">
        <div className="md:flex items-center">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
            <h2 className="text-2xl font-bold mb-2">Business Insider Newsletter</h2>
            <p className="text-gray-600">
              Get expert analysis, market updates, and investment insights delivered to your inbox twice weekly.
            </p>
          </div>
          <div className="md:w-1/3">
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
      </div>
    </div>
  );
};

export default Business;