import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeClick2 from '../House/HomeClickEvent/HomeCliclk2';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/admin/login');
    }
  }, [token, navigate]);

  const [properties, setProperties] = useState([]);
  const [form, setForm] = useState({
    title: '',
    location: '',
    price: '',
    type: '',
    image: '', // will hold existing url when editing
    description: '',
    bedrooms: '',
    bathrooms: '',
    area: ''
  });
  const [imageFile, setImageFile] = useState(null); // new file state
  const [editingId, setEditingId] = useState(null);

  const fetchProperties = async () => {
    try {
      const res = await fetch('/api/properties');
      const data = await res.json();
      setProperties(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) return;
    const url = editingId ? `/api/properties/${editingId}` : '/api/properties';
    const method = editingId ? 'PUT' : 'POST';
    try {
      const formData = new FormData();
      formData.append('title', form.title);
      formData.append('location', form.location);
      formData.append('price', form.price);
      formData.append('type', form.type);
      formData.append('description', form.description);
      formData.append('bedrooms', form.bedrooms);
      formData.append('bathrooms', form.bathrooms);
      formData.append('area', form.area);
      // include file if selected otherwise keep existing url
      if (imageFile) {
        formData.append('image', imageFile);
      } else if (form.image) {
        formData.append('image', form.image);
      }

      const res = await fetch(url, {
        method,
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      });
      if (res.ok) {
        setForm({ title: '', location: '', price: '', type: '', image: '', description: '', bedrooms: '', bathrooms: '', area: '' });
        setImageFile(null);
        setEditingId(null);
        fetchProperties();
      } else {
        const errData = await res.json();
        console.error('submit error', errData);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (p) => {
    setForm({
      title: p.title,
      location: p.location,
      price: p.price,
      type: p.type,
      image: p.image,
      description: p.description || '',
      bedrooms: p.bedrooms || '',
      bathrooms: p.bathrooms || '',
      area: p.area || ''
    });
    setImageFile(null); // clear any previous file
    setEditingId(p._id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (!token) return;
    if (!window.confirm('Are you sure you want to delete this property?')) return;
    try {
      const res = await fetch(`/api/properties/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (res.ok) {
        fetchProperties();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* header */}
      <header className="bg-blue-600 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* property form */}
        <section className="mb-8 bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800 font-serif">
            {editingId ? 'Edit' : 'Add'} Property
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="title"
                value={form.title}
                onChange={handleFormChange}
                placeholder="Title"
                className="border p-2 rounded w-full"
                required
              />
              <input
                name="location"
                value={form.location}
                onChange={handleFormChange}
                placeholder="Location"
                className="border p-2 rounded w-full"
                required
              />
              <input
                name="price"
                value={form.price}
                onChange={handleFormChange}
                placeholder="Price"
                className="border p-2 rounded w-full"
                required
              />
              <input
                name="type"
                value={form.type}
                onChange={handleFormChange}
                placeholder="Type"
                className="border p-2 rounded w-full"
                required
              />
              <div>
                <input
                  type="file"
                  name="image"
                  onChange={handleFileChange}
                  className="border p-2 rounded w-full"
                />
                {form.image && !imageFile && (
                  <p className="text-xs text-gray-500 mt-1">
                    Current: <span className="font-semibold">{form.image}</span>
                  </p>
                )}
              </div>
            </div>
            <textarea
              name="description"
              value={form.description}
              onChange={handleFormChange}
              placeholder="Description"
              className="border p-2 rounded w-full mb-4"
              rows="2"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <input
                name="bedrooms"
                value={form.bedrooms}
                onChange={handleFormChange}
                placeholder="Bedrooms"
                className="border p-2 rounded w-full"
              />
              <input
                name="bathrooms"
                value={form.bathrooms}
                onChange={handleFormChange}
                placeholder="Bathrooms"
                className="border p-2 rounded w-full"
              />
              <input
                name="area"
                value={form.area}
                onChange={handleFormChange}
                placeholder="Area (sq ft)"
                className="border p-2 rounded w-full"
              />
            </div>
            <button
              type="submit"
              className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
            >
              {editingId ? 'Update' : 'Create'}
            </button>
          </form>
        </section>

        {/* properties list */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-blue-800 font-serif">Properties</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((p) => (
              <div
                key={p._id}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition border-l-4 border-blue-500"
              >
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                )}
                <h3 className="text-xl font-semibold mb-1">{p.title}</h3>
                <p className="text-gray-600 text-sm mb-1">{p.location}</p>
                <p className="text-gray-800 font-bold mb-1">₹{p.price}</p>
                <p className="text-sm text-gray-500 mb-3">{p.type}</p>
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleEdit(p)}
                    className="bg-yellow-200 hover:bg-yellow-300 text-yellow-800 px-2 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(p._id)}
                    className="bg-red-200 hover:bg-red-300 text-red-800 px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* read‑only showcase of properties using HomeClick2; no edit/update controls here */}
        <section className="mt-8 bg-gradient-to-r from-blue-50 to-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800 font-serif">Properties Showcase</h2>
          {/* showDetails=false hides the action button since this is just a preview */}
          <HomeClick2 properties={properties} showDetails={false} />
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
