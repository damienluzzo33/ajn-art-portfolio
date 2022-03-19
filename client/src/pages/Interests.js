import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { ALL_INTERESTS } from '../utils/queries';
import { InterestsTable } from '../components/Tables';

export default function Interests() {
    const getAllInterests = useQuery(ALL_INTERESTS);
    const errors = getAllInterests.errors;
    const loading = getAllInterests.loading;

    if (loading) {
        return <div>Loading...</div>;
    }

    const allInterests = getAllInterests.data?.allInterests;
    console.log(allInterests);

    return (
        <div>
            {errors ? (
                <div>
                    <p>{errors}</p>
                </div>
            ) : (
                <div>
                    <div className="data-dashboard">
                        <InterestsTable allInterests={allInterests} />
                    </div>
                    <Link to="/">Go Back Home</Link>
                </div>
            )}
        </div>
    );
}
