import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { ALL_COLLECTORS } from '../utils/queries';
import { CollectorTable } from "../components/Tables";
// import { CollectorOptions } from '../components/OptionsRow';
import { CollectorViews } from '../components/ViewToggleRow';

export default function Collectors() {
    
    const getAllCollectors = useQuery(ALL_COLLECTORS);
    const errors = getAllCollectors.errors;
    const loading = getAllCollectors.loading;

    if (loading) {
        return <div>Loading...</div>;
    }

    const allCollectors = getAllCollectors.data?.allCollectors;
    console.log(allCollectors);

    return (
        <div className="display-page">
            {errors ? (
                <div>
                    <p>{errors}</p>
                </div>
            ) : (
                <div className="main-data-container">
                    <div className="data-dashboard">
                        <CollectorTable allCollectors={allCollectors} />
                    </div>
                    <CollectorViews data={allCollectors} />
                    <div className="go-back-div">
                        <Link to="/">Go Back Home</Link>
                    </div>
                </div>
            )}
        </div>
    );
}
