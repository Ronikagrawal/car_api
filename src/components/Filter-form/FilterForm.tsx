import React, { useState } from 'react';
import './FilterForm.css';
import { FilterFormProps } from '../../types/type';


const FilterForm = ({ onSearch }: FilterFormProps) => {
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch({ make, model, year });
    };

    return (
        <form className="filter-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Make</label>
                <input type="text" value={make} onChange={(e) => setMake(e.target.value)} placeholder="Make" />
            </div>
            <div className="form-group">
                <label>Model</label>
                <input type="text" value={model} onChange={(e) => setModel(e.target.value)} placeholder="Model" />
            </div>
            <div className="form-group">
                <label>Year</label>
                <input type="number" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Year" />
            </div>
            <button type="submit">Search</button>
        </form>
    );
};

export default FilterForm;
