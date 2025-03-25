// Sports.jsx
import React from "react";
import { Link } from "react-router-dom";

// Sample sports news data
const featuredSportsNews = {
  title: "National Team Secures Historic Victory in World Cup Qualifier",
  summary: "An incredible last-minute goal sends the team to the next round in dramatic fashion.",
  image: "/api/placeholder/800/500",
};

const sportsNews = [
  {
    id: 1,
    title: "Tennis Star Claims Fifth Grand Slam Title",
    summary: "A dominant performance in the final caps off an incredible tournament run.",
    image: "/api/placeholder/400/250",
    time: "3 hours ago",
  },
  {
    id: 2,
    title: "Local Basketball Team Breaks League Scoring Record",
    summary: "The team's offensive prowess was on full display in last night's game.",
    image: "/api/placeholder/400/250",
    time: "5 hours ago",
  },
  {
    id: 3,
    title: "Formula 1 Driver Announces Retirement After Championship Season",
    summary: "The surprising announcement comes just weeks after claiming the title.",
    image: "/api/placeholder/400/250",
    time: "8 hours ago",
  },
  {
    id: 4,
    title: "Olympic Committee Reveals New Sports for Next Summer Games",
    summary: "Several new competitions will make their Olympic debut next year.",
    image: "/api/placeholder/400/250",
    time: "12 hours ago",
  },
];

const upcomingEvents = [
  {
    id: 1,
    title: "Premier League: Manchester United vs. Liverpool",
    date: "Tomorrow, 8:00 PM",
    venue: "Old Trafford, Manchester",
  },
  {
    id: 2,
    title: "NBA: Lakers vs. Warriors",
    date: "Saturday, 7:30 PM",
    venue: "Crypto.com Arena, Los Angeles",
  },
  {
    id: 3,
    title: "Tennis: Grand Slam Final",
    date: "Sunday, 2:00 PM",
    venue: "Centre Court, London",
  },
];

const Sports = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Sports</h1>
        <p className="text-gray-600">
          The latest updates from the world of sports
        </p>
      </div>

      {/* Featured Sports News */}
      <div className="mb-12">
        <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
          <img
            src={featuredSportsNews.image}
            alt="Featured sports news"
            className="w-full h-96 object-cover"
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{featuredSportsNews.title}</h1>
            <p className="text-gray-600 mb-6">{featuredSportsNews.summary}</p>
            <Link to="/sports" className="text-blue-600 font-semibold hover:underline">
  Read more →
</Link>

          </div>
        </div>
      </div>

      {/* Sports News Grid */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">
          Latest Sports News
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sportsNews.map((news) => (
            <div key={news.id} className="bg-white rounded-lg overflow-hidden shadow">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{news.summary}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">{news.time}</span>
                  <Link to="/sports" className="text-blue-600 font-semibold hover:underline">
  Read more →
</Link>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">
          Upcoming Events
        </h2>
        <div className="bg-white shadow rounded-lg">
          {upcomingEvents.map((event, index) => (
            <div
              key={event.id}
              className={`p-4 ${
                index !== upcomingEvents.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <div className="flex flex-col sm:flex-row sm:justify-between text-gray-600">
                <div className="flex items-center mb-2 sm:mb-0">
                  <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>{event.venue}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Standings */}
      <div>
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">
          Premier League Standings
        </h2>
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Position
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Team
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Played
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Won
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Drawn
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Lost
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Points
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Manchester City</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">27</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">21</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">66</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Liverpool</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">27</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">19</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">6</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">63</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Arsenal</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">27</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">18</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">58</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Manchester United</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">27</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">7</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">50</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">5</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Chelsea</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">27</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">13</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">8</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">6</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">47</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Sports;