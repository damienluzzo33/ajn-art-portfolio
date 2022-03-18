import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { ALL_COLLECTORS } from '../utils/queries';

export default function Collectors() {
    const getAllCollectors = useQuery(ALL_COLLECTORS);
    const errors = getAllCollectors.errors;
    const loading = getAllCollectors.loading;

    if (loading) {
        return (
            <div>Loading...</div>
        )
    }

    const allCollectors = getAllCollectors.data?.allCollectors;
    console.log(allCollectors);

    return (
        <div>
            {errors ? (
                <div>
                    <p>{errors}</p>
                </div>
            ) : (
                <div>
                    <p>All Them Collectors Go Here</p>
                    <Link to="/">Go Back Home</Link>
                </div>
            )}
        </div>
    )
}
