// src/components/CarDetails.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Car } from '../../types/type';
import './CarDetails.css';

const CarDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [car, setCar] = useState<Car | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios.get(`https://carapi.app/api/trim/${id}`)
            .then(response => {
                setCar(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError('Error fetching car details');
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="spinner">Loading...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="car-details">
            {car && (
                <div>
                    <h1>{car.make} {car.model} ({car.year})</h1>
                    <p>VIN: {car.vin}</p>
                    <p>Engine Type: {car.engine_type}</p>
                    <p>Fuel Type: {car.fuel_type}</p>
                    <p>Transmission: {car.transmission}</p>
                    {/* Add more details as needed */}
                </div>
            )}
        </div>
    );
};

export default CarDetails;
