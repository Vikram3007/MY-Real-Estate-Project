import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// HomeCliclk2 is used both on the public site and inside the admin dashboard.
// - When `properties` are passed in and `showDetails` is false it acts as a
//   read‑only catalogue (used by AdminDashboard).
// - Otherwise it fetches the list itself and optionally renders a details
//   button that could be wired up later.
const HomeCliclk2 = ({ properties: initialProperties = null, showDetails = true }) => {
  const [properties, setProperties] = useState(initialProperties || []);
  const navigate = useNavigate();

  useEffect(() => {
    if (!initialProperties) {
      // only fetch from backend if we weren't given a list
      const fetchProperties = async () => {
        try {
          const res = await fetch('/api/properties');
          const data = await res.json();
          setProperties(data);
        } catch (err) {
          console.error('failed to load properties', err);
        }
      };
      fetchProperties();
    }
  }, [initialProperties]);

  const handleView = (id) => {
    // placeholder for navigation; route doesn't exist yet but we can add later
    navigate(`/properties/${id}`);
  };

  if (!properties.length) {
    return <div className="text-center py-10">No properties to display</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-30 gap-6">
      {properties.map((p) => (
        <div
          key={p._id || p.title}
          className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
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
          {showDetails && (
            <button
              onClick={() => handleView(p._id)}
              className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded"
            >
              View Details
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default HomeCliclk2;