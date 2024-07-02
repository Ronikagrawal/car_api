// src/components/CarList.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import {  CarListProps } from '../../types/type';
import './CarList.css';


const CarList = ({ cars }: CarListProps) => (
    <ul className="car-list">
        {cars.map((car) => (
            <li key={car.id} className="car-item">
                <Link to={`/car/${car.id}`}>
                    {car.make} {car.model} ({car.year})
                </Link>
            </li>
        ))}
    </ul>
);

export default CarList;
