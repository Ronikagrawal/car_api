import { useEffect, useState } from 'react';
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
    axios.get('https://carapi.app/api/trims', {
      params: { ...filters, verbose: "yes" },
    },)
      .then(response => setCars(response.data))
      .catch(error => setError('Error fetching cars'));
  };

  useEffect(() => {
    axios.post('https://carapi.app/api/auth/login', {
      "api_token": "02bad011-1e6c-4703-8d58-a1eb42345587",
      "api_secret": "d3c72251c909ea39895f72be7f22d37d"
    })
  }, [])

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
