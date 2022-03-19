import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { ALL_POD_OPTIONS } from '../utils/queries';
import { PodTable } from '../components/Tables';

export default function Pods() {
    const getAllPodOptions = useQuery(ALL_POD_OPTIONS);
    const errors = getAllPodOptions.errors;
    const loading = getAllPodOptions.loading;

    if (loading) {
        return <div>Loading...</div>;
    }

    const allPodOptions = getAllPodOptions.data?.allPodOptions;
    console.log(allPodOptions);

    return (
        <div className="display-page">
            {errors ? (
                <div>
                    <p>{errors}</p>
                </div>
            ) : (
                <div className="main-data-container">
                    <div className="data-dashboard">
                        <PodTable allPodOptions={allPodOptions} />
                    </div>
                    <Link to="/">Go Back Home</Link>
                </div>
            )}
        </div>
    );
}
