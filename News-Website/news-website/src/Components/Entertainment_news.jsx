// Entertainment.jsx
import React from "react";
import { Link } from "react-router-dom";

// Sample entertainment news data
const featuredStory = {
  title: "Award Show Highlights: 'Eternal Shadows' Sweeps Major Categories",
  summary: "The groundbreaking psychological thriller took home seven awards including Best Picture and Best Director at last night's ceremony.",
  image: "/api/placeholder/800/500",
  category: "Awards",
  author: "Jessica Campbell",
  time: "Today, 11:45 AM"
};

const entertainmentCategories = [
  { name: "Movies", icon: "🎬" },
  { name: "Television", icon: "📺" },
  { name: "Music", icon: "🎵" },
  { name: "Celebrity", icon: "⭐" },
  { name: "Theater", icon: "🎭" },
  { name: "Books", icon: "📚" }
];

const entertainmentNews = [
  {
    id: 1,
    title: "Global Music Tour Breaks Attendance Records Across Three Continents",
    summary: "The record-breaking stadium tour has already sold over 2 million tickets with more dates being added.",
    image: "/api/placeholder/400/250",
    category: "Music",
    time: "3 hours ago",
    author: "Marcus Reynolds"
  },
  {
    id: 2,
    title: "Streaming Platform Orders Two Additional Seasons of Fan-Favorite Comedy",
    summary: "The surprise renewal comes after the show's fourth season became the most-watched series in the platform's history.",
    image: "/api/placeholder/400/250",
    category: "Television",
    time: "5 hours ago",
    author: "Alicia Wong"
  },
  {
    id: 3,
    title: "Hollywood Power Couple Announces Joint Production Company",
    summary: "The actors will develop films, television series, and documentaries through their new venture with a focus on underrepresented voices.",
    image: "/api/placeholder/400/250",
    category: "Celebrity",
    time: "9 hours ago",
    author: "Daniel Peterson"
  },
  {
    id: 4,
    title: "Director Reveals Ambitious Plans for Sci-Fi Universe Expansion",
    summary: "The franchise will grow with three interconnected films and a television series over the next five years.",
    image: "/api/placeholder/400/250",
    category: "Movies",
    time: "Yesterday",
    author: "Sophia Garcia"
  },
];

const celebrityInterviews = [
  {
    name: "Emma Richards",
    role: "Academy Award-Winning Actress",
    quote: "My next role pushed me to emotional places I've never explored before. It was terrifying and exhilarating.",
    image: "/api/placeholder/150/150"
  },
  {
    name: "James Wilson",
    role: "Director & Screenwriter",
    quote: "The beauty of independent filmmaking is the freedom to tell stories that challenge conventional thinking.",
    image: "/api/placeholder/150/150"
  },
  {
    name: "Olivia Chen",
    role: "Grammy-Winning Artist",
    quote: "This album represents a complete reinvention of my sound and a deeper reflection of my journey.",
    image: "/api/placeholder/150/150"
  }
];

const upcomingReleases = [
  {
    title: "Shadows of Eternity",
    type: "Movie",
    genre: "Sci-Fi/Thriller",
    releaseDate: "April 15, 2025",
    image: "/api/placeholder/120/180"
  },
  {
    title: "The Last Kingdom",
    type: "TV Series",
    genre: "Historical Drama",
    releaseDate: "April 8, 2025",
    image: "/api/placeholder/120/180"
  },
  {
    title: "Dreamscape",
    type: "Album",
    artist: "Lunar Echo",
    releaseDate: "March 28, 2025",
    image: "/api/placeholder/120/180"
  },
  {
    title: "Chronicles of the Fallen",
    type: "Book",
    author: "R.M. Winters",
    releaseDate: "April 22, 2025",
    image: "/api/placeholder/120/180"
  },
];

