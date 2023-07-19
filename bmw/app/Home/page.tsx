'use client'
import React from 'react';
import './Home.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import FAQSection from '../faq/faq';
import HeroSection from '../heroSection/HeroSection';
import AboutUsHome from '../aboutUsHome/AboutUsHome';
import Cards from '../card/Card';


const Home = () => {
  useEffect(() => {
    getCars();
    getUsedCars();
  }, []);
  const [newcars, setNewcars] = useState([]);
  const [usedcars, setUsedcars] = useState([]);
  //!car interface
  interface Car {
    id: number,
    brand: string,
    price: number,
    category: string,
    color: string,
    year: number,
    image: string,
    mileage: number,
    model: string,
    transmission: string,
    hp: number,
    carburant: string,
    rate: number
  }
  const getCars = () => {
    axios
      .get('http://localhost:5000/newcars')
      .then((res) => {
        setNewcars(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUsedCars = () => {
    axios
      .get('http://localhost:5000/usedcars/getall')
      .then((res) => {
        setUsedcars(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='home-wrap'>
      <div className="collectionHome">
        <div className="button-group">
          <a className="btn-top-1" href="#newcars">New Cars!</a>
          <a className="btn-top-2" href="#usedcars">Used Cars</a>
        </div>
      </div>

      <HeroSection />

      <div className="collectionHome">
        <h1>About Us</h1>
        <span>Dive into these new worlds with us, get inspired, and experience something new, unusual and helpful every day. At BMW our digital interpretation of the sheer pleasure of driving</span>

        <AboutUsHome />
      </div>
      <div className="collectionHome">
        <h1>All Collection</h1>
        <Grid item xs={12} md={12}>
          <div id='newcars' className='card-columns-home'>
            {newcars.slice(0, 3).map((car: Car) => (
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
          <Grid>
            <div id='usedcars' className='card-columns-home'>
              {usedcars.slice(0, 3).map((car: Car) => (
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
          </Grid>
        </Grid>

      </div>
      <div className="collectionHome">
        <h1>Freaquently Asked Question</h1>
      </div>
      <div className='collectionHomeFaq'>
        <FAQSection />
      </div>
    </div>
  );
};

export default Home;
