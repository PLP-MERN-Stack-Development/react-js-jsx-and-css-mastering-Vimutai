import React, { useState, useMemo } from 'react';
import useApi from '../hooks/useApi';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

const Users = () => {
  const { data: users, loading, error, hasMore, loadMore } = useApi('https://jsonplaceholder.typicode.com/users');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = useMemo(() => {
    return users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <Card className="text-center py-8">
          <div className="text-red-600 text-xl mb-4">Error: {error}</div>
          <Button onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Users Directory
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Browse through our user database
        </p>
      </div>

      {/* Search */}
      <Card>
        <div className="flex gap-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search users by name or email..."
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>
      </Card>

      {/* Users Grid */}
      {loading && users.length === 0 ? (
        <Card>
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Loading users...</p>
          </div>
        </Card>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUsers.map((user) => (
              <Card key={user.id} className="animate-fade-in">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {user.name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400">{user.email}</p>
                  </div>
                  
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <p>📱 {user.phone}</p>
                    <p>🏢 {user.company?.name}</p>
                    <p>🌐 {user.website}</p>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      📍 {user.address?.street}, {user.address?.city}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More */}
          {hasMore && (
            <div className="text-center">
              <Button
                onClick={loadMore}
                disabled={loading}
                variant="secondary"
              >
                {loading ? 'Loading...' : 'Load More Users'}
              </Button>
            </div>
          )}

          {/* No Results */}
          {filteredUsers.length === 0 && users.length > 0 && (
            <Card>
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                No users found matching your search.
              </div>
            </Card>
          )}
        </>
      )}
    </div>
  );
};

export default Users;