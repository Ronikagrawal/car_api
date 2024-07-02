import {  useState } from 'react';
import './App.css';
import axios from 'axios';
import { Car } from './types/type';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FilterForm from './components/Filter-form/FilterForm';
import CarList from './components/Car-list/CarList';
import CarDetails from './components/Car-details/CarDetails';

function App() {
  const [cars, setCars] = useState<Car[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = (filters: { make: string; model: string; year: string }) => {
    setError(null);
    axios.get('https://cors-anywhere.herokuapp.com/https://carapi.app/api/trims', {
      params: { ...filters, verbose: "yes" },
    },)
      .then(response => setCars(response.data))
      .catch(error => setError('Error fetching cars'));
  };
  
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <>
              <FilterForm onSearch={handleSearch} />
              {error && <div className="error">{error}</div>}
              <CarList cars={cars} />
            </>
          } />
          <Route path="/car/:id" element={<CarDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
