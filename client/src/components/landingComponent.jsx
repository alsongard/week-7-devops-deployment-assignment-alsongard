import React from "react";

export default function LandingPage() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-yellow-100 to-orange-200 dark:from-gray-800 dark:to-gray-700">
        <h1 className="text-5xl md:text-6xl font-extrabold text-orange-600 dark:text-yellow-400 mb-4">
          Track, Prioritize & Fix Bugs Faster
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mb-6">
          Welcome to BugTrack — your centralized hub for identifying, managing, and resolving software bugs efficiently. Stay organized, stay productive.
        </p>
        <button className="bg-orange-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-orange-700 transition-all shadow-lg">
          Get Started Now
        </button>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-white">Why Use BugTrack?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-orange-600 dark:text-yellow-400">Real-Time Issue Tracking</h3>
              <p className="text-gray-600 dark:text-gray-300">Log bugs instantly and get real-time updates as issues are fixed or reopened.</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-orange-600 dark:text-yellow-400">Custom Workflows</h3>
              <p className="text-gray-600 dark:text-gray-300">Adapt BugTrack to your development process with flexible statuses and priority labels.</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-orange-600 dark:text-yellow-400">Team Collaboration</h3>
              <p className="text-gray-600 dark:text-gray-300">Assign bugs, comment, and notify team members — all in one platform.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-orange-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Start Squashing Bugs Today</h2>
        <p className="text-lg mb-6">Join developers and teams who streamline their debugging process with BugTrack.</p>
        <button className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-all">
          Create Your Free Account
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-10 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-sm text-gray-600 dark:text-gray-300">
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-3">BugTrack</h4>
            <p>Track and manage bugs seamlessly with a modern interface and real-time tools.</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#">Dashboard</a></li>
              <li><a href="#">Login</a></li>
              <li><a href="#">Register</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">API Reference</a></li>
              <li><a href="#">Community</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Get in Touch</h4>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white"
              />
              <textarea
                rows="3"
                placeholder="Message"
                className="w-full px-3 py-2 rounded bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white"
              ></textarea>
              <button
                type="submit"
                className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-all w-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-10">
          &copy; {new Date().getFullYear()} BugTrack. Built with 🛠️ by Alson Tech.
        </div>
      </footer>
    </div>
  );
}
