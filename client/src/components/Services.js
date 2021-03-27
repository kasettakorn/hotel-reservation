import React, { useState } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default function Services() {
    const [services, setServices] = useState([{
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info: 'Id do excepteur et ad ipsum sint nisi amet et duis mollit veniam sint.',
    },
    {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: 'Id do excepteur et ad ipsum sint nisi amet et duis mollit veniam sint.',
    },
    {
        icon: <FaShuttleVan />,
        title: "Free Shuttle Van",
        info: 'Id do excepteur et ad ipsum sint nisi amet et duis mollit veniam sint.',
    },
    {
        icon: <FaBeer />,
        title: "Free Beer",
        info: 'Id do excepteur et ad ipsum sint nisi amet et duis mollit veniam sint.',
    }]);
    return (
        <div className="services">
            <Title title="services" />
            <div className="services-center">
                {services.map((service, i) => {
                    return <div key={i} className="service">
                        <span>{service.icon}</span>
                        <h6>{service.title}</h6>
                        <p>{service.info}</p>
                    </div>
                })}
            </div>

            
        </div>
    )
}
