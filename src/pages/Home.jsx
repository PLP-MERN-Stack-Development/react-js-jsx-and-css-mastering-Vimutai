import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

const Home = () => {
  const features = [
    {
      title: 'Task Management',
      description: 'Organize your tasks with our intuitive task manager. Add, complete, and filter tasks with ease.',
      icon: '✅',
      path: '/tasks'
    },
    {
      title: 'User Directory',
      description: 'Browse through user data fetched from JSONPlaceholder API with search and pagination.',
      icon: '👥',
      path: '/users'
    },
    {
      title: 'Dark Mode',
      description: 'Toggle between light and dark themes for comfortable viewing in any lighting condition.',
      icon: '🌙',
      path: '/'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Welcome to{' '}
          <span className="text-blue-600 dark:text-blue-400">TaskMaster</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          A modern React application demonstrating component architecture, state management, 
          and API integration with beautiful Tailwind CSS styling.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/tasks">
            <Button variant="primary" className="text-lg px-8 py-3">
              Get Started
            </Button>
          </Link>
          <Link to="/users">
            <Button variant="secondary" className="text-lg px-8 py-3">
              Browse Users
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section>
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:scale-105 transition-transform duration-200">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {feature.description}
              </p>
              <Link to={feature.path}>
                <Button variant="primary">
                  Explore
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section>
        <Card className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">React 18</div>
              <div className="text-gray-600 dark:text-gray-400">Latest Features</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">Tailwind</div>
              <div className="text-gray-600 dark:text-gray-400">Utility-First CSS</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">Vite</div>
              <div className="text-gray-600 dark:text-gray-400">Fast Build Tool</div>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Home;