const Entertainment = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-purple-900 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Entertainment</h1>
          <p className="text-xl opacity-90">
            Your source for the latest in movies, television, music, and celebrity news
          </p>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="bg-white shadow py-4 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto no-scrollbar space-x-6">
            {entertainmentCategories.map((category) => (
              <Link 
                key={category.name} 
                to="#" 
                className="flex flex-col items-center px-4 py-2 rounded-lg hover:bg-gray-100 whitespace-nowrap transition"
              >
                <span className="text-2xl mb-1">{category.icon}</span>
                <span className="text-sm font-medium">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Featured Entertainment Story */}
        <div className="mb-12">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="relative">
              <img
                src={featuredStory.image}
                alt="Featured entertainment news"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-4 w-auto">
                  {featuredStory.category}
                </span>
                <h1 className="text-4xl font-bold text-white mb-3">{featuredStory.title}</h1>
                <p className="text-white text-lg mb-4 max-w-3xl">{featuredStory.summary}</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-300 mr-3"></div>
                  <div>
                    <p className="font-medium text-white">{featuredStory.author}</p>
                    <p className="text-gray-300 text-sm">{featuredStory.time}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Entertainment News */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-bold mb-6">
              Latest Entertainment News
            </h2>
            <div className="space-y-6">
              {entertainmentNews.map((news) => (
                <div key={news.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <div className="relative h-full">
                        <img
                          src={news.image}
                          alt={news.title}
                          className="w-full h-56 md:h-full object-cover"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                            {news.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-3/5 p-6">
                      <h3 className="text-xl font-bold mb-3">{news.title}</h3>
                      <p className="text-gray-600 mb-4">{news.summary}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-gray-200 mr-2"></div>
                          <div>
                            <span className="text-sm font-medium block">{news.author}</span>
                            <span className="text-gray-500 text-xs">{news.time}</span>
                          </div>
                        </div>
                        <Link
                          to="#"
                          className="text-purple-600 font-semibold hover:underline"
                        >
                          Read more →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Celebrity Interviews */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">
                Exclusive Interviews
              </h2>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="grid md:grid-cols-3 gap-6">
                  {celebrityInterviews.map((interview, index) => (
                    <div key={index} className="text-center">
                      <div className="h-32 w-32 mx-auto mb-4">
                        <img 
                          src={interview.image} 
                          alt={interview.name} 
                          className="w-full h-full object-cover rounded-full" 
                        />
                      </div>
                      <h3 className="font-bold text-lg">{interview.name}</h3>
                      <p className="text-purple-600 text-sm mb-2">{interview.role}</p>
                      <p className="text-gray-600 italic">"{interview.quote}"</p>
                      <Link to="#" className="text-purple-600 text-sm font-medium mt-2 inline-block hover:underline">
                        Read full interview
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Video Gallery */}
            <div className="mt-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Video Highlights</h2>
                <Link to="#" className="text-purple-600 font-medium hover:underline">
                  View all videos
                </Link>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl overflow-hidden shadow-md">
                  <div className="relative">
                    <img 
                      src="/api/placeholder/600/340" 
                      alt="Video thumbnail" 
                      className="w-full h-60 object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full bg-purple-600 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Behind the Scenes: Making of 'Eternal Shadows'</h3>
                    <p className="text-gray-500 text-sm">15:42 • 2 days ago</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl overflow-hidden shadow-md">
                  <div className="relative">
                    <img 
                      src="/api/placeholder/600/340" 
                      alt="Video thumbnail" 
                      className="w-full h-60 object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full bg-purple-600 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Live Performance: Lunar Echo at Summer Festival</h3>
                    <p className="text-gray-500 text-sm">8:27 • 3 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Content */}
          <div className="lg:w-1/3">
            {/* Coming Soon */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
              <div className="bg-purple-600 text-white px-6 py-4">
                <h2 className="text-xl font-bold">Coming Soon</h2>
              </div>
              <div>
                {upcomingReleases.map((release, index) => (
                  <div 
                    key={index} 
                    className={`p-4 flex ${
                      index !== upcomingReleases.length - 1 ? "border-b border-gray-100" : ""
                    }`}
                  >
                    <img 
                      src={release.image} 
                      alt={release.title} 
                      className="w-16 h-24 object-cover rounded shadow mr-4"
                    />
                    <div>
                      <h3 className="font-bold text-lg mb-1">{release.title}</h3>
                      <div className="text-xs text-gray-600 mb-2">
                        <span className="bg-gray-100 px-2 py-1 rounded mr-2">{release.type}</span>
                        {release.genre && <span>{release.genre}</span>}
                        {release.artist && <span>by {release.artist}</span>}
                        {release.author && <span>by {release.author}</span>}
                      </div>
                      <p className="text-sm">
                        <span className="text-purple-600 font-medium">Release:</span> {release.releaseDate}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Reviews */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
              <div className="bg-purple-600 text-white px-6 py-4">
                <h2 className="text-xl font-bold">Popular Reviews</h2>
              </div>
              <div className="p-4 border-b border-gray-100">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold">The Eternity Code</h3>
                  <div className="flex">
                    {Array(4).fill(0).map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-1">
                  "A cinematic masterpiece with breathtaking visuals and a haunting score."
                </p>
                <Link to="#" className="text-xs text-purple-600 hover:underline">Read review</Link>
              </div>
              
              <div className="p-4 border-b border-gray-100">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold">Dawn of Legends</h3>
                  <div className="flex">
                    {Array(5).fill(0).map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-1">
                  "The most innovative television series in years, redefining the fantasy genre."
                </p>
                <Link to="#" className="text-xs text-purple-600 hover:underline">Read review</Link>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold">Rhythms of Tomorrow</h3>
                  <div className="flex">
                    {Array(3).fill(0).map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    {Array(2).fill(0).map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-1">
                  "An ambitious album that doesn't quite fulfill its promise despite strong moments."
                </p>
                <Link to="#" className="text-xs text-purple-600 hover:underline">Read review</Link>
              </div>
            </div>

            {/* Subscribe */}
            <div className="bg-gradient-to-r from-purple-700 to-indigo-800 rounded-xl shadow-md overflow-hidden p-6 text-white">
              <h2 className="text-xl font-bold mb-2">Stay Updated</h2>
              <p className="opacity-90 mb-4">
                Get the latest entertainment news and exclusive content directly to your inbox.
              </p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
                <button className="w-full bg-white text-purple-700 px-4 py-2 rounded font-medium hover:bg-gray-100 transition">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entertainment;