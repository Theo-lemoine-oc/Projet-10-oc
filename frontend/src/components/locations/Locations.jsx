import React from 'react';

import {Cards} from './Cards.jsx';
import locations from '../../__mocks__/locations.json';
import './locations.css';


export const Locations = () => {
    return (
        <section class="locations">
            {locations.map((location) => {
                return (
                    <article key={ location.id }>
                        <a href={`/locations/${ location.id }`}>
                            <Cards image={ location.cover } title={ location.title } />
                        </a>
                    </article>
                );
            })}
        </section>
    )
}