'use client';

import { useState, useEffect } from 'react';

export default function BackendTestPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [connectionStatus, setConnectionStatus] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    stock_quantity: '',
    category: '',
    sku: '',
    is_featured: false
  });

  const API_URL = 'https://phpstack-1512757-5811248.cloudwaysapps.com/api';

  // Test API Connection
  const testConnection = async () => {
    try {
      const response = await fetch(`${API_URL}/test`);
      const data = await response.json();
      setConnectionStatus(`✅ API Connected: ${data.message}`);
      setError('');
    } catch (err) {
      setConnectionStatus('❌ API Connection Failed');
      setError(err.message);
    }
  };

  // Fetch all products
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/products`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      setProducts(data);
      setError('');
    } catch (err) {
      setError(`Failed to fetch products: ${err.message}`);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  // Add new product
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price),
          stock_quantity: parseInt(formData.stock_quantity)
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(JSON.stringify(errorData.errors || errorData.message));
      }

      const newProduct = await response.json();
      alert('Product added successfully!');
      setShowAddForm(false);
      setFormData({
        name: '',
        description: '',
        price: '',
        stock_quantity: '',
        category: '',
        sku: '',
        is_featured: false
      });
      fetchProducts();
    } catch (err) {
      alert(`Error adding product: ${err.message}`);
    }
  };

  // Delete product
  const deleteProduct = async (id) => {
    if (!confirm('Are you sure you want to delete this product?')) return;
    
    try {
      const response = await fetch(`${API_URL}/products/${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) throw new Error('Failed to delete product');
      
      alert('Product deleted successfully!');
      fetchProducts();
    } catch (err) {
      alert(`Error deleting product: ${err.message}`);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  useEffect(() => {
    testConnection();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Laravel Backend Test Page</h1>
        
        {/* Connection Status */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">API Connection Status</h2>
          <p className={`text-lg ${connectionStatus.includes('✅') ? 'text-green-600' : 'text-red-600'}`}>
            {connectionStatus || 'Testing connection...'}
          </p>
          <button 
            onClick={testConnection}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Test Connection Again
          </button>
        </div>

        {/* Products Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Products</h2>
            <div className="space-x-4">
              <button 
                onClick={fetchProducts}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
              >
                Fetch Products
              </button>
              <button 
                onClick={() => setShowAddForm(!showAddForm)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                {showAddForm ? 'Cancel' : 'Add New Product'}
              </button>
            </div>
          </div>

          {/* Add Product Form */}
          {showAddForm && (
            <form onSubmit={handleSubmit} className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4">Add New Product</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">SKU</label>
                  <input
                    type="text"
                    name="sku"
                    value={formData.sku}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                  <input
                    type="number"
                    step="0.01"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Stock Quantity</label>
                  <input
                    type="number"
                    name="stock_quantity"
                    value={formData.stock_quantity}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="is_featured"
                      checked={formData.is_featured}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <span className="text-sm font-medium text-gray-700">Featured Product</span>
                  </label>
                </div>
              </div>
              <button 
                type="submit"
                className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
              >
                Add Product
              </button>
            </form>
          )}

          {/* Error Display */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
              <p className="mt-2 text-gray-600">Loading products...</p>
            </div>
          )}

          {/* Products List */}
          {!loading && products.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map(product => (
                <div key={product.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                  <div className="space-y-1 text-sm">
                    <p><span className="font-medium">Price:</span> ${product.price}</p>
                    <p><span className="font-medium">Stock:</span> {product.stock_quantity}</p>
                    <p><span className="font-medium">Category:</span> {product.category}</p>
                    <p><span className="font-medium">SKU:</span> {product.sku}</p>
                    <p><span className="font-medium">Featured:</span> {product.is_featured ? 'Yes' : 'No'}</p>
                  </div>
                  <button 
                    onClick={() => deleteProduct(product.id)}
                    className="mt-4 bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* No Products Message */}
          {!loading && products.length === 0 && !error && (
            <p className="text-center text-gray-600 py-8">
              No products found. Click "Fetch Products" to load products or add a new one.
            </p>
          )}
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-4">
          <p className="text-blue-700">
            <strong>Note:</strong> Make sure your Laravel backend is running on http://localhost:8000
          </p>
          <p className="text-blue-700 mt-2">
            Run <code className="bg-blue-100 px-2 py-1 rounded">php artisan serve</code> in your Laravel project directory.
          </p>
        </div>
      </div>
    </div>
  );
}