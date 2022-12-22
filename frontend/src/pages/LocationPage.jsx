import React from 'react';
import { useParams } from "react-router-dom";
import locations from '../__mocks__/locations.json';

import { Slider } from '../components/locationPage/Slider.jsx';
import Tags from '../components/locationPage/Tags.jsx';
import Rating from '../components/locationPage/Rating.jsx';
import Host from '../components/locationPage/Host.jsx';
import { Faq } from '../components/utils/Faq.jsx';

export const LocationPage = () => {
    const { locationId } = useParams();
    const locationContent = locations.find((locationContent) => locationContent.id === locationId);
    const {title, location, rating, host, equipments, description, pictures } = locationContent;

    return (
        <main>
            <Slider slides={pictures} />
            <div className="locationPage-content">
                <div className="locationPage-informations">
                    <h1 className="locationPage-title">{title}</h1>
                    <p className="locationPage-location">{location}</p>
                    <div className="locationPage-tags">
                        {locationContent.tags.map((tag, index) => (
                            <Tags key={index} getTag={tag} />
                        ))}
                    </div>
                </div>
                <div className="locationPage-content_rating-host">
                    <Host host={host} />
                    <Rating rating={rating} />
                </div>
            </div>
            <div className="locationPage-description">
                <Faq title="Description" content={description} />
                <Faq title="Équipement" content={equipments} />
            </div>
        </main>
    )
}

export default LocationPage;