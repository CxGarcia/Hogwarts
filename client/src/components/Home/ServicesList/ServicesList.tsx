// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { Link } from '@reach/router';
import './ServicesList.css';

const services = [
  'Home Cleaning',
  'Plumbing',
  'Carpentry',
  'Car Services',
  'Electricity',
  'Painting',
  'Furniture assembly',
  'Appliance installation',
  'Disinfection & Sterilization',
  'Tile & Ceramic Installation'
];

const ServicesList: React.FC = () => {
  return (
    <div id="SERVICES">
      <h1 className="Services-Title">Our Services</h1>
      <div className="service-list">
        {services.map((service) => {
          return (
            <div key={service} className="service-box">
              <Link className="service-box-inner" to="/checkout">
                <img className="services-img" src={'/imgs/' + service + '.png'} alt={service}></img>
                <h3 className="service-head">{service}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesList;
