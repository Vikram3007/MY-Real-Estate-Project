import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(undefined);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await fetch(`/api/properties/${id}`);
        if (!res.ok) {
          if (res.status === 404) {
            setError('Property not found');
          } else {
            setError('Failed to load');
          }
          setProperty(null);
          return;
        }
        const data = await res.json();
        setProperty(data);
      } catch (err) {
        console.error(err);
        setError('Server error');
        setProperty(null);
      }
    };
    fetchProperty();
  }, [id]);

  if (property === undefined && !error) {
    return <div className="p-6 text-center">Loading...</div>;
  }

  if (error || !property) {
    return (
      <div className="p-10 text-center">
        {error || 'Property not found'}
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 pt-25 bg-white rounded-md shadow-md">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-600 hover:underline"
      >
        ← Back
      </button>
      {property.image && (
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-64 object-cover rounded mb-4"
        />
      )}
      <h1 className="text-2xl font-bold mb-2">{property.title}</h1>
      <p className="text-gray-700 mb-1">
        <strong>Location:</strong> {property.location}
      </p>
      <p className="text-gray-700 mb-1">
        <strong>Price:</strong> ₹{property.price}
      </p>
      <p className="text-gray-700 mb-1">
        <strong>Type:</strong> {property.type}
      </p>
      <p className="text-gray-700 mb-1">
        <strong>Description:</strong> {property.description || 'N/A'}
      </p>
      <p className="text-gray-700 mb-1">
        <strong>Bedrooms:</strong> {property.bedrooms || 'N/A'}
      </p>
      <p className="text-gray-700 mb-1">
        <strong>Bathrooms:</strong> {property.bathrooms || 'N/A'}
      </p>
      <p className="text-gray-700 mb-1">
        <strong>Area:</strong> {property.area || 'N/A'}
      </p>
    </div>
  );
};

export default PropertyDetails;
