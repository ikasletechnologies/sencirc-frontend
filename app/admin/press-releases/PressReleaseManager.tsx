'use client';

import React, { useState, useEffect } from 'react';
import { PressRelease } from '@prisma/client';

export default function PressReleaseManager() {
  const [items, setItems] = useState<PressRelease[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Edit State
  const [editingId, setEditingId] = useState<string | null>(null);

  // Form state
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    try {
      const response = await fetch('/api/press-releases');
      if (!response.ok) throw new Error('Failed to fetch press releases');
      const data = await response.json();
      setItems(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const url = editingId ? `/api/press-releases/${editingId}` : '/api/press-releases';
      const method = editingId ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content, date }),
      });

      if (!response.ok) throw new Error(`Failed to ${editingId ? 'update' : 'create'} press release`);

      // Reset form
      handleCancelEdit();
      
      // Refresh list
      fetchItems();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (item: PressRelease) => {
    setEditingId(item.id);
    setTitle(item.title);
    setContent(item.content);
    // Format date string for the input type="date"
    setDate(new Date(item.date).toISOString().split('T')[0]);
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setTitle('');
    setContent('');
    setDate('');
    setError(null);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this press release?')) return;

    try {
      const response = await fetch(`/api/press-releases/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete press release');
      
      // If we deleted the item we are currently editing, reset the form
      if (editingId === id) {
        handleCancelEdit();
      }

      // Refresh list
      fetchItems();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  return (
    <div className="space-y-8">
      {/* Create/Edit Form */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-[#1f3f49] mb-4">
          {editingId ? 'Edit Press Release' : 'Add New Press Release'}
        </h2>
        
        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8cc63f] focus:border-transparent"
              placeholder="e.g. DHL Express signs Bahrain SAF..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <input
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8cc63f] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Content (Use enter for paragraphs)</label>
            <textarea
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={6}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8cc63f] focus:border-transparent resize-y"
              placeholder="Full article text..."
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-[#8cc63f] text-white font-semibold py-3 px-4 rounded-lg hover:bg-[#7ab133] transition-colors disabled:opacity-50"
            >
              {isSubmitting ? (editingId ? 'Updating...' : 'Adding...') : (editingId ? 'Update Press Release' : 'Add Press Release')}
            </button>
            
            {editingId && (
              <button
                type="button"
                onClick={handleCancelEdit}
                disabled={isSubmitting}
                className="bg-gray-100 text-gray-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* List */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-[#1f3f49] mb-4">Manage Press Releases</h2>
        
        {isLoading ? (
          <div className="text-gray-500">Loading...</div>
        ) : items.length === 0 ? (
          <div className="text-gray-500 text-center py-8">No press releases found. Create one above!</div>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className={`flex flex-col md:flex-row gap-4 justify-between items-start md:items-center p-4 border rounded-lg transition-colors ${editingId === item.id ? 'border-[#8cc63f] bg-[#f1fbe8]' : 'border-gray-100 hover:bg-gray-50'}`}>
                <div className="flex-1">
                  <h3 className="font-semibold text-[#1f3f49]">{item.title}</h3>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-1">{item.content}</p>
                  <p className="text-xs text-[#8cc63f] mt-2 font-medium">
                    {new Date(item.date).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button
                    onClick={() => handleEdit(item)}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium px-4 py-2 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-600 hover:text-red-800 text-sm font-medium px-4 py-2 bg-red-50 rounded-md hover:bg-red-100 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
