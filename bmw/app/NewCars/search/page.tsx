'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from '../../card/Card';
import '../newcars.css'


interface Car {
  id: number;
  brand: string;
  price: number;
  category: string;
  color: string;
  year: number;
  image: string;
  mileage: number;
  model: string;
  transmission: string;
  hp: number;
  carburant: string;
  rate: number;
}

function NewCarsSearchResults() {
  const keyword:string|number|boolean = useSearchParams().get('keyword');
  const pathname = usePathname()
 

  const [searchResults, setSearchResults] = useState<Car[]>([]);

  useEffect(() => {
    const url = `${pathname}?${keyword}`
    console.log(keyword)
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/newcars/search?keyword=${encodeURIComponent(keyword)}`
        );
        setSearchResults(response.data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    if (typeof keyword === 'string') {
      fetchSearchResults();
    }
  }, [keyword]);

  return (
    <div>
      <h2>Search Results</h2>
      {searchResults.length !== 0 ? (
        <div className="card-columns">
          {searchResults.map((car) => (
            <Cards
              key={car.id}
              brand={car.brand}
              price={car.price}
              category={car.category}
              color={car.color}
              year={car.year}
              image={car.image}
              mileage={car.mileage}
              model={car.model}
              transmission={car.transmission}
              hp={car.hp}
              carburant={car.carburant}
              rate={car.rate}
            />
          ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}

export default NewCarsSearchResults;
